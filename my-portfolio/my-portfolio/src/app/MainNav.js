// MainNav.js
import React from "react";
import Link from "next/link";

export default function MainNav() {
  return (
    <header className="bg-gray-800 sticky top-0 w-full z-50">
      <nav className="max-w-screen-xl mx-auto px-4">
        <ul className="flex items-center space-x-6">
          {/* Your Name */}
          <li className="mr-8">
            <Link href="/">
              <span className="text-white text-2xl font-bold">Your Name</span>
            </Link>
          </li>

          {/* Robotic Projects Menu */}
          <li className="relative group">
            <Link
              href="/robotic-projects"
              className="text-white px-3 py-2 hover:text-gray-400"
            >
              Robotic Projects
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-600">
                  <Link href="/robotic-projects/project1">Project 1</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-600">
                  <Link href="/robotic-projects/project2">Project 2</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-600">
                  <Link href="/robotic-projects/project3">Project 3</Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Combat Robotics Menu */}
          <li className="relative group">
            <Link
              href="/combat-robotics"
              className="text-white px-3 py-2 hover:text-gray-400"
            >
              Combat Robotics
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-600">
                  <Link href="/combat-robotics/projectA">Project A</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-600">
                  <Link href="/combat-robotics/projectB">Project B</Link>
                </li>
              </ul>
            </div>
          </li>

          {/* IOT Projects Menu */}
          <li className="relative group">
            <Link
              href="/iot-projects"
              className="text-white px-3 py-2 hover:text-gray-400"
            >
              IOT Projects
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-600">
                  <Link href="/iot-projects/projectX">Project X</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-600">
                  <Link href="/iot-projects/projectY">Project Y</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-600">
                  <Link href="/iot-projects/projectZ">Project Z</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
