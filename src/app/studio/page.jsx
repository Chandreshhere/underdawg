"use client";
import "./studio.css";
import TeamCards from "@/components/TeamCards/TeamCards";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTACard from "@/components/CTACard/CTACard";
import Footer from "@/components/Footer/Footer";
import FallingText from "@/components/FallingText/FallingText";
import Copy from "@/components/Copy/Copy";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { value: "4", label: "Core Layers" },
  { value: "15+", label: "Platform Modules" },
  { value: "10+", label: "Creator Types" },
  { value: "1", label: "Operating System" },
];

const Page = () => {
  const fallingRef = useRef(null);
  const [fallingStarted, setFallingStarted] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  // GSAP ScrollTrigger drives the falling start — reliable with Lenis
  useGSAP(() => {
    if (!fallingRef.current) return;

    const st = ScrollTrigger.create({
      trigger: fallingRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => setFallingStarted(true),
    });

    return () => st.kill();
  }, { dependencies: [] });

  return (
    <div className="studio-page">

      {/* ── Hero ── */}
      <section className="studio-header">
        <div className="container">
          <div className="studio-header-row">
            <Copy delay={0.8}>
              <h1>We discover.</h1>
            </Copy>
          </div>
          <div className="studio-header-row">
            <Copy delay={0.95}>
              <h1>We amplify.</h1>
            </Copy>
          </div>
          <div className="studio-header-row studio-header-row--center">
            <Copy delay={1.1}>
              <h1>We monetize.</h1>
            </Copy>
          </div>
          <div className="studio-header-tag">
            <Copy delay={1.3}>
              <p className="sm">© Underdawg — Creator OS</p>
            </Copy>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="studio-stats">
        <div className="container">
          <div className="studio-stats-inner">
            {stats.map((s, i) => (
              <div className="studio-stat" key={i}>
                <Copy animateOnScroll={true} delay={i * 0.1}>
                  <p className="studio-stat-value">{s.value}</p>
                </Copy>
                <Copy animateOnScroll={true} delay={i * 0.1 + 0.1}>
                  <p className="sm">{s.label}</p>
                </Copy>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Copy ── */}
      <section className="studio-copy">
        <div className="container">
          <div className="studio-copy-img">
            <img src="/studio/studio-header.jpg" alt="" />
          </div>

          <Copy animateOnScroll={true}>
            <p className="lg">
              Underdawg is the operating system for the creator economy. We build
              pipelines that turn unknown talent into monetizable assets —
              discovering emerging creators before the market does, and giving them
              the tools to own their career from day one.
            </p>

            <p className="lg">
              We sit at the intersection of community, technology, and commerce.
              Every module — from portfolio to brand deals, merchandise to music —
              is built for creators who refuse to wait to be recognized. Growth over
              popularity. Potential over clout.
            </p>
          </Copy>
        </div>
      </section>

      {/* ── FallingText ── */}
      <section className="studio-falling" ref={fallingRef}>
        <div className="studio-falling-label-wrap">
          <Copy animateOnScroll={true}>
            <p className="sm">Drag the words</p>
          </Copy>
        </div>
        <FallingText
          text="Get Discovered. Get Connected. Get Paid. Before you become mainstream."
          highlightWords={["Discovered.", "Connected.", "Paid."]}
          highlightClass="highlighted"
          trigger="manual"
          started={fallingStarted}
          gravity={0.55}
          fontSize="7vw"
          mouseConstraintStiffness={0.3}
        />
      </section>

      {/* ── Team ── */}
      <TeamCards />

      <Spotlight />

      <CTACard />

      <Footer />
    </div>
  );
};

export default Page;
