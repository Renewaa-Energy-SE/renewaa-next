"use client";

import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`h-full bg-gray-700 flex transition-all duration-500 ease-in-out ${
        isOpen ? "w-[15vw]" : "w-10"
      }`}
    >
      <div className="h-full relative flex-grow">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-1/2 transform -translate-y-1/2 text-2xl"
          style={{
            left: isOpen ? "95%" : "50%",
            transform: "translateX(-50%) translateY(-50%)",
          }}
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          aria-expanded={isOpen}
          title={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isOpen ? (
            <FaChevronCircleLeft color="#FFFFFF" size={30} />
          ) : (
            <FaChevronCircleRight color="#FFFFFF" size={30} />
          )}
        </button>

        {isOpen && (
          <ul className="flex flex-col gap-10 justify-between hover:bg-gray-700 pt-8 pb-2 rounded border-b-4 border-gray-600 text-white transition-opacity duration-500 ease-in-out opacity-100">
            <li className="w-full hover:bg-gray-800 py-2 px-2">
              <Link
                href="/admin/dashboard"
                className="p-2 rounded border-y-2 border-white text-white"
              >
                Dashboard
              </Link>
            </li>
            <li className="w-full hover:bg-gray-800 py-2 px-2">
              <Link
                href="/admin/statistics"
                className="p-2 rounded border-y-2 border-white text-white"
              >
                Statistics
              </Link>
            </li>
            <li className="w-full hover:bg-gray-800 py-2 px-2">
              <Link
                href="/admin/addproject"
                className="p-2 rounded border-y-2 border-white text-white whitespace-nowrap"
              >
                Add Project
              </Link>
            </li>
            <li className="w-full hover:bg-gray-800 py-2 px-2">
              <Link
                href="/admin/addadmin"
                className="p-2 rounded border-y-2 border-white text-white whitespace-nowrap"
              >
                Add Admin
              </Link>
            </li>
            <li className="w-full hover:bg-gray-800 py-2 px-2">
              <Link
                href="#"
                className="p-2 rounded border-y-2 border-white text-white"
              >
                Email
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
