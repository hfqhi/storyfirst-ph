import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Founder", href: "#founder" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-neutral-950/90 backdrop-blur-md z-40 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Exact Logo Recreation */}
        <a
          href="#"
          className="flex flex-col text-black dark:text-white leading-[0.8] tracking-tighter transition-colors"
        >
          <span className="text-3xl font-black uppercase">Story</span>
          <div className="flex items-start">
            <span className="text-4xl font-black uppercase">First</span>
            <span className="text-sm font-bold uppercase mt-1 ml-0.5 tracking-normal">
              PH
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-neutral-600 dark:text-neutral-300 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-black dark:text-white"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4 text-black dark:text-white">
          <button onClick={toggleTheme} className="p-2">
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-6 py-6 flex flex-col gap-4 text-center font-bold uppercase">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-neutral-800 dark:text-neutral-200 hover:text-yellow-500 py-2 border-b border-neutral-100 dark:border-neutral-800"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
