"use client";

import { motion } from "framer-motion";
import {
  FaDna,
  FaCode,
  FaMicroscope,
  FaGraduationCap,
  FaFlask,
  FaArrowRight,
} from "react-icons/fa";

const stats = [
  {
    value: "3.45",
    label: "Current CGPA",
    icon: FaGraduationCap,
  },
  {
    value: "3+",
    label: "Major Projects",
    icon: FaCode,
  },
  {
    value: "2",
    label: "Core Domains",
    icon: FaDna,
  },
];

const interests = [
  {
    icon: FaDna,
    title: "Biotechnology",
    description:
      "Exploring biotechnology, genetic engineering, molecular biology and their applications in modern science.",
  },
  {
    icon: FaMicroscope,
    title: "Microbiology",
    description:
      "Interested in microbial diversity, environmental microbiology, bacterial characterization and applied microbiology.",
  },
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Building modern full-stack web applications using React, Next.js, Node.js, Express and MongoDB.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#060b16] px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-150px] top-[20%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Where{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Science
            </span>{" "}
            Meets Technology
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            I am building my journey at the intersection of biotechnology,
            scientific research and modern web development.
          </p>
        </motion.div>

        {/* Main About Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                <FaDna className="text-xl text-blue-400" />
              </div>

              <div>
                <p className="text-sm text-slate-500">A little about</p>
                <h3 className="text-xl font-semibold text-white">
                  My Journey
                </h3>
              </div>
            </div>

            <div className="space-y-5 text-sm leading-7 text-slate-400 sm:text-base">
              <p>
                I am a{" "}
                <span className="font-medium text-white">
                  Biotechnology & Genetic Engineering
                </span>{" "}
                student with a strong interest in microbiology, genomics,
                bioinformatics and modern biological research.
              </p>

              <p>
                My academic journey has introduced me to molecular biology,
                microbiology, genetic engineering and biotechnology. Currently,
                one of my major research interests is the characterization of{" "}
                <span className="font-medium text-cyan-400">
                  salt-tolerant bacteria
                </span>{" "}
                and their potential applications in environmental and
                agricultural biotechnology.
              </p>

              <p>
                Alongside biotechnology, I have developed a strong passion for{" "}
                <span className="font-medium text-violet-400">
                  full-stack web development
                </span>
                . I enjoy transforming ideas into functional digital products
                using React, Next.js, Node.js, Express and MongoDB.
              </p>

              <p>
                This combination of science and technology allows me to
                approach problems from both a research perspective and a
                software engineering perspective.
              </p>
            </div>

            {/* Bottom link */}
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-blue-400">
              <span>Research-driven. Technology-focused.</span>
              <FaArrowRight className="text-xs" />
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center gap-5 lg:h-full">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 transition duration-300 group-hover:bg-blue-500/20">
                      <Icon className="text-lg text-blue-400" />
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        {stat.value}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Interests */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid gap-5 md:grid-cols-3"
        >
          {interests.map((interest) => {
            const Icon = interest.icon;

            return (
              <motion.div
                key={interest.title}
                variants={itemVariants}
                whileHover={{ y: -7 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.05]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-violet-500/10">
                  <Icon className="text-lg text-blue-400" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-white">
                  {interest.title}
                </h3>

                <p className="text-sm leading-6 text-slate-500">
                  {interest.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}