"use client";

import { motion } from "framer-motion";
import {
  FaFlask,
  FaDna,
  FaMicroscope,
  FaDatabase,
  FaLeaf,
  FaBacteria,
  FaArrowUp,
  FaCheckCircle,
} from "react-icons/fa";

const researchAreas = [
  {
    icon: FaBacteria,
    title: "Salt-Tolerant Bacteria",
    description:
      "Isolation and characterization of salt-tolerant bacteria from agricultural environments and saline-affected regions.",
    tags: ["Microbiology", "Bacterial Isolation", "Salinity"],
  },
  {
    icon: FaDna,
    title: "Genomics & Bioinformatics",
    description:
      "Exploring genetic characteristics of microorganisms through genomic analysis, sequence comparison and bioinformatics approaches.",
    tags: ["Genomics", "BLAST", "Phylogenetics"],
  },
  {
    icon: FaLeaf,
    title: "Environmental Biotechnology",
    description:
      "Interested in microbial solutions for environmental challenges, agriculture, soil health and sustainable biotechnology.",
    tags: ["Bioremediation", "Agriculture", "Sustainability"],
  },
];

const methods = [
  "Microbial isolation & cultivation",
  "Salt tolerance assessment",
  "PCR & molecular techniques",
  "DNA sequence analysis",
  "BLAST & database analysis",
  "Phylogenetic analysis",
];

const tools = [
  {
    name: "NCBI",
    icon: FaDatabase,
  },
  {
    name: "BLAST",
    icon: FaDna,
  },
  {
    name: "Clustal Omega",
    icon: FaFlask,
  },
  {
    name: "UniProt",
    icon: FaDatabase,
  },
  {
    name: "PDB",
    icon: FaMicroscope,
  },
  {
    name: "PyMOL",
    icon: FaDna,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Research() {
  return (
    <section
      id="research"
      className="relative overflow-hidden bg-[#060b16] px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute right-[-150px] top-[15%] h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-100px] left-[20%] h-[250px] w-[250px] rounded-full bg-cyan-500/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Research
              </p>

              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Exploring{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Biology
                </span>{" "}
                Through Data
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              My research interests focus on microorganisms, genetics,
              environmental biotechnology and computational approaches to
              understanding biological systems.
            </p>
          </div>
        </motion.div>

        {/* Research cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {researchAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]"
              >
                {/* Number */}
                <div className="absolute right-6 top-5 text-5xl font-black text-white/[0.025]">
                  0{index + 1}
                </div>

                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/10">
                    <Icon className="text-xl text-cyan-400" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {area.title}
                  </h3>

                  <p className="mb-6 text-sm leading-7 text-slate-500">
                    {area.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Current Research */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Research description */}
            <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10">
                  <FaFlask className="text-lg text-violet-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-violet-400">
                    Current Direction
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    Salt-Tolerant Bacteria
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-7 text-slate-400 sm:text-base">
                One of my major research interests is the isolation and
                characterization of salt-tolerant bacteria from agricultural
                land in Noakhali, Bangladesh. The broader goal is to understand
                their phenotypic characteristics and genetic potential and
                explore their possible applications in agriculture and
                environmental biotechnology.
              </p>

              <div className="mt-7 flex items-center gap-3 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] p-4">
                <FaArrowUp className="rotate-45 text-cyan-400" />

                <p className="text-sm text-slate-400">
                  Moving from{" "}
                  <span className="text-white">phenotypic analysis</span> toward{" "}
                  <span className="text-cyan-400">
                    genomic characterization
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Methods */}
            <div className="p-7 sm:p-9">
              <p className="mb-5 text-sm font-semibold text-white">
                Research Methods & Techniques
              </p>

              <div className="space-y-3">
                {methods.map((method) => (
                  <div
                    key={method}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >
                    <FaCheckCircle className="shrink-0 text-cyan-400" />
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bioinformatics tools */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-8"
        >
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Research Toolkit
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Tools I Work With
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <motion.div
                  key={tool.name}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.05]"
                >
                  <Icon className="mb-3 text-xl text-blue-400" />

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