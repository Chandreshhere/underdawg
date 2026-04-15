"use client";
import "./stories.css";
import StorySlides from "@/components/StorySlides/StorySlides";
import FallingText from "@/components/FallingText/FallingText";
import Copy from "@/components/Copy/Copy";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Page = () => {
  const fallingRef = useRef(null);
  const [fallingStarted, setFallingStarted] = useState(false);

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
    <>
      <StorySlides />

      <section className="stories-falling" ref={fallingRef}>
        <div className="stories-falling-label">
          <Copy animateOnScroll={true}>
            <p className="sm">Drag the words</p>
          </Copy>
        </div>
        <FallingText
          text="Create. Share. Discover. Grow. Monetize. Scale. Own Your Career."
          highlightWords={["Discover.", "Monetize.", "Own"]}
          highlightClass="highlighted"
          trigger="manual"
          started={fallingStarted}
          gravity={0.6}
          fontSize="6.5vw"
          mouseConstraintStiffness={0.25}
        />
      </section>
    </>
  );
};

export default Page;
