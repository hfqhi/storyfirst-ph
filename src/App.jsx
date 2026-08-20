import { useState } from "react";
import {
  identityData,
  navItems,
  servicesData,
  featuredProjects,
  documentaryProjects,
  contentProjects,
  eventsData,
  workshopArchive,
  workshopTopics,
  awardsData,
  clientsByGroup,
  collaborators,
  advocacies,
  testimonials,
  teamData,
  socialLinks,
  inquiryCategories,
} from "./data/portfolioData";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-5xl font-black uppercase tracking-tight">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-neutral-700 dark:text-neutral-300 leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}

function ProjectCard({ item, altPrefix = "Project" }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
    >
      <img
        src={item.image}
        alt={`${altPrefix}: ${item.title}`}
        className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold">{item.title}</h3>
        {item.client ? <p className="text-sm text-neutral-700 dark:text-neutral-300">{item.client}</p> : null}
        {item.organization ? <p className="text-sm text-neutral-700 dark:text-neutral-300">{item.organization}</p> : null}
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.role || item.contribution || item.context}</p>
        {item.year ? <p className="text-xs uppercase tracking-[0.2em] text-yellow-600">{item.year}</p> : null}
        {item.output ? <p className="text-xs uppercase tracking-[0.2em] text-yellow-600">{item.output}</p> : null}
      </div>
    </a>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: inquiryCategories[0],
    message: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    setFormData({
      name: "",
      email: "",
      category: inquiryCategories[0],
      message: "",
    });
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white min-h-screen">
        <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur">
          <nav className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
            <a href="#home" className="font-black text-xl uppercase tracking-tight">{identityData.siteName}</a>
            <div className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-[0.16em] font-bold">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-yellow-600 transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsDark((v) => !v)}
              className="text-xs uppercase tracking-[0.14em] font-bold border border-neutral-300 dark:border-neutral-700 px-3 py-2"
            >
              {isDark ? "Light" : "Dark"}
            </button>
          </nav>
        </header>

        <main>
          <section id="home" className="border-b border-neutral-200 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-yellow-600 font-bold">{identityData.location}</p>
                <h1 className="mt-4 text-4xl md:text-6xl font-black uppercase leading-none tracking-tight">{identityData.tagline}</h1>
                <p className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">{identityData.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#work" className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 text-sm font-bold uppercase tracking-[0.14em]">View Work</a>
                  <a href="#contact" className="border border-neutral-300 dark:border-neutral-700 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em]">Work With StoryFirst PH</a>
                </div>
              </div>
              <div className="relative">
                <video
                  src="/storyfirst-clip.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[24rem] md:h-[28rem] object-cover"
                  aria-label="StoryFirst PH documentary showreel"
                />
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-5 pb-16 grid md:grid-cols-3 gap-6" id="services">
              {servicesData.map((service) => (
                <article key={service.id} className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
                  <img src={service.image} alt={`${service.title} visual`} className="h-44 w-full object-cover" />
                  <div className="p-5">
                    <p className="text-xs tracking-[0.2em] uppercase text-yellow-600 font-bold">{service.number}</p>
                    <h2 className="mt-2 text-2xl font-bold">{service.title}</h2>
                    <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{service.description}</p>
                    <a href={service.target} className="mt-5 inline-block text-xs uppercase tracking-[0.2em] font-bold hover:text-yellow-600">
                      {service.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="about" className="max-w-7xl mx-auto px-5 py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800">
            <SectionHeading
              eyebrow="About StoryFirst"
              title="A story-first communications and production company"
              description="StoryFirst PH was established to create work grounded in research, context, and human stories. Built from documentary and journalism roots, the company now supports Philippine and international clients in production, communication, and public engagement."
            />
            <div className="grid md:grid-cols-2 gap-8 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <p>
                StoryFirst PH believes meaningful communication starts with listening: to people, communities, and lived realities. The team approaches each assignment by prioritizing context before platform, and substance before spectacle.
              </p>
              <p>
                Marco Romas's experience helped establish the foundation, but StoryFirst PH has evolved into a collaborative team delivering documentaries, campaigns, events, and workshops for varied audiences.
              </p>
            </div>
            <div className="mt-8 p-6 border border-yellow-500/50 bg-yellow-500/10">
              <h3 className="font-bold uppercase tracking-[0.14em] text-sm">Mission / Philosophy</h3>
              <p className="mt-2">The story comes first. StoryFirst PH believes meaningful communication begins with understanding people, context, and the story that needs to be told.</p>
            </div>
          </section>

          <section id="work" className="max-w-7xl mx-auto px-5 py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800">
            <SectionHeading
              eyebrow="Selected Work"
              title="Featured Projects"
              description="A snapshot of documentary, international, and communication projects that represent StoryFirst PH's production standards."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} item={project} altPrefix="Featured project" />
              ))}
            </div>
          </section>

          <section id="documentaries" className="max-w-7xl mx-auto px-5 py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800">
            <SectionHeading
              eyebrow="Documentary Production"
              title="From research and fieldwork to final storytelling"
              description="StoryFirst PH supports full-cycle documentary work: development, logistics, interviews, local production, international crew support, and editorial storytelling."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentaryProjects.map((project) => (
                <ProjectCard key={project.title} item={project} altPrefix="Documentary project" />
              ))}
            </div>
          </section>

          <section id="content" className="max-w-7xl mx-auto px-5 py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800">
            <SectionHeading
              eyebrow="Content Creation"
              title="Campaigns, digital videos, and branded storytelling"
              description="Selected social and digital outputs showing StoryFirst PH's approach to communication strategy and production."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentProjects.map((project) => (
                <ProjectCard key={project.title} item={project} altPrefix="Content project" />
              ))}
            </div>
          </section>

          <section id="events" className="max-w-7xl mx-auto px-5 py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800">
            <SectionHeading
              eyebrow="Events Hosting / Moderation"
              title="Corporate, public, festival, and advocacy events"
              description="Event work is presented with context-first captions so each appearance is tied to a real program and communication goal."
            />
            <div className="grid md:grid-cols-2 gap-6">
              {eventsData.map((item) => (
                <ProjectCard key={item.title} item={item} altPrefix="Event portfolio" />
              ))}
            </div>
          </section>

          <section id="workshops" className="max-w-7xl mx-auto px-5 py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800">
            <SectionHeading
              eyebrow="Public Speaking & Workshops"
              title="Visual archive of talks, trainings, and facilitation"
              description="Poster-led and event-led records of speaking engagements, journalism sessions, documentary workshops, and moderation work."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {workshopArchive.map((item) => (
                <a key={item.title} href={item.link} target="_blank" rel="noreferrer" className="border border-neutral-200 dark:border-neutral-800 overflow-hidden">
                  <img src={item.image} alt={`${item.title} poster`} className="h-56 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="font-bold text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{item.topic}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {workshopTopics.map((topic) => (
                <span key={topic} className="text-xs uppercase tracking-[0.12em] bg-neutral-100 dark:bg-neutral-900 px-3 py-2 border border-neutral-200 dark:border-neutral-800">
                  {topic}
                </span>
              ))}
            </div>
          </section>

          <section id="awards" className="max-w-7xl mx-auto px-5 py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800">
            <SectionHeading
              eyebrow="Awards & Recognitions"
              title="Verified recognitions tied to projects and collaborators"
              description="Each logo links to a credible source and avoids overstating StoryFirst PH's specific role in award outcomes."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awardsData.map((award) => (
                <a key={award.name} href={award.link} target="_blank" rel="noreferrer" className="border border-neutral-200 dark:border-neutral-800 p-5 bg-neutral-50 dark:bg-neutral-900">
                  <img src={award.logo} alt={`${award.name} logo`} className="h-14 w-14 object-contain" />
                  <h3 className="mt-4 font-bold">{award.name}</h3>
                  <p className="text-xs uppercase tracking-[0.16em] text-yellow-600 mt-2">{award.recognition}</p>
                  <p className="text-sm mt-2 text-neutral-700 dark:text-neutral-300">{award.context}</p>
                </a>
              ))}
            </div>
          </section>

          <section id="clients" className="max-w-7xl mx-auto px-5 py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800">
            <SectionHeading
              eyebrow="Clients & Collaborators"
              title="Organizations StoryFirst PH has worked with"
              description="Logo wall grouped by sector for readability across desktop and mobile."
            />
            <div className="space-y-8">
              {clientsByGroup.map((group) => (
                <div key={group.group}>
                  <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-yellow-600">{group.group}</h3>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {group.clients.map((client) => (
                      <a
                        key={client.name}
                        href={client.url}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900 flex items-center gap-3"
                      >
                        <img src={client.logo} alt={`${client.name} logo`} className="h-10 w-10 object-contain" />
                        <span className="text-sm font-semibold">{client.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="people" className="max-w-7xl mx-auto px-5 py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800">
            <SectionHeading
              eyebrow="People We've Worked With"
              title="Notable collaborators across projects and programs"
              description="Selected personalities, experts, and partners shown with project context instead of standalone celebrity imagery."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {collaborators.map((person) => (
                <article key={person.name} className="border border-neutral-200 dark:border-neutral-800 overflow-hidden">
                  <img src={person.image} alt={`${person.name} collaboration`} className="h-56 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="font-bold text-lg">{person.name}</h3>
                    <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{person.context}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="advocacies" className="max-w-7xl mx-auto px-5 py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800">
            <SectionHeading
              eyebrow="Advocacies"
              title="Work beyond commercial production"
              description="StoryFirst PH supports journalism education, literacy, and storytelling programs for emerging communicators."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {advocacies.map((item) => (
                <article key={item.title} className="border border-neutral-200 dark:border-neutral-800 p-5 bg-neutral-50 dark:bg-neutral-900">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="feedback" className="max-w-7xl mx-auto px-5 py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800">
            <SectionHeading
              eyebrow="Client Feedback"
              title="Selected testimonials"
              description="Testimonials are formatted with role and organization for clarity and credibility."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item, index) => (
                <blockquote key={index} className="border border-neutral-200 dark:border-neutral-800 p-6">
                  <p className="text-neutral-700 dark:text-neutral-300">“{item.quote}”</p>
                  <footer className="mt-4 text-sm">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-neutral-600 dark:text-neutral-400">{item.position}</p>
                    <p className="text-neutral-600 dark:text-neutral-400">{item.company}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          <section id="team" className="max-w-7xl mx-auto px-5 py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800">
            <SectionHeading eyebrow="Our Team" title="People behind StoryFirst PH" />
            <div className="grid md:grid-cols-3 gap-6">
              {teamData.map((member) => (
                <article key={member.name} className="border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900">
                  <img src={member.image} alt={`${member.name} portrait`} className="h-56 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="font-bold text-2xl">{member.name}</h3>
                    <p className="text-xs uppercase tracking-[0.16em] text-yellow-600 mt-2">{member.role}</p>
                    <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="max-w-7xl mx-auto px-5 py-16 md:py-24">
            <SectionHeading
              eyebrow="Contact"
              title="Work With StoryFirst PH"
              description="Have a story, project, or idea worth telling? Let's work together."
            />
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <p><span className="font-bold text-neutral-900 dark:text-white">Email:</span> storyfirstph@gmail.com</p>
                <p><span className="font-bold text-neutral-900 dark:text-white">Location:</span> Philippines / Cebu</p>
                <div>
                  <p className="font-bold text-neutral-900 dark:text-white">Social Media</p>
                  <ul className="mt-2 space-y-2">
                    {socialLinks.map((item) => (
                      <li key={item.name}>
                        <a href={item.url} target="_blank" rel="noreferrer" className="hover:text-yellow-600">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <form onSubmit={onSubmit} className="border border-neutral-200 dark:border-neutral-800 p-6 space-y-4 bg-neutral-50 dark:bg-neutral-900">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950"
                />
                <select
                  value={formData.category}
                  onChange={(e) => setFormData((d) => ({ ...d, category: e.target.value }))}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950"
                >
                  {inquiryCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <textarea
                  rows="5"
                  required
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950"
                />
                <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 font-bold uppercase tracking-[0.16em]">
                  Send Inquiry
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 px-5 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
            <p>© {new Date().getFullYear()} StoryFirst PH. All rights reserved.</p>
            <p>StoryFirst PH | StoryFirst Philippines | documentary production Philippines</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
