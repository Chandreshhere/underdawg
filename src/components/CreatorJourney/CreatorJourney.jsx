"use client";
import "./CreatorJourney.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Copy from "../Copy/Copy";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    num: "01",
    tag: "Phase One",
    phase: "Establish Identity",
    desc: "Create your account, select your creator type, build your portfolio with your best work, connect external platforms, and get your initial reputation score.",
  },
  {
    num: "02",
    tag: "Phase Two",
    phase: "Create & Share",
    desc: "Upload content across formats — images, videos, audio, text. Cross-post to connected platforms. Engage with community. Participate in challenges. Build your follower base.",
  },
  {
    num: "03",
    tag: "Phase Three",
    phase: "Grow Audience",
    desc: "Track analytics across all platforms from one dashboard. Get AI-powered content insights. Identify your top fans. Build your owned email and SMS list. Increase your reputation score.",
  },
  {
    num: "04",
    tag: "Phase Four",
    phase: "Monetize",
    desc: "Apply to brand deals from the job board. Create and sell merchandise. List art in the marketplace. Accept tips and subscriptions. Access financial products. Track all earnings in one place.",
  },
  {
    num: "05",
    tag: "Phase Five",
    phase: "Scale Career",
    desc: "Get verified. Participate in Get Viral campaigns. Attract manager representation. Access premium opportunities. Build a lasting creator business. Own your entire career.",
  },
];

const CreatorJourney = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".journey-card");

      cards.forEach((card, i) => {
        const isEven = i % 2 === 0;

        gsap.set(card, {
          y: 140,
          rotation: isEven ? -9 : 9,
          opacity: 0,
          transformOrigin: "center bottom",
        });

        ScrollTrigger.create({
          trigger: card,
          start: "top 82%",
          onEnter: () => {
            gsap.to(card, {
              y: 0,
              rotation: 0,
              opacity: 1,
              duration: 1.25,
              ease: "power4.out",
            });
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="creator-journey" ref={sectionRef}>
      <div className="container">
        <div className="journey-header">
          <Copy animateOnScroll={true}>
            <p className="sm">Your path on Underdawg</p>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <h1>The Journey</h1>
          </Copy>
        </div>

        <div className="journey-cards">
          {phases.map((p) => (
            <div className="journey-card" key={p.num}>
              <div className="journey-card-top">
                <p className="sm">{p.tag}</p>
                <p className="sm">{p.num}</p>
              </div>
              <h3>{p.phase}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorJourney;
