"use client";
import "./Menu.css";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { useViewTransition } from "@/hooks/useViewTransition";

gsap.registerPlugin(useGSAP, SplitText);

const Menu = ({ pageRef }) => {
  const navToggleRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuImageRef = useRef(null);
  const menuLinksWrapperRef = useRef(null);
  const linkHighlighterRef = useRef(null);
  const menuLinksRef = useRef([]);
  const menuLinkContainersRef = useRef([]);
  const openLabelRef = useRef(null);
  const closeLabelRef = useRef(null);
  const menuColsRef = useRef([]);

  const splitTextInstances = useRef([]);
  const menuColSplitTextInstances = useRef([]);

  const navRef = useRef(null);
  const isNavHidden = useRef(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);

  const lenis = useLenis();

  const { navigateWithTransition } = useViewTransition();

  const menuItems = [
    { label: "Home", route: "/" },
    { label: "Work", route: "/work" },
    { label: "Studio", route: "/studio" },
    { label: "Stories", route: "/stories" },
    { label: "Contact", route: "/contact" },
  ];

  const lerpFactor = 0.05;

  const currentHighlighterY = useRef(0);
  const targetHighlighterY = useRef(0);
  const currentHighlighterHeight = useRef(0);
  const targetHighlighterHeight = useRef(0);

  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) return;

    const menuCols = menuColsRef.current;
    if (!menuCols || menuCols.length === 0) return;

    menuColSplitTextInstances.current.forEach((split) => split.revert());
    menuColSplitTextInstances.current = [];

    menuCols.forEach((col) => {
      if (!col) return;

      const elements = col.querySelectorAll("p, a");

      elements.forEach((el) => {
        const split = SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
        });

        menuColSplitTextInstances.current.push(split);

        gsap.set(split.lines, { y: "100%" });
      });
    });
  }, [isMenuOpen]);

  useGSAP(
    () => {
      const menuLinks = menuLinksRef.current;
      const menuOverlay = menuOverlayRef.current;
      const menuLinksWrapper = menuLinksWrapperRef.current;
      const linkHighlighter = linkHighlighterRef.current;
      const menuImage = menuImageRef.current;
      const container = pageRef.current;
      const menuLinkContainers = menuLinkContainersRef.current;

      splitTextInstances.current.forEach((split) => split.revert());
      splitTextInstances.current = [];

      menuLinks.forEach((link) => {
        if (!link) return;

        const chars = link.querySelectorAll("span");
        chars.forEach((char, charIndex) => {
          const split = new SplitText(char, { type: "chars" });
          splitTextInstances.current.push(split);
          split.chars.forEach((char) => {
            char.classList.add("char");
          });
          if (charIndex === 1) {
            gsap.set(split.chars, { y: "110%" });
          }
        });
      });

      gsap.set(menuImage, { y: 0, scale: 0.5, opacity: 0.25 });
      gsap.set(menuLinks, { y: "150%" });
      gsap.set(linkHighlighter, { x: "-150%" });

      const defaultLinkElement = menuLinksWrapper.querySelector(".menu-link:first-child");
      if (defaultLinkElement) {
        const linkHeight = defaultLinkElement.offsetHeight;
        linkHighlighter.style.height = linkHeight + "px";
        currentHighlighterHeight.current = linkHeight;
        targetHighlighterHeight.current = linkHeight;

        const linkRect = defaultLinkElement.getBoundingClientRect();
        const menuWrapperRect = menuLinksWrapper.getBoundingClientRect();
        const initialY = linkRect.top - menuWrapperRect.top;
        currentHighlighterY.current = initialY;
        targetHighlighterY.current = initialY;
        gsap.set(linkHighlighter, { y: initialY });
      }

      menuLinkContainers.forEach((link) => {
        if (!link) return;

        const handleMouseEnter = () => {
          if (window.innerWidth < 1000) return;

          const linkCopy = link.querySelectorAll("a span");
          if (!linkCopy || linkCopy.length < 2) return;

          const visibleCopy = linkCopy[0];
          const animatedCopy = linkCopy[1];

          const visibleChars = visibleCopy.querySelectorAll(".char");
          gsap.to(visibleChars, {
            y: "-110%",
            stagger: 0.05,
            duration: 0.5,
            ease: "expo.inOut",
          });

          const animatedChars = animatedCopy.querySelectorAll(".char");
          gsap.to(animatedChars, {
            y: "0%",
            stagger: 0.05,
            duration: 0.5,
            ease: "expo.inOut",
          });

          const linkRect = link.getBoundingClientRect();
          const menuWrapperRect = menuLinksWrapper.getBoundingClientRect();

          targetHighlighterY.current = linkRect.top - menuWrapperRect.top;
          targetHighlighterHeight.current = link.offsetHeight;
        };

        const handleMouseLeave = () => {
          if (window.innerWidth < 1000) return;

          const linkCopy = link.querySelectorAll("a span");
          if (!linkCopy || linkCopy.length < 2) return;

          const visibleCopy = linkCopy[0];
          const animatedCopy = linkCopy[1];

          const animatedChars = animatedCopy.querySelectorAll(".char");
          gsap.to(animatedChars, {
            y: "110%",
            stagger: 0.05,
            duration: 0.5,
            ease: "expo.inOut",
          });

          const visibleChars = visibleCopy.querySelectorAll(".char");
          gsap.to(visibleChars, {
            y: "0%",
            stagger: 0.05,
            duration: 0.5,
            ease: "expo.inOut",
          });
        };

        link.addEventListener("mouseenter", handleMouseEnter);
        link.addEventListener("mouseleave", handleMouseLeave);

        link._mouseEnterHandler = handleMouseEnter;
        link._mouseLeaveHandler = handleMouseLeave;
      });

      const handleMenuLinksWrapperMouseLeave = () => {
        const defaultLinkEl = menuLinksWrapper.querySelector(".menu-link:first-child");
        if (!defaultLinkEl) return;

        const linkRect = defaultLinkEl.getBoundingClientRect();
        const menuWrapperRect = menuLinksWrapper.getBoundingClientRect();

        targetHighlighterY.current = linkRect.top - menuWrapperRect.top;
        targetHighlighterHeight.current = defaultLinkEl.offsetHeight;
      };

      menuLinksWrapper.addEventListener(
        "mouseleave",
        handleMenuLinksWrapperMouseLeave
      );

      const animate = () => {
        currentHighlighterY.current +=
          (targetHighlighterY.current - currentHighlighterY.current) *
          lerpFactor;
        currentHighlighterHeight.current +=
          (targetHighlighterHeight.current - currentHighlighterHeight.current) *
          lerpFactor;

        gsap.to(linkHighlighter, {
          y: currentHighlighterY.current,
          height: currentHighlighterHeight.current,
          duration: 0.3,
          ease: "power4.out",
        });

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        menuLinksWrapper.removeEventListener(
          "mouseleave",
          handleMenuLinksWrapperMouseLeave
        );

        menuLinkContainers.forEach((link) => {
          if (!link) return;
          const mouseEnterHandler = link._mouseEnterHandler;
          const mouseLeaveHandler = link._mouseLeaveHandler;
          if (mouseEnterHandler)
            link.removeEventListener("mouseenter", mouseEnterHandler);
          if (mouseLeaveHandler)
            link.removeEventListener("mouseleave", mouseLeaveHandler);
        });

        splitTextInstances.current.forEach((split) => {
          if (split && split.revert) split.revert();
        });
        splitTextInstances.current = [];
      };
    },
    { scope: menuOverlayRef }
  );

  useEffect(() => {
    if (!lenis) return;
    if (isMenuOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [lenis, isMenuOpen]);

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = ({ scroll, direction }) => {
      if (isMenuOpen) return;

      if (direction === 1 && scroll > 80 && !isNavHidden.current) {
        gsap.to(navRef.current, { y: "-100%", duration: 0.4, ease: "power2.inOut" });
        isNavHidden.current = true;
      } else if (direction === -1 && isNavHidden.current) {
        gsap.to(navRef.current, { y: "0%", duration: 0.4, ease: "power2.inOut" });
        isNavHidden.current = false;
      }
    };

    lenis.on("scroll", handleScroll);
    return () => lenis.off("scroll", handleScroll);
  }, [lenis, isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuAnimating) return;
    setIsMenuAnimating(true);

    const container = pageRef.current;
    const menuOverlay = menuOverlayRef.current;
    const menuImage = menuImageRef.current;
    const menuLinks = menuLinksRef.current;
    const linkHighlighter = linkHighlighterRef.current;
    const menuLinksWrapper = menuLinksWrapperRef.current;
    const openLabel = openLabelRef.current;
    const closeLabel = closeLabelRef.current;
    const menuCols = menuColsRef.current;

    if (!isMenuOpen) {
      if (isNavHidden.current) {
        gsap.to(navRef.current, { y: "0%", duration: 0.4, ease: "power2.inOut" });
        isNavHidden.current = false;
      }

      gsap.to(openLabel, {
        y: "-100%",
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(closeLabel, {
        y: "-100%",
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(menuOverlay, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1.25,
        ease: "expo.out",
        onComplete: () => {
          gsap.set(".menu-link", { overflow: "visible" });

          setIsMenuOpen(true);
          setIsMenuAnimating(false);
        },
      });

      gsap.to(menuImage, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "expo.out",
      });

      gsap.to(menuLinks, {
        y: "0%",
        duration: 1.25,
        stagger: 0.1,
        delay: 0.25,
        ease: "expo.out",
      });

      gsap.to(linkHighlighter, {
        x: "0%",
        duration: 1,
        delay: 1,
        ease: "expo.out",
      });

      menuCols.forEach((col) => {
        if (!col) return;

        const splitLines = col.querySelectorAll(".split-line");

        gsap.to(splitLines, {
          y: "0%",
          duration: 1,
          stagger: 0.05,
          delay: 0.5,
          ease: "expo.out",
        });
      });
    } else {
      gsap.to(openLabel, {
        y: "0%",
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(closeLabel, {
        y: "0%",
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(menuImage, {
        y: "-25svh",
        opacity: 0.5,
        duration: 1.25,
        ease: "expo.out",
      });

      menuCols.forEach((col) => {
        if (!col) return;

        const splitLines = col.querySelectorAll(".split-line");

        gsap.to(splitLines, {
          y: "-100%",
          duration: 1,
          stagger: 0,
          ease: "expo.out",
        });
      });

      gsap.to(menuOverlay, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.25,
        ease: "expo.out",
        onComplete: () => {
          gsap.set(menuOverlay, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          });
          gsap.set(menuLinks, { y: "150%" });
          gsap.set(linkHighlighter, { x: "-150%" });
          gsap.set(menuImage, { y: "0", scale: 0.5, opacity: 0.25 });
          gsap.set(".menu-link", { overflow: "hidden" });

          menuCols.forEach((col) => {
            if (!col) return;
            const splitLines = col.querySelectorAll(".split-line");
            gsap.set(splitLines, { y: "100%" });
          });

          setIsMenuOpen(false);
          setIsMenuAnimating(false);
        },
      });
    }
  };

  return (
    <>
      <nav ref={navRef}>
        <div className="nav-logo">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              const currentPath = window.location.pathname;
              if (currentPath === "/") {
                return;
              }
              navigateWithTransition("/", isMenuOpen ? toggleMenu : null);
            }}
          >
            <svg viewBox="0 0 172 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-logo-svg">
              {/* Spark mark */}
              <polygon points="14,2 16.5,11.5 26,14 16.5,16.5 14,26 11.5,16.5 2,14 11.5,11.5" fill="currentColor"/>
              {/* Wordmark */}
              <text x="34" y="22" fontFamily="'Big Shoulders Display', sans-serif" fontSize="20" fontWeight="900" letterSpacing="1.5" fill="currentColor" textAnchor="start">UNDERDAWG</text>
            </svg>
          </a>
        </div>

        <div className="nav-toggle" ref={navToggleRef} onClick={toggleMenu}>
          <div className="nav-toggle-wrapper">
            <p ref={openLabelRef} className="open-label">
              Menu
            </p>

            <p ref={closeLabelRef} className="close-label">
              Close
            </p>
          </div>
        </div>
      </nav>

      <div className="menu-overlay" ref={menuOverlayRef}>
        <div className="menu-content">
          <div
            className="menu-col"
            ref={(el) => {
              menuColsRef.current[0] = el;
            }}
          >
            <div className="menu-content-group">
              <p>&copy; Underdawg</p>
              <p>underdawg.com</p>
              <p>Everywhere</p>
            </div>

            <div className="menu-content-group">
              <p>Edition</p>
              <p>Beta Vol. 01</p>
            </div>

            <div className="menu-content-group">
              <p>Say Hello</p>
              <p>hello@underdawg.in</p>
            </div>

            <div className="menu-content-group">
              <p>Hotline</p>
              <p>+91 98245 54321</p>
            </div>
          </div>
          <div
            className="menu-col"
            ref={(el) => {
              menuColsRef.current[1] = el;
            }}
          >
            <div className="menu-content-group">
              <p>Field Log</p>

              <a href="https://www.instagram.com/codegridweb/" target="_blank">
                Instagram
              </a>

              <a href="https://www.youtube.com/@codegrid" target="_blank">
                YouTube
              </a>
            </div>

            <div className="menu-content-group">
              <p>Language</p>
              <p>Human</p>
            </div>

            <div className="menu-content-group">
              <p>Credits</p>
              <p>Made by Underdawg</p>
              <p>MWT. OCT2025</p>
            </div>
          </div>
        </div>

        <div className="menu-img">
          <img ref={menuImageRef} src="/menu/menu_img.jpg" alt="" />
        </div>

        <div className="menu-links-wrapper" ref={menuLinksWrapperRef}>
          {menuItems.map((item, index) => (
            <div
              key={item.label}
              className="menu-link"
              ref={(el) => {
                menuLinkContainersRef.current[index] = el;
              }}
              onClick={(e) => {
                e.preventDefault();
                const currentPath = window.location.pathname;
                if (currentPath === item.route) {
                  if (isMenuOpen) {
                    toggleMenu();
                  }
                  return;
                }
                navigateWithTransition(
                  item.route,
                  isMenuOpen ? toggleMenu : null
                );
              }}
            >
              <a
                href={item.route}
                ref={(el) => {
                  menuLinksRef.current[index] = el;
                }}
              >
                <span>{item.label}</span>
                <span>{item.label}</span>
              </a>
            </div>
          ))}

          <div className="link-highlighter" ref={linkHighlighterRef}></div>
        </div>
      </div>
    </>
  );
};

export default Menu;
