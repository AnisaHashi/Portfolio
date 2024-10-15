"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Om Meg",
    path: "#about",
  },
  {
    title: "Prosjekter",
    path: "#projects",
  },
  {
    title: "Kontakt",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Veksle mellom å åpne og lukke navigasjonsmenyen
  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Lukk navigasjonsmenyen når en lenke klikkes i mobilmenyen
  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border-b border-[#33353F] bg-opacity-100 bg-[#1a1a1a]">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* Logo */}
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <p>Anisa Hashi</p>
        </Link>

        {/* Mobilmeny-knapp */}
        <div className="md:hidden">
          <button
            onClick={handleNavbarToggle}
            aria-label="Veksle Meny"
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white focus:outline-none"
          >
            {!navbarOpen ? (
              <Bars3Icon className="h-5 w-5" />
            ) : (
              <XMarkIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Desktopmeny */}
        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobilmeny-overlegg */}
      {navbarOpen && (
        <MenuOverlay links={navLinks} onLinkClick={handleLinkClick} />
      )}
    </nav>
  );
};

export default Navbar;
