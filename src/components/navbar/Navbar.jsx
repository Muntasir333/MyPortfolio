"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 font-bold text-white shadow-[0_0_25px_rgba(34,211,238,0.08)]">
              <span className="text-cyan-400">F</span>
              <span>M</span>
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">
                Md. Fahim Muntasir
              </p>
              <p className="text-[11px] text-slate-500">
                Biotechnologist × Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block rounded-full px-4 py-2 text-sm text-slate-400 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Link
              href="/cv.pdf"
              className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 sm:flex"
            >
              Resume
              <ArrowUpRight size={15} />
            </Link>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}