"use client";

import Link from "next/link";

export default function AppleHoverNav() {
  return (
    <header className="sticky top-0 w-full z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 h-12 relative">
        {/* Name pinned on the left (absolute) */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-semibold">
          <Link href="/">Brian Grande</Link>
        </div>

        {/* Nav items centered */}
        <ul className="flex items-center justify-center h-full space-x-[70px] text-sm text-black">
          <li>
            <Link
              href="/robotic-projects"
              className="hover:text-gray-600 transition-colors"
            >
              Robotics
            </Link>
          </li>
          <li>
            <Link
              href="/combat-robotics"
              className="hover:text-gray-600 transition-colors"
            >
              Combat Bots
            </Link>
          </li>
          <li>
            <Link
              href="/iot-projects"
              className="hover:text-gray-600 transition-colors"
            >
              IoT
            </Link>
          </li>
          <li>
            <Link
              href="/work-experience"
              className="hover:text-gray-600 transition-colors"
            >
              Work Experience
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-600 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
