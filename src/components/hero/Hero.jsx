"use client";

import { motion } from "framer-motion";
import {
  FaDna,
  FaFlask,
  FaMicroscope,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaArrowDown,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";

const floatingCards = [
  {
    icon: FaDna,
    title: "Genomics",
    subtitle: "WGS • Sequence Analysis",
    className: "left-0 top-20 lg:left-8 lg:top-28",
  },
  {
    icon: FaMicroscope,
    title: "Microbiology",
    subtitle: "Isolation • Characterization",
    className: "right-0 top-40 lg:right-8 lg:top-44",
  },
  {
    icon: FaCode,
    title: "Full-Stack",
    subtitle: "Next.js • Node.js • MongoDB",
    className: "bottom-8 left-8 lg:left-20 lg:bottom-16",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#060b16] text-white"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] sm:h-[500px] sm:w-[500px]" />

        <div className="absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[120px] sm:h-[400px] sm:w-[400px]" />

        <div className="absolute bottom-0 left-0 h-[250px] w-[250px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      {/* Background grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_90%)]" />

      <Container className="relative">
        <div className="flex min-h-[calc(100vh-80px)] flex-col justify-center py-12 sm:py-16 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:py-20">
          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-[10px] font-medium text-cyan-300 sm:px-4 sm:text-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              Biotechnology & Genetic Engineering
            </motion.div>
            <>   </>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-[10px] font-medium text-cyan-300 sm:px-4 sm:text-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              Full-Stack Web Developer
            </motion.div>

            {/* Heading */}

            <h1 className="max-w-4xl text-[42px] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[80px]">
              Biotechnologist.
              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Researcher.
              </span>

              <br />

              <span className="text-slate-200">Developer.</span>
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-400 sm:text-lg sm:leading-7">
              I explore biology through{" "}
              <span className="text-slate-200">
                microbiology, genomics and bioinformatics
              </span>{" "}
              while building modern full-stack applications with{" "}
              <span className="text-slate-200">
                React, Next.js, Node.js and MongoDB.
              </span>
            </p>

            {/* Buttons */}

            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
              <Button href="#projects">
                Explore My Work
                <FaArrowUpRightFromSquare className="ml-2 text-xs" />
              </Button>

              <Button href="#contact" variant="secondary">
                Let&apos;s Connect
              </Button>
            </div>

            {/* Social Links */}

            <div className="mt-7 flex items-center gap-5">
              <Link
                href="https://github.com/Muntasir333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-500 transition hover:text-white sm:text-sm"
              >
                <FaGithub size={15} />
                GitHub
              </Link>

              <Link
                href="https://linkedin.com/in/md-fahim-muntasir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-500 transition hover:text-white sm:text-sm"
              >
                <FaLinkedin size={15} />
                LinkedIn
              </Link>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* RIGHT VISUAL */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="relative mx-auto mt-14 h-[330px] w-full max-w-[330px] sm:h-[450px] sm:max-w-[450px] lg:mt-0 lg:h-[560px] lg:max-w-[560px]"
          >
            {/* Outer circle */}

            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.02] shadow-[0_0_80px_rgba(34,211,238,0.08)] sm:h-[340px] sm:w-[340px] lg:h-[360px] lg:w-[360px]" />

            {/* Inner circle */}

            <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10 sm:h-[270px] sm:w-[270px]" />

            {/* ================================================= */}
            {/* PROFILE IMAGE */}
            {/* ================================================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 z-10 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-cyan-300/20 bg-[#08101f] shadow-[0_0_50px_rgba(34,211,238,0.12)] sm:h-[190px] sm:w-[190px] lg:h-[220px] lg:w-[220px]"
            >
              <Image
                src="/images/profile.jpeg"
                alt="Md. Fahim Muntasir"
                fill
                priority
                sizes="220px"
                className="object-cover"
              />

              {/* subtle image overlay */}

              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-[#060b16]/20 via-transparent to-cyan-300/5" />
            </motion.div>

            {/* Profile ring */}

            <div className="absolute left-1/2 top-1/2 z-[5] h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10 sm:h-[215px] sm:w-[215px] lg:h-[245px] lg:w-[245px]" />

            {/* Orbit */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[45px] rounded-full border border-dashed border-cyan-400/10 sm:inset-[65px]"
            >
              {/* Flask */}

              <div className="absolute -left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg border border-cyan-400/20 bg-[#08101f] text-cyan-300 shadow-lg sm:-left-5 sm:h-10 sm:w-10 sm:rounded-xl">
                <FaFlask size={14} />
              </div>

              {/* Code */}

              <div className="absolute -right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg border border-blue-400/20 bg-[#08101f] text-blue-300 shadow-lg sm:-right-5 sm:h-10 sm:w-10 sm:rounded-xl">
                <FaCode size={14} />
              </div>

              {/* Microscope */}

              <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-lg border border-violet-400/20 bg-[#08101f] text-violet-300 shadow-lg sm:-top-5 sm:h-10 sm:w-10 sm:rounded-xl">
                <FaMicroscope size={14} />
              </div>
            </motion.div>

            {/* Floating cards */}

            {floatingCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: [0, -6, 0],
                  }}
                  transition={{
                    opacity: {
                      delay: 0.5 + index * 0.15,
                      duration: 0.5,
                    },
                    y: {
                      delay: 1 + index * 0.2,
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`absolute ${card.className} hidden rounded-2xl border border-white/10 bg-[#0a1022]/80 p-3 shadow-2xl backdrop-blur-xl sm:block`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        {card.title}
                      </p>

                      <p className="mt-0.5 text-[9px] text-slate-500">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Decorative dots */}

            <div className="absolute left-10 top-10 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)] sm:left-16 sm:top-16 sm:h-2 sm:w-2" />

            <div className="absolute bottom-10 right-10 h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.8)] sm:bottom-20 sm:right-20 sm:h-2 sm:w-2" />
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition hover:text-cyan-300 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>

        <FaArrowDown size={13} />
      </motion.a>
    </section>
  );
}

