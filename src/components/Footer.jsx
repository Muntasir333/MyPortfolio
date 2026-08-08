"use client";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
  FaDna,
  FaCode,
} from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Muntasir333",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/md-fahim-muntasir",
    icon: FaLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61564099568466",
    icon: FaFacebook,
  },
];

const footerLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Research",
    href: "#research",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#040810] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20">
                <FaDna className="text-lg text-blue-400 transition-transform duration-300 group-hover:rotate-12" />
              </div>

              <div>
                <p className="text-lg font-bold text-white">
                  Md. Fahim Muntasir
                </p>

                <p className="text-xs text-slate-600">
                  Biotechnology × Technology
                </p>
              </div>
            </a>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Biotechnology student, researcher and full-stack web developer
              exploring the intersection of biological science and modern
              technology.
            </p>

            {/* Identity tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-500">
                <FaDna className="text-cyan-400" />
                Biotechnology
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-500">
                <FaCode className="text-blue-400" />
                Full-Stack Developer
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Navigation
            </p>

            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-500 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Connect
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-600">
            © {currentYear} Md. Fahim Muntasir. All rights reserved.
          </p>

          <p className="text-xs text-slate-700">
            Built with React & Next.js
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-slate-500 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-blue-400"
          >
            <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}

