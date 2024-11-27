"use client";
import ButtonLink from "./button-link";
import StarGrid from "./star-grid";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        ".hero__heading",
        {
          scale: 0.5,
          opacity: 0,
        },
        {
          scale: 1,
          duration: 1.4,
          opacity: 1,
        },
      );
      tl.fromTo(
        ".hero__content",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          duration: 1.2,
          opacity: 1,
        },
        "-=0.6",
      );
      tl.fromTo(
        ".hero__button",
        {
          scale: 1.5,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.3,
        },
        "-=0.8",
      );
      tl.fromTo(
        ".hero__image",
        {
          y: 100,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
        },
        "-=0.8",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="scroll-wrapper"
      ref={containerRef}
      className="px-4 md:px-8 py-10 relative"
    >
      <div id="scroll-content" className="container  max-w-6xl mx-auto ">
        <div className="relative space-y-5">
          <h1 className="hero__heading  opacity-0 text-center text-4xl text-balance  md:text-6xl lg:text-7xl font-bold">
            Designs that shine with dynamic intelligence
          </h1>
          <p className="hero__content opacity-0 text-center text-base lg:text-lg font-semibold text-slate-400">
            AI Features You need{" "}
          </p>
          <div className="flex justify-center items-center">
            <ButtonLink
              className=" opacity-0 hero__button"
              label="Download Now"
            />
          </div>
          <div className="glass-container  mt-16 hero__image  w-fit opacity-0">
            <div className="bg-slate-500/30    overflow-hidden">
              <img
                src="/images/heroImage.png"
                alt="hero"
                className="hero__image rounded-lg overflow-hidden opacity-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
