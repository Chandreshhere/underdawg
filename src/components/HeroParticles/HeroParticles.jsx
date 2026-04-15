"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { isInitialLoad } from "@/components/Preloader/Preloader";

const HeroParticles = ({ logoPath = "/hero copy 2.png" }) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const programRef = useRef(null);
  const glRef = useRef(null);
  const geometryRef = useRef(null);
  const particleGridRef = useRef([]);
  const posArrayRef = useRef(null);
  const colorArrayRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const execCountRef = useRef(0);
  const isCleanedUpRef = useRef(false);
  const isMobileRef = useRef(false);
  const isVisibleRef = useRef(true);
  const formationRef = useRef({ progress: 0, done: false });
  const formationTweenRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const checkMobile = () => window.innerWidth < 1000;
    isMobileRef.current = checkMobile();
    isCleanedUpRef.current = false;

    const CONFIG = {
      canvasBg: "#e3e3db",
      particleGap: isMobileRef.current ? 3 : 2,
      // Wind
      windAmplitudeX: 14,
      windAmplitudeY: 7,
      windSpeed: 0.28,
      windLerpSpeed: 0.045,
      // Hover (gentle, no cutting)
      hoverRadius: isMobileRef.current ? 150 : 250,
      hoverStrength: 3.5,
      hoverReturnForce: 0.08,
      hoverDamping: 0.78,
    };

    const dpr = isMobileRef.current
      ? Math.min(window.devicePixelRatio || 1, 2)
      : window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    const gl = canvas.getContext("webgl", {
      alpha: true,
      depth: false,
      stencil: false,
      antialias: true,
      powerPreference: "high-performance",
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
    });

    if (!gl) return;
    glRef.current = gl;
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16) / 255,
            g: parseInt(result[2], 16) / 255,
            b: parseInt(result[3], 16) / 255,
          }
        : { r: 0, g: 0, b: 0 };
    }

    const vertexShaderSource = `
      precision highp float;
      uniform vec2 u_resolution;
      attribute vec2 a_position;
      attribute vec4 a_color;
      varying vec4 v_color;
      void main() {
        vec2 zeroToOne = a_position / u_resolution;
        vec2 clipSpace = (zeroToOne * 2.0 - 1.0);
        v_color = a_color;
        gl_Position = vec4(clipSpace * vec2(1.0, -1.0), 0.0, 1.0);
        gl_PointSize = 2.5;
      }
    `;

    const fragmentShaderSource = `
      precision highp float;
      varying vec4 v_color;
      void main() {
        if (v_color.a < 0.01) discard;
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
        gl_FragColor = vec4(v_color.rgb, v_color.a * alpha);
      }
    `;

    function createShader(gl, type, source) {
      if (!gl || isCleanedUpRef.current) return null;
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    function createProgram(gl, vs, fs) {
      if (!gl || !vs || !fs || isCleanedUpRef.current) return null;
      const program = gl.createProgram();
      if (!program) return null;
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.deleteProgram(program);
        return null;
      }
      return program;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;
    programRef.current = program;

    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    const colorAttributeLocation = gl.getAttribLocation(program, "a_color");
    const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");

    const loadLogo = () => {
      const image = new Image();
      image.crossOrigin = "anonymous";

      image.onload = () => {
        if (isCleanedUpRef.current) return;

        const tempCanvas = document.createElement("canvas");
        const tempCtx = tempCanvas.getContext("2d");
        const w = canvas.width;
        const h = canvas.height;
        tempCanvas.width = w;
        tempCanvas.height = h;
        tempCtx.clearRect(0, 0, w, h);

        const imgRatio = image.width / image.height;
        const canvasRatio = w / h;
        let drawW, drawH;

        if (imgRatio > canvasRatio) {
          drawH = h;
          drawW = h * imgRatio;
        } else {
          drawW = w;
          drawH = w / imgRatio;
        }

        const scale = isMobileRef.current ? 0.65 : 0.45;
        drawW = drawW * scale;
        drawH = drawH * scale;
        const drawX = Math.round(w * -0.05);
        const drawY = Math.round((h - drawH) / 2);

        tempCtx.drawImage(image, drawX, drawY, drawW, drawH);
        const imageData = tempCtx.getImageData(0, 0, w, h);
        initParticleSystem(imageData.data, w, h);
      };

      image.onerror = () => console.error("Failed to load image:", logoPath);
      image.src = logoPath;
    };

    function initParticleSystem(pixels, w, h) {
      if (isCleanedUpRef.current) return;

      particleGridRef.current = [];
      const validParticles = [];
      const validPositions = [];
      const validColors = [];
      const gap = CONFIG.particleGap;

      for (let i = 0; i < h; i += gap) {
        for (let j = 0; j < w; j += gap) {
          const pixelIndex = (i * w + j) * 4;
          const alpha = pixels[pixelIndex + 3];

          if (alpha > 10) {
            const x = j;
            const y = i;

            validPositions.push(x, y);
            validColors.push(
              pixels[pixelIndex] / 255,
              pixels[pixelIndex + 1] / 255,
              pixels[pixelIndex + 2] / 255,
              1.0
            );

            // Start from left (wind blowing in from left)
            const sx = -(Math.random() * w * 0.8);
            const sy = y + (Math.random() - 0.5) * h * 0.1;

            validParticles.push({ ox: x, oy: y, sx, sy, vx: 0, vy: 0 });
          }
        }
      }

      particleGridRef.current = validParticles;
      posArrayRef.current = new Float32Array(validPositions);
      colorArrayRef.current = new Float32Array(validColors);

      for (let i = 0; i < validParticles.length; i++) {
        posArrayRef.current[i * 2] = validParticles[i].sx;
        posArrayRef.current[i * 2 + 1] = validParticles[i].sy;
      }

      const positionBuffer = gl.createBuffer();
      const colorBuffer = gl.createBuffer();

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, posArrayRef.current, gl.DYNAMIC_DRAW);

      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, colorArrayRef.current, gl.STATIC_DRAW);

      geometryRef.current = {
        positionBuffer,
        colorBuffer,
        vertexCount: validParticles.length,
      };

      timeRef.current = 0;
      formationRef.current = { progress: 0, done: false };

      formationTweenRef.current = gsap.to(formationRef.current, {
        progress: 1,
        duration: 4,
        ease: "power3.out",
        delay: 0.5,
        onComplete: () => {
          if (isCleanedUpRef.current || !posArrayRef.current) return;
          formationRef.current.done = true;
          const particles = particleGridRef.current;
          for (let i = 0; i < particles.length; i++) {
            posArrayRef.current[i * 2] = particles[i].ox;
            posArrayRef.current[i * 2 + 1] = particles[i].oy;
          }
        },
      });

      startAnimation();
    }

    function startAnimation() {
      const bgColor = hexToRgb(CONFIG.canvasBg);

      function animate() {
        if (isCleanedUpRef.current || !gl || !programRef.current || !geometryRef.current) return;

        const particles = particleGridRef.current;
        const posArray = posArrayRef.current;

        if (!formationRef.current.done) {
          // Formation: lerp from start positions toward origin
          const fp = formationRef.current.progress;
          for (let i = 0, len = particles.length; i < len; i++) {
            const d = particles[i];
            posArray[i * 2] = d.sx + (d.ox - d.sx) * fp;
            posArray[i * 2 + 1] = d.sy + (d.oy - d.sy) * fp;
          }
          gl.bindBuffer(gl.ARRAY_BUFFER, geometryRef.current.positionBuffer);
          gl.bufferSubData(gl.ARRAY_BUFFER, 0, posArray);
        } else {
          // Wind + gentle hover
          timeRef.current += 0.016;
          const t = timeRef.current;
          const mx = mouseRef.current.x;
          const my = mouseRef.current.y;
          const hoverR2 = CONFIG.hoverRadius * CONFIG.hoverRadius;
          const mouseActive = execCountRef.current > 0;

          if (mouseActive) execCountRef.current -= 1;

          for (let i = 0, len = particles.length; i < len; i++) {
            const d = particles[i];
            const x = posArray[i * 2];
            const y = posArray[i * 2 + 1];

            // Wind target: sine waves offset from origin
            const windX = Math.sin(t * CONFIG.windSpeed + d.oy * 0.0018 + d.ox * 0.0005) * CONFIG.windAmplitudeX;
            const windY = Math.cos(t * CONFIG.windSpeed * 0.65 + d.ox * 0.0014) * CONFIG.windAmplitudeY;
            const targetX = d.ox + windX;
            const targetY = d.oy + windY;

            // Gentle hover push — no hard repel, just a soft nudge
            if (mouseActive) {
              const dx = x - mx;
              const dy = y - my;
              const dis = dx * dx + dy * dy;
              if (dis < hoverR2 && dis > 1) {
                const dist = Math.sqrt(dis);
                const falloff = 1 - dist / CONFIG.hoverRadius;
                const force = falloff * falloff * CONFIG.hoverStrength;
                d.vx += (dx / dist) * force;
                d.vy += (dy / dist) * force;
              }
            }

            // Return toward wind target, apply damping
            d.vx += (targetX - x) * CONFIG.windLerpSpeed;
            d.vy += (targetY - y) * CONFIG.windLerpSpeed;
            d.vx *= CONFIG.hoverDamping;
            d.vy *= CONFIG.hoverDamping;

            posArray[i * 2] = x + d.vx;
            posArray[i * 2 + 1] = y + d.vy;
          }

          gl.bindBuffer(gl.ARRAY_BUFFER, geometryRef.current.positionBuffer);
          gl.bufferSubData(gl.ARRAY_BUFFER, 0, posArray);
        }

        // Render
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(bgColor.r, bgColor.g, bgColor.b, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(programRef.current);
        gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);

        gl.bindBuffer(gl.ARRAY_BUFFER, geometryRef.current.positionBuffer);
        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, geometryRef.current.colorBuffer);
        gl.enableVertexAttribArray(colorAttributeLocation);
        gl.vertexAttribPointer(colorAttributeLocation, 4, gl.FLOAT, false, 0, 0);

        gl.drawArrays(gl.POINTS, 0, geometryRef.current.vertexCount);

        if (isVisibleRef.current) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          animationFrameRef.current = null;
        }
      }

      animate();
    }

    const handleMouseMove = (event) => {
      if (isCleanedUpRef.current) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      mouseRef.current.x = (event.clientX - rect.left) * dpr;
      mouseRef.current.y = (event.clientY - rect.top) * dpr;
      execCountRef.current = 120;
      if (!animationFrameRef.current && geometryRef.current && isVisibleRef.current) {
        startAnimation();
      }
    };

    const handleResize = () => {
      if (isCleanedUpRef.current) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      loadLogo();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && !animationFrameRef.current && geometryRef.current) {
          startAnimation();
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const handleTouchMove = (event) => {
      if (isCleanedUpRef.current || !event.touches[0]) return;
      const touch = event.touches[0];
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      mouseRef.current.x = (touch.clientX - rect.left) * dpr;
      mouseRef.current.y = (touch.clientY - rect.top) * dpr;
      execCountRef.current = 60;
      if (!animationFrameRef.current && geometryRef.current && isVisibleRef.current) {
        startAnimation();
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("resize", handleResize);

    const startDelay = isInitialLoad ? 5750 : 0;
    const startTimer = setTimeout(() => {
      if (!isCleanedUpRef.current) loadLogo();
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      isCleanedUpRef.current = true;
      if (formationTweenRef.current) formationTweenRef.current.kill();
      observer.disconnect();

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);

      if (gl && !gl.isContextLost()) {
        try {
          if (geometryRef.current) {
            if (geometryRef.current.positionBuffer) gl.deleteBuffer(geometryRef.current.positionBuffer);
            if (geometryRef.current.colorBuffer) gl.deleteBuffer(geometryRef.current.colorBuffer);
            geometryRef.current = null;
          }
          if (programRef.current) {
            const shaders = gl.getAttachedShaders(programRef.current);
            if (shaders) shaders.forEach((s) => { gl.detachShader(programRef.current, s); gl.deleteShader(s); });
            gl.deleteProgram(programRef.current);
            programRef.current = null;
          }
        } catch (e) {}
      }

      particleGridRef.current = [];
      posArrayRef.current = null;
      colorArrayRef.current = null;
      mouseRef.current = { x: -9999, y: -9999 };
      execCountRef.current = 0;
    };
  }, [logoPath]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        backgroundColor: "transparent",
      }}
    />
  );
};

export default HeroParticles;
