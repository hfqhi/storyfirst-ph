import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 py-12 px-6 text-center text-xs text-neutral-500 font-mono transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center sm:items-start">
          <a
            href="#identity"
            className="flex flex-col text-black dark:text-white leading-[0.85] tracking-tighter transition-colors w-fit items-center sm:items-start mb-2"
          >
            <span className="text-3xl font-black uppercase tracking-tight">
              Story
            </span>
            <div className="flex items-end">
              <span className="text-3xl font-black uppercase tracking-tight">
                First
              </span>
              <span className="text-xs font-bold uppercase mb-[2px] ml-1 tracking-normal">
                PH
              </span>
            </div>
          </a>
          <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
        </div>

        {/* Sleek, optimized brand icons from react-icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61578130948660"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-yellow-500 dark:hover:text-yellow-500 transition-all duration-300 hover:-translate-y-1"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>

          <a
            href="https://www.instagram.com/storyfirstph/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-yellow-500 dark:hover:text-yellow-500 transition-all duration-300 hover:-translate-y-1"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>

          <a
            href="https://www.tiktok.com/@storyfirst.ph"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-yellow-500 dark:hover:text-yellow-500 transition-all duration-300 hover:-translate-y-1"
            aria-label="TikTok"
          >
            <FaTiktok size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
