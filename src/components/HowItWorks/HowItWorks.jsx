"use client";
import "./HowItWorks.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Copy from "../Copy/Copy";

gsap.registerPlugin(ScrollTrigger);

const layers = [
  {
    num: "01",
    tag: "Discovery & Community",
    title: "Get Discovered",
    desc: "Build your public portfolio at underdawg.com/username. The algorithm rewards potential — not existing popularity. Your reputation score rises with consistency and quality, not clout.",
  },
  {
    num: "02",
    tag: "Monetization",
    title: "Get Paid Early",
    desc: "Merchandise, art marketplace, brand deals, subscriptions, and tips — all from day one. You don't wait years to earn. Monetization happens alongside growth, not after it.",
  },
  {
    num: "03",
    tag: "Amplification Engine",
    title: "Get Viral",
    desc: "Coordinated creator amplification — multiple creators promoting simultaneously. Engineered momentum, not isolated posts. Invite-only premium campaigns. Influencer marketing + PR + distribution, combined.",
  },
  {
    num: "04",
    tag: "Artist Management",
    title: "Get Managed",
    desc: "We selectively manage the top 1–5% of platform creators. Brand deal negotiation, career direction, merchandise strategy, and event opportunities. We discovered them. We know them best.",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1000px)", () => {
        const cards = gsap.utils.toArray(".hiw-card");

        gsap.set(cards, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          y: -60,
        });

        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * 3.5}`,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const p = self.progress;
            const segmentSize = 1 / cards.length;

            cards.forEach((card, i) => {
              const start = i * segmentSize;
              const end = start + segmentSize * 0.65;
              const cardProg = gsap.utils.clamp(
                0,
                1,
                gsap.utils.mapRange(start, end, 0, 1, p)
              );
              const eased = 1 - Math.pow(1 - cardProg, 3);

              gsap.set(card, {
                clipPath: `polygon(0% 0%, 100% 0%, 100% ${eased * 100}%, 0% ${eased * 100}%)`,
                y: (1 - eased) * -60,
              });
            });
          },
        });

        return () => st.kill();
      });

      mm.add("(max-width: 999px)", () => {
        const cards = gsap.utils.toArray(".hiw-card");

        gsap.set(cards, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          y: -30,
        });

        const triggers = [];
        cards.forEach((card) => {
          const t = ScrollTrigger.create({
            trigger: card,
            start: "top 88%",
            onEnter: () => {
              gsap.to(card, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                y: 0,
                duration: 1,
                ease: "power3.out",
              });
            },
          });
          triggers.push(t);
        });

        return () => triggers.forEach((t) => t.kill());
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section className="how-it-works" ref={sectionRef}>
      <div className="container">
        <div className="hiw-header">
          <div className="hiw-header-left">
            <Copy animateOnScroll={true}>
              <p className="sm">The 4-Layer System</p>
            </Copy>
          </div>
          <div className="hiw-header-right">
            <Copy animateOnScroll={true}>
              <h1>How It Works</h1>
            </Copy>
          </div>
        </div>

        <div className="hiw-cards">
          {layers.map((layer) => (
            <div className="hiw-card" key={layer.num}>
              <div className="hiw-card-inner">
                <span className="hiw-num">{layer.num}</span>
                <div className="hiw-card-body">
                  <h3>{layer.title}</h3>
                  <p className="lg">{layer.desc}</p>
                </div>
                <p className="sm hiw-tag">{layer.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
