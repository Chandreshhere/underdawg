"use client";
import "./Showreel.css";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Showreel = () => {
  const showreelSecRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1000px)", () => {
        const scrollTriggerInstances = [];

        const scrollTrigger = ScrollTrigger.create({
          trigger: showreelSecRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * 2}px`,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const progress = self.progress;

            const scaleValue = gsap.utils.mapRange(0, 1, 0.75, 1, progress);
            const borderRadiusValue =
              progress <= 0.5 ? gsap.utils.mapRange(0, 0.5, 2, 0, progress) : 0;

            gsap.set(".showreel-container", {
              scale: scaleValue,
              borderRadius: `${borderRadiusValue}rem`,
            });
          },
        });

        if (scrollTrigger) {
          scrollTriggerInstances.push(scrollTrigger);
        }

        const refreshHandler = () => {
          ScrollTrigger.refresh();
        };

        window.addEventListener("orientationchange", refreshHandler);
        window.addEventListener("resize", refreshHandler);

        const onLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", onLoad, { passive: true });

        return () => {
          scrollTriggerInstances.forEach((trigger) => trigger.kill());

          window.removeEventListener("orientationchange", refreshHandler);
          window.removeEventListener("resize", refreshHandler);
          window.removeEventListener("load", onLoad);
        };
      });

      mm.add("(max-width: 999px)", () => {
        const showreelSection = showreelSecRef.current;
        if (showreelSection) {
          gsap.set(showreelSection, { clearProps: "all" });
        }
        gsap.set(".showreel-container", { clearProps: "all" });

        ScrollTrigger.refresh();

        const refreshHandler = () => {
          ScrollTrigger.refresh();
        };

        window.addEventListener("orientationchange", refreshHandler);
        const onLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", onLoad, { passive: true });

        return () => {
          window.removeEventListener("orientationchange", refreshHandler);
          window.removeEventListener("load", onLoad);
        };
      });

      return () => {
        mm.revert();
      };
    },
    { scope: showreelSecRef }
  );

  return (
    <section className="showreel" ref={showreelSecRef}>
      <div className="showreel-container">
        {/* Images will go here */}
      </div>
    </section>
  );
};

export default Showreel;
