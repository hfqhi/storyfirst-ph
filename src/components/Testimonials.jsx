import React from "react";
import { testimonialsData } from "../data/portfolioData";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-neutral-100 dark:bg-[#0a0a0a] border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-500 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="bg-yellow-500 text-black uppercase font-black px-3 py-1 text-[10px] tracking-[0.2em] inline-block mb-4 shadow-sm">
            Client Feedback
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight">
            What They Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-neutral-950 p-10 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote Content */}
              <div>
                <Quote size={40} className="text-yellow-500/30 mb-6" />
                <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed mb-8 font-medium italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="border-t border-neutral-100 dark:border-neutral-800 pt-6 mt-auto">
                <p className="text-neutral-900 dark:text-white font-black uppercase tracking-widest text-sm">
                  {testimonial.name}
                </p>
                <p className="text-yellow-600 dark:text-yellow-500 text-[10px] font-bold uppercase tracking-[0.15em] mt-1">
                  {testimonial.position}
                </p>
                <p className="text-neutral-500 dark:text-neutral-500 text-xs font-medium mt-1">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
