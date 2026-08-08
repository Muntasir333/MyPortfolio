"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowRight,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaCode,
  FaDna,
} from "react-icons/fa";

const contactLinks = [
  {
    title: "Email",
    value: "mdfahimmuntasir333@gmail.com",
    href: "mailto:mdfahimmuntasir333@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "GitHub",
    value: "github.com/Muntasir333",
    href: "https://github.com/Muntasir333",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/md-fahim-muntasir",
    href: "https://linkedin.com/in/md-fahim-muntasir",
    icon: FaLinkedin,
  },
];

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

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#060b16] px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[20%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-150px] bottom-[-100px] h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Meaningful
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Whether it&apos;s a research collaboration, a software project, or
            simply an interesting conversation, feel free to reach out.
          </p>
        </motion.div>

        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left */}
            <div className="relative p-7 sm:p-10 lg:p-12">
              {/* Decorative icon */}
              <div className="absolute right-8 top-8 hidden h-20 w-20 items-center justify-center rounded-full border border-blue-400/10 bg-blue-400/[0.03] lg:flex">
                <FaPaperPlane className="text-2xl text-blue-400/50" />
              </div>

              <div className="mb-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <FaEnvelope className="text-xl text-blue-400" />
                </div>

                <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                  Start a conversation
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Have an idea?
                </h3>
              </div>

              <p className="max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                I&apos;m interested in opportunities where technology and
                science come together. If you have a project, research idea,
                collaboration opportunity or just want to connect, I&apos;d be
                happy to hear from you.
              </p>

              {/* Email CTA */}
              <a
                href="mailto:your-email@example.com"
                className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-blue-500 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <FaEnvelope />

                Send me an email

                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Identity */}
              <div className="mt-10 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-400">
                  <FaDna className="text-cyan-400" />
                  Biotechnology
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-400">
                  <FaCode className="text-blue-400" />
                  Full-Stack Development
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="border-t border-white/10 bg-black/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-slate-500">
                Contact Information
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.title}
                      variants={itemVariants}
                      href={item.href}
                      target={
                        item.title === "Email" ? undefined : "_blank"
                      }
                      rel={
                        item.title === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                        <Icon className="text-lg text-blue-400" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-slate-600">
                          {item.title}
                        </p>

                        <p className="mt-1 truncate text-sm text-slate-300">
                          {item.value}
                        </p>
                      </div>

                      <FaArrowRight className="shrink-0 text-xs text-slate-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-400" />
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Location */}
              <div className="mt-7 flex items-center gap-3 text-sm text-slate-500">
                <FaMapMarkerAlt className="text-cyan-400" />

                <span>Bangladesh</span>
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="mb-4 text-xs uppercase tracking-widest text-slate-600">
                  Find me online
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
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-blue-400"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.03] px-5 py-4 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
            </span>

            <span className="text-sm text-slate-400">
              Open to interesting opportunities and collaborations
            </span>
          </div>

          <span className="text-xs text-slate-600">
            Let&apos;s connect
          </span>
        </motion.div>
      </div>
    </section>
  );
}

