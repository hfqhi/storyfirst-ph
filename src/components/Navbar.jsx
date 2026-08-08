import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Identity", href: "#identity" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Partnerships", href: "#partnerships" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-950/90 backdrop-blur-md z-50 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-black tracking-tighter text-white flex items-center gap-1"
        >
          STORY
          <span className="bg-yellow-400 text-black px-1 rounded-sm">
            FIRST
          </span>
          <span className="text-xs self-start text-neutral-400">PH</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-neutral-300 hover:text-yellow-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-6 py-6 flex flex-col gap-4 text-center font-bold uppercase">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-neutral-200 hover:text-yellow-400 py-2 border-b border-neutral-800"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
