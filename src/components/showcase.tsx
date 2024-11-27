"use client";
import ButtonLink from "./button-link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
  const showcaseRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".showcaseheading",
        {
          scrollTrigger: ".showcaseheading",
          x: -100,
          opacity: 0,
          duration: 1.2,
        },
        {
          scrollTrigger: ".showcaseheading",
          opacity: 1,
          x: 0,
          duration: 10,
        },
      );
    },
    { scope: showcaseRef },
  );

  return (
    <section ref={showcaseRef} className="px-4 md:px-8 py-14  ">
      <div className="max-w-7xl mx-auto">
        <h1 className="showcaseheading opacity-0 font-bold text-6xl md:text-7xl text-center">
          Your Gliston <br /> Your workflow
        </h1>
        <div className="mt-16 border   shadow-xl border-white/10   flex flex-col md:flex-row bg-slate-300/5 backdrop-blur-xl rounded-lg  max-w-4xl mx-auto  ">
          <div className=" flex items-center justify-center">
            <img
              src="/images/showcase-image.png"
              alt="showcase"
              className=" md:-ml-20 ml-0 "
            />
          </div>
          <div className="  top-0 right-0   h-full ">
            <div className="p-10">
              <h3 className="text-4xl font-bold">Design that next big thing</h3>
              <p className="mt-5 font-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown
              </p>

              <div className="mt-16">
                <ButtonLink label="Get Started" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
