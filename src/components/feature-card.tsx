"use client";
import { cn } from "@/lib/util";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

interface FeatureCardProps {
  title: string;
  description: string;
  className: string;
  src: string;
}
export default function FeatureCard({
  title,
  description,
  className,
  src,
}: FeatureCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Handle mouse Movement
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const element = containerRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.out",
    });
  };

  // Reset tilt on Mouse leave
  const handleMouseLeave = () => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.out",
    });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "p-6 border border-white/10 transition-all duration-500 ease-in-out bg-neutral-500/20 backdrop-blur-lg shadow-xl rounded-md space-y-5",
        className,
      )}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="font text-lg text-justify">{description}</p>
      <div className="w-full h-full">
        <img src={src} alt={title} />
      </div>
    </div>
  );
}
