"use client";
import "./TheProblem.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Copy from "../Copy/Copy";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    num: "01",
    label: "Fragmentation",
    text: "Content scattered across Instagram, YouTube, TikTok, Spotify — none talk to each other. Analytics spread across 6 dashboards. Brand deals negotiated via DMs and WhatsApp with zero system behind them.",
  },
  {
    num: "02",
    label: "Invisibility",
    text: "New creators can't break through. Talent doesn't equal visibility. The algorithm rewards popularity, not potential. Brands can't find the right creators and managers can't discover emerging talent.",
  },
  {
    num: "03",
    label: "Exploitation",
    text: "No pricing transparency for brand deals. Smaller creators systematically underpaid. Platforms take 30–50% of earnings. No financial products built for irregular income. Tax filing is a nightmare.",
  },
  {
    num: "04",
    label: "Authenticity",
    text: "AI content flooding the internet. Fake followers and fake engagement everywhere. Brands can't verify real influence. Human creators need proof of authenticity to stand apart.",
  },
];

const TheProblem = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".problem-item");

      items.forEach((item) => {
        const blurText = item.querySelector(".problem-blur-text");
        const line = item.querySelector(".problem-line");

        gsap.fromTo(
          blurText,
          { filter: "blur(14px)", opacity: 0.15 },
          {
            filter: "blur(0px)",
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 25%",
              scrub: 1.2,
            },
          }
        );

        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="the-problem" ref={sectionRef}>
      <div className="container">
        <div className="problem-header">
          <Copy animateOnScroll={true}>
            <p className="sm">Why creators struggle today</p>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <h1>The Problem</h1>
          </Copy>
        </div>

        <div className="problem-list">
          {problems.map((p) => (
            <div className="problem-item" key={p.num}>
              <div className="problem-line"></div>
              <div className="problem-item-inner">
                <div className="problem-item-left">
                  <Copy animateOnScroll={true}>
                    <p className="sm">{p.num}</p>
                  </Copy>
                  <Copy animateOnScroll={true} delay={0.1}>
                    <h2>{p.label}</h2>
                  </Copy>
                </div>
                <div className="problem-item-right">
                  <p className="lg problem-blur-text">{p.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
