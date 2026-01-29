"use client";

import React from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const email = "kustoroterbatas@gmail.com";

  const socialLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/kustoro25",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/kstr-fsd/",
      label: "LinkedIn",
    },
  ];

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, "_blank");
  };

  return (
    <footer className="w-full py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4 sm:gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label={link.label}
              >
                <span className="text-xl sm:text-2xl">{link.icon}</span>
              </a>
            ))}
            <button
              onClick={handleEmailClick}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
              aria-label="Email"
            >
              <FiMail className="text-xl sm:text-2xl" />
            </button>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center px-4">
            © {new Date().getFullYear()} • Kustoro Dev • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
