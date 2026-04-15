"use client";
import "./home.css";
import Button from "@/components/Button/Button";
import TheProblem from "@/components/TheProblem/TheProblem";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import CreatorJourney from "@/components/CreatorJourney/CreatorJourney";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTACard from "@/components/CTACard/CTACard";
import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";
import Preloader, { isInitialLoad } from "@/components/Preloader/Preloader";
import HeroParticles from "@/components/HeroParticles/HeroParticles";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
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

  return (
    <>
      <Preloader />
      <section className="hero">
        <HeroParticles />
        <div className="container">
          <div className="hero-content-main">
            <div className="hero-header">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 5.75 : 0.75}>
                <h1>The Operating System for the<br />Creator Economy</h1>
              </Copy>
            </div>

            <div className="hero-footer-outer">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 6.35 : 1.65}>
                <p className="sm">&copy; Underdawg</p>
                <p className="sm">( Creator OS )</p>
              </Copy>
            </div>

            <div className="hero-footer">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 6.05 : 1.15}>
                <p className="lg">
                  We discover, amplify, monetize, and manage the next generation of creators — before they become mainstream.
                </p>
              </Copy>

              <Button delay={isInitialLoad ? 6.35 : 1.55} href="/studio">
                Explore the Platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TheProblem />

      <HowItWorks />

      <CreatorJourney />

      <Spotlight />

      <CTACard />

      <Footer />
    </>
  );
};

export default Page;
