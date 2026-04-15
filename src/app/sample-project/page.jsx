"use client";
import "./sample-project.css";
import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const bannerRef = useRef(null);
  const projectImgsRef = useRef(null);

  useGSAP(() => {
    // Banner parallax — inner image moves slower than the container
    const bannerWrapper = bannerRef.current?.querySelector(".project-banner-img-wrapper");
    if (bannerWrapper) {
      gsap.fromTo(
        bannerWrapper,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    // Project images — staggered reveal with clipPath drop
    const projectImgs = gsap.utils.toArray(".project-img");
    projectImgs.forEach((img) => {
      gsap.fromTo(
        img,
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            once: true,
          },
        }
      );

      const inner = img.querySelector(".project-img-wrapper");
      if (inner) {
        gsap.fromTo(
          inner,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    });
  });

  return (
    <div className="sample-project-page">
      <section className="project-header">
        <Copy delay={0.75}>
          <p className="lg">Creator Economy</p>
          <h1>Discovery Engine</h1>
        </Copy>
      </section>

      <section className="project-banner-img" ref={bannerRef}>
        <div className="project-banner-img-wrapper">
          <img src="/project/sample-project-1.jpg" alt="" />
        </div>
      </section>

      <section className="project-details">
        <Copy animateOnScroll={true}>
          <div className="details">
            <p>Concept</p>
            <h3>
              A platform built for the moment before fame — Underdawg's Discovery Engine surfaces emerging talent through signal, not noise. Potential is detected early. Careers are built before the market catches on.
            </h3>
          </div>

          <div className="details">
            <p>Cycle</p>
            <h3>2025</h3>
          </div>

          <div className="details">
            <p>Form</p>
            <h3>Creator Platform</h3>
          </div>

          <div className="details">
            <p>Medium</p>
            <h3>Web & Mobile App</h3>
          </div>

          <div className="details">
            <p>Studio</p>
            <h3>Underdawg</h3>
          </div>
        </Copy>
      </section>

      <section className="project-images">
        <div className="project-images-container">
          <div className="project-img">
            <div className="project-img-wrapper">
              <img src="/project/sample-project-2.jpg" alt="" />
            </div>
          </div>

          <div className="project-img">
            <div className="project-img-wrapper">
              <img src="/project/sample-project-3.jpg" alt="" />
            </div>
          </div>

          <div className="project-img">
            <div className="project-img-wrapper">
              <img src="/project/sample-project-4.jpg" alt="" />
            </div>
          </div>

          <div className="project-img">
            <div className="project-img-wrapper">
              <img src="/project/sample-project-5.jpg" alt="" />
            </div>
          </div>

          <div className="project-img">
            <div className="project-img-wrapper">
              <img src="/project/sample-project-6.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="project-details">
        <Copy animateOnScroll={true}>
          <div className="details">
            <p>Assembly</p>
            <h3>Ria Kapoor</h3>
          </div>

          <div className="details">
            <p>Sound</p>
            <h3>Aryan Shetty</h3>
          </div>

          <div className="details">
            <p>Direction of Form</p>
            <h3>Maya Iyer</h3>
          </div>

          <div className="details">
            <p>Production</p>
            <h3>Rohan Das</h3>
          </div>

          <div className="details">
            <p>Vision Lead</p>
            <h3>Neha Sood</h3>
          </div>
        </Copy>
      </section>

      <section className="next-project">
        <Copy animateOnScroll={true}>
          <p style={{ marginBottom: "1rem" }}>02 - 05</p>
          <h2>Next</h2>
        </Copy>

        <div className="next-project-img">
          <div className="next-project-img-wrapper">
            <img src="/project/next-project.jpg" alt="" />
          </div>
        </div>

        <Copy animateOnScroll={true}>
          <h3>Creator Portfolio</h3>
        </Copy>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
