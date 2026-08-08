import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 py-12 px-6 text-center text-xs text-neutral-500 font-mono transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center sm:items-start">
          <a
            href="#"
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

        <div className="flex gap-8 text-[10px] font-black tracking-[0.2em] uppercase">
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
