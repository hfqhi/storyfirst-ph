import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-8 px-6 text-center text-xs text-neutral-500 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} STORYFIRST PH. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-yellow-400 transition-colors">
            FACEBOOK
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            INSTAGRAM
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            YOUTUBE
          </a>
        </div>
      </div>
    </footer>
  );
}
