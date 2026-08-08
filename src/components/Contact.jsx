import React, { useState } from "react";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    // Revert button text after 3 seconds
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 px-6 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <span className="bg-yellow-500 text-black uppercase font-black px-3 py-1 text-sm tracking-widest inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight">
            Let's Tell Your Story
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed max-w-md">
            Have a project, collaboration idea, or inquiry? Send us a message
            and our team will get back to you promptly.
          </p>

          {/* Added select-text to allow clients to copy the email address */}
          <div className="mt-10 space-y-6 select-text">
            <div>
              <p className="text-yellow-600 dark:text-yellow-500 text-[10px] font-black tracking-[0.2em] uppercase mb-1">
                Email
              </p>
              <p className="text-neutral-950 dark:text-white font-medium text-lg">
                contact@storyfirst.ph
              </p>
            </div>
            <div>
              <p className="text-yellow-600 dark:text-yellow-500 text-[10px] font-black tracking-[0.2em] uppercase mb-1">
                Location
              </p>
              <p className="text-neutral-950 dark:text-white font-medium text-lg">
                Philippines
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-neutral-950 p-8 border border-neutral-200 dark:border-neutral-800 space-y-6 shadow-sm"
        >
          <div>
            <label className="block text-[10px] font-black tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Your Full Name"
              className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-4 py-3 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-4 py-3 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              required
              placeholder="Tell us about yourself..."
              className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-4 py-3 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-sm focus:outline-none focus:border-yellow-500 resize-none transition-colors"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full font-extrabold uppercase py-4 text-sm tracking-wider transition-all duration-300 active:scale-95 ${
              isSent
                ? "bg-green-500 text-white"
                : "bg-yellow-500 hover:bg-yellow-400 text-black shadow-xl shadow-yellow-500/20"
            }`}
          >
            {isSent ? "MESSAGE SENT!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
