"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about-me", label: "About me" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-[60px] sm:h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 lg:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        {/* Logo */}
        <a
          href="#about-me"
          className="h-auto w-auto flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
            priority
          />

          <span className="font-bold ml-2 sm:ml-3 text-sm sm:text-base lg:text-lg text-gray-300 hidden sm:block">
            Kustoro Dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[500px] h-full items-center justify-between lg:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-4 sm:px-5 py-2 rounded-full text-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer text-sm lg:text-base hover:text-purple-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-purple-300 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex gap-3 lg:gap-5">
          {Socials.map((social) => (
            <a
              key={social.name}
              // href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition-transform duration-200"
              aria-label={social.name}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={20}
                height={20}
                className="w-5 h-5 lg:w-6 lg:h-6"
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#030014] bg-opacity-95 backdrop-blur-lg border-t border-[#7042f861] md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-purple-300 text-lg py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-[#7042f861] w-full justify-center">
                {Socials.map((social) => (
                  <a
                    key={social.name}
                    // href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transform transition-transform duration-200"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
