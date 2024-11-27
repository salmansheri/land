import React from "react";
import WordMark from "./word-mark";
import Link from "next/link";
import { navLinks, type NavLinksType } from "@/lib/contants";
import ButtonLink from "./button-link";

export default function Navbar() {
  return (
    <nav
      aria-label="Main"
      className=" z-10 px-4 py-4 md:px-6 md:py-6 fixed top-0 w-full "
    >
      <div className=" glow-effect  backdrop-blur-xl border border-white/20 px-5 rounded-full flex bg-slate-500/10  mx-auto max-w-6xl justify-between flex-col py-2 font-medium text-white md:flex-row md:items-center shadow-xl">
        <Link href="/">
          <WordMark />
          <span className="sr-only">Glisten.ai</span>
        </Link>
        <ul className="flex gap-6">
          {navLinks.map((link: NavLinksType) => {
            if (link.label.toLowerCase() === "get started") {
              return <ButtonLink key={link.id} label={link.label} />;
            }
            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={"inline-flex min-h-11 items-center"}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
