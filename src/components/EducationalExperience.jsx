"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaFlask,
  FaCode,
  FaUniversity,
  FaDna,
  FaLaptopCode,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const education = [
  {
    period: "2026 - Present",
    type: "Master's",
    title: "Master's in Biotechnology & Genetic Engineering",
    institution: "Noakhali Science and Technology University",
    location: "Noakhali, Bangladesh",
    description:
      "Continuing advanced study in biotechnology and genetic engineering with an interest in microbiology, molecular biology, genomics and applied biological research.",
    icon: FaGraduationCap,
    current: true,
  },
  {
    period: "2020 - 2025",
    type: "Bachelor's",
    title: "BSc in Biotechnology & Genetic Engineering",
    institution: "Noakhali Science and Technology University",
    location: "Noakhali, Bangladesh",
    description:
      "Built a foundation in biotechnology, genetic engineering, microbiology, molecular biology, biochemistry, cell biology and related biological sciences.",
    icon: FaDna,
    current: false,
  },
];

const experience = [
  {
    period: "2024 - Present",
    type: "Research",
    title: "Biotechnology & Microbiology Research",
    organization: "Independent / Academic Research",
    location: "Bangladesh",
    description:
      "Exploring salt-tolerant bacteria, microbial characterization, environmental biotechnology and computational approaches to biological research.",
    highlights: [
      "Salt-tolerant bacteria research",
      "Microbial isolation and characterization",
      "Molecular biology concepts",
      "Bioinformatics and sequence analysis",
    ],
    icon: FaFlask,
  },
  {
    period: "2026 - Present",
    type: "Development",
    title: "Full-Stack Web Development",
    organization: "Independent Projects",
    location: "Remote",
    description:
      "Developing modern full-stack web applications and continuously improving skills in frontend, backend, databases, authentication and deployment.",
    highlights: [
      "React & Next.js",
      "Node.js & Express",
      "MongoDB",
      "REST APIs",
      "Authentication & deployment",
    ],
    icon: FaLaptopCode,
  },
];

const journey = [
  {
    number: "01",
    title: "Biological Sciences",
    description:
      "Built a strong academic foundation in biotechnology, microbiology, molecular biology and genetic engineering.",
    icon: FaDna,
  },
  {
    number: "02",
    title: "Scientific Research",
    description:
      "Moved toward research involving microorganisms, environmental biotechnology and computational biology.",
    icon: FaFlask,
  },
  {
    number: "03",
    title: "Software Development",
    description:
      "Started building practical web applications and developed a full-stack development skill set.",
    icon: FaCode,
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

function TimelineCard({ item, educationCard = false }) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.04] sm:p-7"
    >
      {/* Top row */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10">
            <Icon className="text-lg text-blue-400" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              {item.type}
            </p>

            <div className="mt-1 flex items-center gap-2 text-xs text-slate-600">
              <FaCalendarAlt />
              <span>{item.period}</span>
            </div>
          </div>
        </div>

        {item.current && (
          <span className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
            Current
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white sm:text-2xl">
        {item.title}
      </h3>

      {/* Institution / organization */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <span className="flex items-center gap-2 text-slate-400">
          {educationCard ? (
            <FaUniversity className="text-blue-400" />
          ) : (
            <FaCode className="text-blue-400" />
          )}

          {educationCard ? item.institution : item.organization}
        </span>

        <span className="flex items-center gap-2 text-slate-600">
          <FaMapMarkerAlt />
          {item.location}
        </span>
      </div>

      {/* Description */}
      <p className="mt-5 text-sm leading-7 text-slate-500">
        {item.description}
      </p>

      {/* Highlights */}
      {item.highlights && (
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {item.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 text-xs text-slate-500"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              {highlight}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function EducationExperience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#060b16] px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-150px] top-[15%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-150px] bottom-[15%] h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            My Journey
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Education &{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A journey that connects academic science, research and software
            development.
          </p>
        </motion.div>

        {/* ================= JOURNEY ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-20 grid gap-5 md:grid-cols-3"
        >
          {journey.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/20"
              >
                {/* Number */}
                <span className="absolute right-5 top-3 text-6xl font-black text-white/[0.025]">
                  {item.number}
                </span>

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
                    <Icon className="text-lg text-blue-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================= EDUCATION ================= */}

        <div className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10">
              <FaGraduationCap className="text-xl text-violet-400" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                Academic Background
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                Education
              </h3>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[23px] top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-violet-400/40 via-blue-400/20 to-transparent md:block" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-6"
            >
              {education.map((item) => (
                <div
                  key={item.title}
                  className="relative md:pl-[72px]"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[15px] top-7 hidden h-4 w-4 rounded-full border-4 border-[#060b16] bg-violet-400 shadow-lg shadow-violet-400/20 md:block" />

                  <TimelineCard
                    item={item}
                    educationCard={true}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ================= EXPERIENCE ================= */}

        <div>
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
              <FaLaptopCode className="text-xl text-blue-400" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                What I Do
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                Experience
              </h3>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[23px] top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-blue-400/40 via-cyan-400/20 to-transparent md:block" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-6"
            >
              {experience.map((item) => (
                <div
                  key={item.title}
                  className="relative md:pl-[72px]"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[15px] top-7 hidden h-4 w-4 rounded-full border-4 border-[#060b16] bg-blue-400 shadow-lg shadow-blue-400/20 md:block" />

                  <TimelineCard item={item} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-xl sm:p-10"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
            <FaArrowRight className="text-lg text-cyan-400" />
          </div>

          <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">
            Always learning, always building.
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
            My goal is to continue growing at the intersection of biological
            research, computational biology and modern software development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

