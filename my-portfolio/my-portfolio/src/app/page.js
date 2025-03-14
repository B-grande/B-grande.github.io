"use client";

import { motion } from "framer-motion";
// import FeaturedProjectsText from "./FeaturedProjectsText"; // <-- remove this line

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Hi, I&apos;m Brian!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-700 max-w-xl mb-8"
        >
          A passionate engineer working on robotics, IoT, and more.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="mailto:your.email@example.com"
            className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 bg-white border border-black text-black rounded hover:bg-gray-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </motion.div>
      </section>

      {/* Remove or comment out this line:
          <FeaturedProjectsText />
      */}

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-xl text-gray-700 mb-6">
            I&apos;m a robotics engineer with a passion for building innovative
            solutions. With experience in autonomous systems, IoT, and
            mechanical design, I bring technical expertise and creative
            problem-solving to every project.
          </p>
          <p className="text-xl text-gray-700">
            When I&apos;m not building robots, you can find me always learning
            new technologies and exploring new ideas.
          </p>
        </div>
      </section>
    </main>
  );
}
