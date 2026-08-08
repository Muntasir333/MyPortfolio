"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDna,
  FaMicroscope,
  FaFlask,
  FaBacteria,
  FaCode,
  FaDatabase,
  FaServer,
  FaLeaf,
  FaJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiDaisyui,
  SiTypescript,
  SiPostman,
  SiNpm,
  SiJsonwebtokens,
} from "react-icons/si";

const developmentSkills = [
  {
    name: "JavaScript",
    icon: FaJs,
    level: "Advanced",
  },
  {
    name: "React",
    icon: FaReact,
    level: "Advanced",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: "Advanced",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    level: "Intermediate",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "Advanced",
  },
  {
    name: "DaisyUI",
    icon: SiDaisyui,
    level: "Intermediate",
  },
];

const tools = [
  {
    name: "Git",
    icon: FaGitAlt,
  },
  {
    name: "GitHub",
    icon: FaGithub,
  },
  {
    name: "npm",
    icon: SiNpm,
  },
  {
    name: "REST API",
    icon: FaServer,
  },
  {
    name: "Database",
    icon: FaDatabase,
  },
  {
    name: "jwt",
    icon: SiJsonwebtokens ,
  },

];

const biotechnologySkills = [
  {
    title: "Microbial Isolation",
    description:
      "Isolation and cultivation of microorganisms from environmental samples using appropriate culture and enrichment techniques.",
    icon: FaBacteria,
  },
  {
    title: "Bacterial Characterization",
    description:
      "Phenotypic characterization of bacterial isolates through colony morphology, growth characteristics and biochemical approaches.",
    icon: FaMicroscope,
  },
  {
    title: "Salt Tolerance Testing",
    description:
      "Assessment of bacterial growth and tolerance under different salt concentrations to identify salt-tolerant isolates.",
    icon: FaFlask,
  },
  {
    title: "PCR",
    description:
      "Practical experience with polymerase chain reaction for amplification and analysis of specific DNA regions.",
    icon: FaDna,
  },
  {
    title: "DNA & Molecular Techniques",
    description:
      "Hands-on exposure to DNA extraction, molecular analysis and techniques used for microbial and genetic characterization.",
    icon: FaDna,
  },
  {
    title: "Gel Electrophoresis",
    description:
      "Practical experience with agarose gel electrophoresis for visualization and analysis of amplified DNA fragments.",
    icon: FaFlask,
  },
];


const bioinformaticsSkills = [
    "Whole genome analysis",
  "Gene annotation",
  "Protein structure prediction",
  "Sequence analysis",
  "BLAST",
  "NCBI databases",
  "UniProt",
  "PDB",
  "Clustal Omega",
  "Phylogenetic analysis",
  "Basic bioinformatics",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#060b16] px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-150px] bottom-[10%] h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Skills & Expertise
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Science Meets{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Software
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A combination of biological sciences, computational thinking and
            modern full-stack development.
          </p>
        </motion.div>

        {/* ================= DEVELOPMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10">
              <FaCode className="text-lg text-blue-400" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-blue-400">
                Full-Stack Development
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                MERN & Modern Web
              </h3>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
          >
            {developmentSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                      <Icon className="text-xl text-blue-400" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="truncate text-sm font-semibold text-white">
                        {skill.name}
                      </h4>

                      <p className="mt-1 text-xs text-slate-500">
                        {skill.level}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* ================= BIO + BIOINFORMATICS ================= */}

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Biotechnology */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10">
                <FaDna className="text-xl text-emerald-400" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-emerald-400">
                  Life Sciences
                </p>

                <h3 className="mt-1 text-2xl font-bold text-white">
                  Biotechnology
                </h3>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {biotechnologySkills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.title}
                    whileHover={{ y: -4 }}
                    className="group rounded-2xl border border-white/10 bg-black/10 p-4 transition-all duration-300 hover:border-emerald-400/20 hover:bg-white/[0.03]"
                  >
                    <Icon className="mb-4 text-lg text-emerald-400" />

                    <h4 className="mb-2 text-sm font-semibold text-white">
                      {skill.title}
                    </h4>

                    <p className="text-xs leading-5 text-slate-500">
                      {skill.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Bioinformatics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10">
                <FaMicroscope className="text-xl text-violet-400" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-violet-400">
                  Computational Biology
                </p>

                <h3 className="mt-1 text-2xl font-bold text-white">
                  Bioinformatics
                </h3>
              </div>
            </div>

            <p className="mb-7 text-sm leading-7 text-slate-500">
              I use computational and database-driven approaches to explore
              biological sequences, proteins and microbial data.
            </p>

            <div className="flex flex-wrap gap-3">
              {bioinformaticsSkills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -3 }}
                  className="rounded-xl border border-violet-400/10 bg-violet-400/[0.05] px-4 py-2.5 text-xs font-medium text-slate-300 transition hover:border-violet-400/25 hover:text-violet-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-violet-400/10 bg-violet-500/[0.04] p-5">
              <div className="flex gap-4">
                <FaDatabase className="mt-1 shrink-0 text-violet-400" />

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Data-driven biology
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    Combining biological knowledge with sequence databases and
                    computational tools to investigate biological questions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= TOOLS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Development Toolkit
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Tools & Technologies
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <motion.div
                  key={tool.name}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]"
                >
                  <Icon className="mb-3 text-xl text-cyan-400 transition-transform duration-300 group-hover:scale-110" />

                  <span className="text-xs font-medium text-slate-400">
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

