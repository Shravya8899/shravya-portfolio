"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
FaGithub,
FaLinkedin,
FaDocker,
FaAws,
} from "react-icons/fa";
import {
SiKubernetes,
SiJenkins,
SiTerraform,
SiAnsible,
SiPython,
SiGit,
SiLinux,
} from "react-icons/si";

const skills = [
{ name: "AWS", icon: <FaAws className="text-orange-400 text-3xl" /> },
{ name: "Docker", icon: <FaDocker className="text-cyan-400 text-3xl" /> },
{
name: "Kubernetes",
icon: <SiKubernetes className="text-blue-400 text-3xl" />,
},
{ name: "Jenkins", icon: <SiJenkins className="text-red-400 text-3xl" /> },
{
name: "Terraform",
icon: <SiTerraform className="text-purple-400 text-3xl" />,
},
{
name: "Ansible",
icon: <SiAnsible className="text-gray-300 text-3xl" />,
},
{ name: "Python", icon: <SiPython className="text-yellow-400 text-3xl" /> },
{ name: "Git", icon: <SiGit className="text-orange-500 text-3xl" /> },
{ name: "Linux", icon: <SiLinux className="text-white text-3xl" /> },
{ name: "CI/CD", icon: "⚙️" },
];

const projects = [
{
title: "Hello Docker App",
description: "Containerized Flask application using Docker.",
tech: "Python • Flask • Docker",
link: "https://github.com/Shravya8899/hello-docker-app",
},
{
title: "Tiny-Link",
description: "Lightweight URL shortening application.",
tech: "HTML • CSS • JavaScript",
link: "https://github.com/Shravya8899/Tiny-Link",
},
{
title: "Forage MIDAS",
description: "JPMorgan Chase virtual software engineering project.",
tech: "Java • Git",
link: "https://github.com/Shravya8899/forage-midas",
},
];

export default function HomePage() {
return ( <main className="relative min-h-screen overflow-hidden bg-transparent text-white">

  <nav className="fixed left-1/2 top-4 z-50 w-[95%] max-w-5xl -translate-x-1/2 rounded-2xl border border-cyan-400/20 bg-slate-900/70 px-6 py-4 backdrop-blur-xl">
    <div className="flex items-center justify-between">
      <span className="text-lg font-bold text-cyan-400">
        SpiderOps
      </span>

      <div className="hidden gap-6 md:flex text-slate-300">
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#skills" className="hover:text-cyan-400">Skills</a>
        <a href="#experience" className="hover:text-cyan-400">Experience</a>
        <a href="#projects" className="hover:text-cyan-400">Projects</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </div>
    </div>
  </nav>

  <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 pt-28 md:flex-row">

    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.4em] text-red-400">
        Welcome to SpiderOps
      </p>

      <h1 className="mt-6 text-5xl font-black md:text-7xl">
        Yennepally{" "}
        <span className="bg-gradient-to-r from-red-500 via-cyan-400 to-red-500 bg-clip-text text-transparent">
          Shravya
        </span>{" "}
        Reddy
      </h1>

      <div className="mt-6 text-xl text-slate-300 md:text-3xl">
        <TypeAnimation
          sequence={[
            "DevOps Engineer",
            2000,
            "Cloud Enthusiast",
            2000,
            "AWS Learner",
            2000,
            "CI/CD Automation Enthusiast",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>

      <p className="mt-6 text-lg text-slate-300">
        MCA graduate (2025) passionate about cloud technologies,
        infrastructure automation, CI/CD pipelines, and scalable systems.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="https://github.com/Shravya8899"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:scale-105"
        >
          <FaGithub className="mr-2 inline" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shravya-reddy-b00038269"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-cyan-400 bg-slate-900/50 px-5 py-3 transition hover:scale-105"
        >
          <FaLinkedin className="mr-2 inline" />
          LinkedIn
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-red-400 bg-slate-900/50 px-5 py-3 transition hover:scale-105"
        >
          Resume
        </a>
      </div>
    </div>

    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="relative"
    >
      <div className="absolute inset-0 animate-spin [animation-duration:20s]">
        <FaAws className="absolute left-1/2 -top-10 text-4xl text-orange-400" />
        <FaDocker className="absolute -left-10 top-1/2 text-4xl text-cyan-400" />
        <SiKubernetes className="absolute -right-10 top-1/2 text-4xl text-blue-400" />
        <SiJenkins className="absolute bottom-0 left-1/2 text-4xl text-red-400" />
      </div>

      <div className="rounded-full border-4 border-cyan-400 p-2 shadow-[0_0_100px_rgba(34,211,238,0.5)]">
        <Image
          src="/profile.jpg"
          alt="Shravya"
          width={320}
          height={320}
          className="rounded-full object-cover"
        />
      </div>
    </motion.div>
  </section>

  <section id="about" className="mx-auto max-w-6xl px-6 py-20">
    <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-8 backdrop-blur-xl">
      <h2 className="mb-6 text-center text-4xl font-bold">
        Origin Story
      </h2>

      <p className="text-lg leading-8 text-slate-300">
        I am an MCA graduate from Hyderabad passionate about cloud
        technologies, automation, and DevOps practices.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        My goal is to build reliable and scalable infrastructure using AWS,
        Docker, Kubernetes, Jenkins, Terraform, and Ansible.
      </p>
    </div>
  </section>

  <section
  id="skills"
  className="mx-auto max-w-7xl px-6 py-24"
>
  <h2 className="mb-4 text-center text-5xl font-black">
    SpiderOps Arsenal
  </h2>

  <p className="mb-16 text-center text-slate-400">
    Technologies powering my DevOps journey
  </p>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">

    {skills.map((skill, index) => (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: index * 0.05,
        }}
        whileHover={{
          y: -10,
          scale: 1.05,
        }}
        className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-6 backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-cyan-500/0 to-red-500/0 opacity-0 transition duration-500 group-hover:opacity-20" />

        <div className="absolute right-3 top-3 text-cyan-400/50">
          🕸
        </div>

        <div className="relative z-10">

          <div className="mb-5 flex justify-center">
            {skill.icon}
          </div>

          <h3 className="text-center text-lg font-bold text-white">
            {skill.name}
          </h3>

          

        </div>
      </motion.div>
    ))}

  </div>
</section>
  <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
    <h2 className="mb-12 text-center text-4xl font-bold">
      Experience & Certifications
    </h2>

    <div className="grid gap-8 md:grid-cols-2">

      <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-8 backdrop-blur-xl">
        <h3 className="text-2xl font-bold text-cyan-300">
          Tech Support Intern
        </h3>

        <p className="mt-2 text-red-300">
          VXI Global Solutions
        </p>

        <p className="mt-4 text-slate-400">
          Assisted users with technical issues, troubleshooting,
          and customer support operations.
        </p>
      </div>

      <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-8 backdrop-blur-xl">
        <h3 className="text-2xl font-bold text-cyan-300">
          AWS with DevOps
        </h3>

        <p className="mt-2 text-red-300">
          XtreamTech
        </p>

        <p className="mt-4 text-slate-400">
          Completed hands-on training in AWS, Docker, Kubernetes,
          Jenkins, Terraform, and CI/CD.
        </p>
      </div>

    </div>
  </section>

  <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
    <h2 className="mb-12 text-center text-4xl font-bold">
      Hero Missions
    </h2>

    <div className="grid gap-8 md:grid-cols-3">
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400"
        >
          <h3 className="text-2xl font-bold text-cyan-300">
            {project.title}
          </h3>

          <p className="mt-4 text-slate-400">
            {project.description}
          </p>

          <p className="mt-6 text-sm text-red-300">
            {project.tech}
          </p>
        </a>
      ))}
    </div>
  </section>

  <section
    id="contact"
    className="mx-auto max-w-4xl px-6 pb-24 text-center"
  >
    <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-10 backdrop-blur-xl">
      <h2 className="text-4xl font-bold">
        Contact HQ
      </h2>

      <div className="mt-8 space-y-4 text-slate-300">
        <p>📧 shravyareddy397@gmail.com</p>

        <p>📍 Hyderabad, Telangana, India</p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="https://www.linkedin.com/in/shravya-reddy-b00038269"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-500 px-5 py-3 font-semibold text-black"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Shravya8899"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-400 px-5 py-3"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>

</main>

);
}
