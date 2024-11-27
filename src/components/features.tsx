"use client";
import FeatureCard from "./feature-card";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const featuresRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".features__heading",
        {
          scrollTrigger: ".features__heading",
          x: -100,
          opacity: 0,
          duration: 1.2,
        },
        {
          scrollTrigger: ".features__heading",
          opacity: 1,
          x: 0,
          duration: 3,
        },
      );
      gsap.fromTo(
        ".features__content",
        {
          scrollTrigger: ".features__content",
          y: 100,
        },
        {
          scrollTrigger: ".features__content",
          opacity: 1,
          y: 0,
          duration: 3,
        },
      );
      gsap.fromTo(
        ".features__left_card",
        {
          scrollTrigger: ".features__left_card",
          x: -100,
          opacity: 0,
          duration: 1.2,
        },
        {
          scrollTrigger: ".features__left_card",
          opacity: 1,
          x: 0,
          duration: 3,
        },
      );
      gsap.fromTo(
        ".features__right_card",
        {
          scrollTrigger: ".features__right_card",
          x: 100,
          opacity: 0,
          duration: 1.2,
        },
        {
          scrollTrigger: ".features__right_card",
          opacity: 1,
          x: 0,
          duration: 3,
        },
      );
    },
    { scope: featuresRef },
  );

  return (
    <section
      id="features-wrapper"
      ref={featuresRef}
      className="px-4 md:px-8 py-8"
    >
      <div className="lg:max-w-7xl max-w-5xl mx-auto" id="featuers-content">
        <h2 className="features__heading opacity-0 text-balance font-bold text-center text-5xl md:text-7xl ">
          The new
          <br />
          Gold Standard
        </h2>

        <p className="features__content opacity-0 text-center lg:text-lg font-medium mt-5">
          Introducing a New Way of Building Components
        </p>
        <div className="mt-16 grid max-w-6xl mx-auto  gap-8 md:grid-cols-3 grid-cols-1 md:gap-10 ">
          <FeatureCard
            className="md:col-span-1 col-span-full features__left_card"
            title="Endless Ideation"
            description=" When an unknown printer took a galley of type and scrambled it to make a type specimen book."
            src="/images/small-screenshot.png"
          />
          <FeatureCard
            className="md:col-span-2 col-span-full features__right_card"
            title="Benchmark with AI"
            description="When an unknown printer took a galley of type and scrambled it to make a type specimen book."
            src="/images/long-screenshot.png"
          />
          <FeatureCard
            className="md:col-span-2 col-span-full features__left_card"
            title="Endless Ideation"
            description="Come up with new ideasWhen an unknown printer took a galley of type and scrambled it to make a type specimen book."
            src="/images/long-screenshot.png"
          />
          <FeatureCard
            className="md:col-span-1 col-span-full features__right_card"
            title="Endless Ideation"
            description="Come up with new ideasWhen an unknown printer took a galley of type and scrambled it to make a type specimen book."
            src="/images/small-screenshot.png"
          />
          <FeatureCard
            className="md:col-span-1 col-span-full features__left_card"
            title="Endless Ideation"
            description="Come up with new ideasWhen an unknown printer took a galley of type and scrambled it to make a type specimen book."
            src="/images/small-screenshot.png"
          />
          <FeatureCard
            className="md:col-span-2 col-span-full features__right_card"
            title="Endless Ideation"
            description="Come up with new ideasWhen an unknown printer took a galley of type and scrambled it to make a type specimen book."
            src="/images/long-screenshot.png"
          />
        </div>
      </div>
    </section>
  );
}
