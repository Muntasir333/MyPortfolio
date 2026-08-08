"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiDaisyui,
} from "react-icons/si";

const projects = [
  {
    title: "Sportnest",
    subtitle: "Sports Facility Reservation Platform",
    description:
      "A full-stack sports facility reservation platform where users can explore sports facilities, check availability and make bookings. Facility owners can manage their facilities and booking information through dedicated functionality.",
    image: "/projects/sportnest.png",
    featured: true,

    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
      },
    ],

    features: [
      "Sports facility discovery",
      "Facility management",
      "Booking system",
      "Search and sorting",
      "Authentication",
    ],

    liveUrl: "https://sportnest-eosin.vercel.app/",
    githubUrl: "https://github.com/Muntasir333/Assignment-9-frontend",
  },

  {
    title: "Bloody",
    subtitle: "Blood Donation Management System",
    description:
      "A full-stack platform designed to connect blood donors with people who need blood. The system includes role-based functionality for donors, volunteers and administrators.",
    image: "/projects/bloody.png",
    featured: true,

    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
      },
      {
        name: "DaisyUI",
        icon: SiDaisyui,
      },
    ],

    features: [
      "Blood donation requests",
      "Role-based dashboards",
      "Donor management",
      "Request management",
      "Admin functionality",
    ],

    liveUrl: "https://bloody-rho.vercel.app/",
    githubUrl: "https://github.com/Muntasir333/Assignment-10-Frontend",
  },

//   {
//     title: "iDonate",
//     subtitle: "Digital Crowdfunding Platform",
//     description:
//       "A modern crowdfunding platform concept focused on connecting campaigns with supporters through a clean digital donation experience.",
//     image: "/projects/idonate.png",
//     featured: false,

//     technologies: [
//       {
//         name: "Next.js",
//         icon: SiNextdotjs,
//       },
//       {
//         name: "React",
//         icon: SiReact,
//       },
//       {
//         name: "Node.js",
//         icon: SiNodedotjs,
//       },
//       {
//         name: "MongoDB",
//         icon: SiMongodb,
//       },
//       {
//         name: "JavaScript",
//         icon: SiJavascript,
//       },
//       {
//         name: "Tailwind",
//         icon: SiTailwindcss,
//       },
//     ],

//     features: [
//       "Campaign management",
//       "Donation workflow",
//       "User authentication",
//       "Funding management",
//     ],

//     liveUrl: "#",
//     githubUrl: "#",
//   },
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
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

function TechnologyBadge({ technology }) {
  const Icon = technology.icon;

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">
      <Icon className="text-sm text-blue-400" />
      {technology.name}
    </span>
  );
}

function ProjectButtons({ liveUrl, githubUrl }) {
  return (
    <div className="flex flex-wrap gap-3">
      {liveUrl !== "#" && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
        >
          Live Demo
          <FaExternalLinkAlt className="text-xs" />
        </a>
      )}

      {githubUrl !== "#" && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
        >
          <FaGithub />
          GitHub
        </a>
      )}
    </div>
  );
}

function ProjectImage({ project }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
      <Image
        src={project.image}
        alt={`${project.title} project screenshot`}
        fill
        className="object-cover object-top transition duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060b16]/80 via-transparent to-transparent opacity-70" />

      {/* Project label */}
      <div className="absolute left-4 top-4">
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          Featured Project
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#060b16] px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-150px] top-[20%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-150px] bottom-[10%] h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Projects
              </p>

              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Things I&apos;ve{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Built
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              A selection of full-stack applications I have designed and
              developed using modern web technologies.
            </p>
          </div>
        </motion.div>

        {/* Featured projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:border-blue-400/20 ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div
                    className={`p-4 sm:p-6 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <ProjectImage project={project} />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                        0{index + 1}
                      </span>

                      <span className="h-px w-8 bg-blue-400/30" />

                      <span className="text-xs uppercase tracking-widest text-slate-600">
                        Full Stack
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-cyan-400">
                      {project.subtitle}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <TechnologyBadge
                          key={technology.name}
                          technology={technology}
                        />
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-xs text-slate-500"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-8">
                      <ProjectButtons
                        liveUrl={project.liveUrl}
                        githubUrl={project.githubUrl}
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
        </motion.div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <div className="mb-7 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                More Work
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Other Projects
              </h3>
            </div>

            <FaArrowRight className="text-slate-600" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <motion.article
                  key={project.title}
                  whileHover={{ y: -7 }}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-300 hover:border-violet-400/20"
                >
                  <div className="p-4">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                      <Image
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                        fill
                        className="object-cover object-top transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#060b16]/70 to-transparent" />
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                      Project
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-cyan-400">
                      {project.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((technology) => (
                        <TechnologyBadge
                          key={technology.name}
                          technology={technology}
                        />
                      ))}
                    </div>

                    <div className="mt-6">
                      <ProjectButtons
                        liveUrl={project.liveUrl}
                        githubUrl={project.githubUrl}
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center sm:p-10"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
            <FaRocket className="text-lg text-blue-400" />
          </div>

          <h3 className="text-xl font-bold text-white sm:text-2xl">
            More projects are on the way.
          </h3>

          <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
            I am continuously building, experimenting and learning through
            new projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

