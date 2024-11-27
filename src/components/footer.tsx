import React from "react";
import WordMark from "./word-mark";
import Link from "next/link";
import { navLinks, type NavLinksType } from "@/lib/contants";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
      <Link href="/">
        <WordMark />
        <span className="sr-only">Glisten.ai</span>
      </Link>
      <nav aria-label="Footer">
        <ul className="flex gap-6">
          {navLinks.map((link: NavLinksType) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="inline-flex min-h-11 items-center"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
