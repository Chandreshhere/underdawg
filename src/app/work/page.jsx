"use client";
import "./work.css";
import { useRef, useMemo, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Copy from "@/components/Copy/Copy";
import CTACard from "@/components/CTACard/CTACard";
import Footer from "@/components/Footer/Footer";

gsap.registerPlugin(useGSAP);

const moduleHighlights = [
  {
    index: "A",
    title: "Built for the undiscovered",
    body: "Every module assumes you haven't made it yet. No gatekeepers, no waitlists — just tools that turn raw talent into a repeatable career.",
  },
  {
    index: "B",
    title: "One login, every surface",
    body: "Portfolio, deals, merch, distribution — they all speak to each other. Update once and your entire footprint moves with you.",
  },
  {
    index: "C",
    title: "Owned, not rented",
    body: "Your audience, your payouts, your rights. The platform exists to route opportunity toward you, not lock it behind another algorithm.",
  },
];

const platformStats = [
  { value: "06", label: "Core Modules" },
  { value: "24/7", label: "Creator Support" },
  { value: "100%", label: "Creator Revenue" },
  { value: "00", label: "Middlemen" },
];

const Page = () => {
  const workPageContainer = useRef(null);
  const [activeFolder, setActiveFolder] = useState(null);

  const handleFolderClick = (e, item) => {
    e.preventDefault();
    if (window.innerWidth < 1000) {
      setActiveFolder((prev) => (prev === item.index ? null : item.index));
    }
  };

  const workItems = useMemo(
    () => [
      {
        index: "01",
        name: "Discovery Engine",
        href: "/sample-project",
        variant: "variant-1",
        images: [
          "/work/work_1_1.jpg",
          "/work/work_1_2.jpg",
          "/work/work_1_3.jpg",
        ],
      },
      {
        index: "02",
        name: "Creator Portfolio",
        href: "/sample-project",
        variant: "variant-2",
        images: [
          "/work/work_2_1.jpg",
          "/work/work_2_2.jpg",
          "/work/work_2_3.jpg",
        ],
      },
      {
        index: "03",
        name: "Brand Deals",
        href: "/sample-project",
        variant: "variant-2",
        images: [
          "/work/work_3_1.jpg",
          "/work/work_3_2.jpg",
          "/work/work_3_3.jpg",
        ],
      },
      {
        index: "04",
        name: "Merch Studio",
        href: "/sample-project",
        variant: "variant-3",
        images: [
          "/work/work_4_1.jpg",
          "/work/work_4_2.jpg",
          "/work/work_4_3.jpg",
        ],
      },
      {
        index: "05",
        name: "Get Viral",
        href: "/sample-project",
        variant: "variant-1",
        images: [
          "/work/work_5_1.jpg",
          "/work/work_5_2.jpg",
          "/work/work_5_3.jpg",
        ],
      },
      {
        index: "06",
        name: "Art Marketplace",
        href: "/sample-project",
        variant: "variant-2",
        images: [
          "/work/work_6_1.jpg",
          "/work/work_6_2.jpg",
          "/work/work_6_3.jpg",
        ],
      },
    ],
    []
  );

  useGSAP(
    () => {
      const q = gsap.utils.selector(workPageContainer);
      const folders = q(".folder");
      const folderWrappers = q(".folder-wrapper");

      let isMobile = window.innerWidth < 1000;

      const setInitialPositions = () => {
        gsap.set(folderWrappers, { y: isMobile ? 0 : 25 });
      };

      const mouseEnterHandlers = new Map();
      const mouseLeaveHandlers = new Map();

      folders.forEach((folder, index) => {
        const previewImages = folder.querySelectorAll(".folder-preview-img");

        const onEnter = () => {
          if (isMobile) return;

          folders.forEach((siblingFolder) => {
            if (siblingFolder !== folder) {
              siblingFolder.classList.add("disabled");
            }
          });

          gsap.to(folderWrappers[index], {
            y: 0,
            duration: 0.25,
            ease: "back.out(1.7)",
          });

          previewImages.forEach((img, imgIndex) => {
            let rotation;
            if (imgIndex === 0) {
              rotation = gsap.utils.random(-20, -10);
            } else if (imgIndex === 1) {
              rotation = gsap.utils.random(-10, 10);
            } else {
              rotation = gsap.utils.random(10, 20);
            }

            gsap.to(img, {
              y: "-100%",
              rotation,
              duration: 0.25,
              ease: "back.out(1.7)",
              delay: imgIndex * 0.025,
            });
          });
        };

        const onLeave = () => {
          if (isMobile) return;

          folders.forEach((siblingFolder) => {
            siblingFolder.classList.remove("disabled");
          });

          gsap.to(folderWrappers[index], {
            y: 25,
            duration: 0.25,
            ease: "back.out(1.7)",
          });

          previewImages.forEach((img, imgIndex) => {
            gsap.to(img, {
              y: "0%",
              rotation: 0,
              duration: 0.25,
              ease: "back.out(1.7)",
              delay: imgIndex * 0.05,
            });
          });
        };

        mouseEnterHandlers.set(folder, onEnter);
        mouseLeaveHandlers.set(folder, onLeave);
        folder.addEventListener("mouseenter", onEnter);
        folder.addEventListener("mouseleave", onLeave);
      });

      const handleResize = () => {
        const currentBreakpoint = window.innerWidth < 1000;
        if (currentBreakpoint !== isMobile) {
          isMobile = currentBreakpoint;
          setInitialPositions();

          folders.forEach((folder) => {
            folder.classList.remove("disabled");
          });
          const allPreviewImages = q(".folder-preview-img");
          gsap.set(allPreviewImages, { y: "0%", rotation: 0 });
        }
      };

      window.addEventListener("resize", handleResize);
      setInitialPositions();

      return () => {
        window.removeEventListener("resize", handleResize);
        folders.forEach((folder) => {
          const onEnter = mouseEnterHandlers.get(folder);
          const onLeave = mouseLeaveHandlers.get(folder);
          if (onEnter) folder.removeEventListener("mouseenter", onEnter);
          if (onLeave) folder.removeEventListener("mouseleave", onLeave);
        });
      };
    },
    { scope: workPageContainer }
  );

  return (
    <>
      {/* ── Hero ── */}
      <section className="work-header">
        <div className="work-header-grid">
          <div className="work-header-meta">
            <Copy delay={0.5}>
              <p className="sm">( 01 — Platform Stack )</p>
            </Copy>
            <Copy delay={0.55}>
              <p className="sm">06 Modules · Live</p>
            </Copy>
          </div>

          <div className="work-header-title-group">
            <Copy delay={0.7}>
              <h1 className="work-header-title">
                <span className="work-header-title-line">The Creator</span>
                <span className="work-header-title-line work-header-title-accent">
                  Operating
                </span>
                <span className="work-header-title-line">System</span>
              </h1>
            </Copy>
          </div>

          <div className="work-header-footer">
            <div className="work-header-lead">
              <Copy delay={0.9}>
                <p className="lg">
                  Six core modules. Each one a weapon for the emerging creator.
                  <span className="work-header-lead-dim">
                    {" "}
                    Hover to preview on desktop. Tap to open on mobile.
                  </span>
                </p>
              </Copy>
            </div>
            <div className="work-header-scroll">
              <Copy delay={1.0}>
                <p className="sm">Scroll ↓</p>
              </Copy>
            </div>
          </div>
        </div>
      </section>

      <section className="folders" ref={workPageContainer}>
        {[0, 1, 2].map((rowIndex) => (
          <div className="row" key={`row-${rowIndex}`}>
            {workItems.slice(rowIndex * 2, rowIndex * 2 + 2).map((item) => (
              <div
                key={item.index}
                className={`folder-link ${item.variant} ${
                  activeFolder === item.index ? "active" : ""
                }`}
                onClick={(e) => handleFolderClick(e, item)}
              >
                <div className={`folder ${item.variant}`}>
                  <div className="folder-preview">
                    {item.images.map((src, i) => (
                      <div
                        className="folder-preview-img"
                        key={`${item.index}-img-${i}`}
                      >
                        <img src={src} alt={`Preview ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                  <div className="folder-wrapper">
                    <div className="folder-index">
                      <p>{item.index}</p>
                    </div>
                    <div className="folder-name">
                      <h1>{item.name}</h1>
                      <span className="folder-toggle" aria-hidden="true">
                        +
                      </span>
                    </div>
                  </div>
                </div>
                <div className="folder-expand">
                  <div className="folder-expand-images">
                    {item.images.map((src, i) => (
                      <img
                        key={`expand-${item.index}-img-${i}`}
                        src={src}
                        alt={`${item.name} ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* ── Intro: what the platform is ── */}
      <section className="work-intro">
        <div className="work-intro-inner">
          <div className="work-intro-left">
            <Copy animateOnScroll={true}>
              <p className="sm">( What we build )</p>
            </Copy>
          </div>
          <div className="work-intro-right">
            <Copy animateOnScroll={true}>
              <h2>
                A stack that takes a creator from bedroom studio to booked out —
                without ever handing the keys to a platform that won't give them back.
              </h2>
            </Copy>
            <Copy animateOnScroll={true} delay={0.2}>
              <p className="lg">
                Underdawg is a modular operating system. Pick a module, plug it in,
                keep your audience. Every tool is built to compound — your portfolio
                feeds your deals, your deals feed your merch, your merch feeds the next
                drop. No silos, no exports, no losing your work when a platform pivots.
              </p>
            </Copy>
          </div>
        </div>
      </section>

      {/* ── Module highlights ── */}
      <section className="work-highlights">
        <div className="work-highlights-head">
          <Copy animateOnScroll={true}>
            <p className="sm">Principles behind the platform</p>
          </Copy>
        </div>
        <div className="work-highlights-grid">
          {moduleHighlights.map((h) => (
            <div className="work-highlight" key={h.index}>
              <div className="work-highlight-index">
                <Copy animateOnScroll={true}>
                  <p className="sm">{h.index}</p>
                </Copy>
              </div>
              <Copy animateOnScroll={true}>
                <h3>{h.title}</h3>
              </Copy>
              <Copy animateOnScroll={true} delay={0.15}>
                <p>{h.body}</p>
              </Copy>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="work-stats">
        <div className="work-stats-inner">
          {platformStats.map((s, i) => (
            <div className="work-stat" key={i}>
              <Copy animateOnScroll={true} delay={i * 0.1}>
                <p className="work-stat-value">{s.value}</p>
              </Copy>
              <Copy animateOnScroll={true} delay={i * 0.1 + 0.1}>
                <p className="sm">{s.label}</p>
              </Copy>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process note ── */}
      <section className="work-process">
        <div className="work-process-inner">
          <div className="work-process-col">
            <Copy animateOnScroll={true}>
              <p className="sm">( How a module ships )</p>
            </Copy>
            <Copy animateOnScroll={true} delay={0.1}>
              <h3>Shipped in public, sharpened by creators</h3>
            </Copy>
          </div>
          <div className="work-process-col">
            <div className="work-process-step">
              <Copy animateOnScroll={true}>
                <p className="sm">01 — Signal</p>
              </Copy>
              <Copy animateOnScroll={true} delay={0.1}>
                <p>
                  We listen to the field log — DMs, reviews, creator calls — until a
                  pattern starts repeating itself. That pattern becomes a brief.
                </p>
              </Copy>
            </div>
            <div className="work-process-step">
              <Copy animateOnScroll={true}>
                <p className="sm">02 — Build</p>
              </Copy>
              <Copy animateOnScroll={true} delay={0.1}>
                <p>
                  We prototype fast with a closed cohort of creators. If it doesn't
                  earn its keep in the first week, it doesn't ship.
                </p>
              </Copy>
            </div>
            <div className="work-process-step">
              <Copy animateOnScroll={true}>
                <p className="sm">03 — Open</p>
              </Copy>
              <Copy animateOnScroll={true} delay={0.1}>
                <p>
                  Once the module holds up, it joins the platform — wired into every
                  other module so the compounding begins on day one.
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </section>

      <CTACard />

      <Footer />
    </>
  );
};

export default Page;
