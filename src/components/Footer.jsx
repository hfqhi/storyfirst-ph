import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 py-12 px-6 text-center text-xs text-neutral-500 font-mono transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-neutral-950 dark:text-white text-lg font-black uppercase tracking-tight mb-1 flex items-center">
            STORY<span className="text-yellow-500">FIRST</span>PH
          </h4>
          <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
        </div>

        <div className="flex gap-8 text-sm font-bold tracking-widest uppercase">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}
