"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

const navItems = [
   { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },

];

export default function MobileMenu({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25 }}
            className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm border-l border-white/10 bg-[#080d20] p-6 shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-lg font-bold"
              >
                <span className="text-cyan-400">F</span>M
              </Link>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-12">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-4 text-lg text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 border-t border-white/10 pt-8">
              <Link
             href="/Md_Fahim_Muntasir_Resume.pdf"
               download="Md_Fahim_Muntasir_Resume.pdf"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#050816] transition hover:bg-cyan-300"
              >
                Download CV
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}