# StoryFirst PH — Official Portfolio & Agency Website

A high-end, responsive digital experience and portfolio website built for **StoryFirst PH**, showcasing cinematic documentaries, event hosting, brand collaborations, and award-winning media productions.

---

## 🚀 Short Documentation

StoryFirst PH is a media and communications organization dedicated to authentic storytelling, investigative journalism, and human-centered visual narratives. This web application was designed and engineered as a modern digital showcase to elevate the agency's online presence, featuring immersive hero video integration, interactive capability showcases, a filterable multimedia project gallery, and a direct client inquiry portal.

---

## 🛠️ Technologies / Tools Used

- **Frontend Library:** React (Vite)
- **Styling & Design System:** Tailwind CSS v4
- **Animations & Interaction:** Framer Motion & CSS keyframe animations
- **Icons:** React Icons (`react-icons`) & Lucide React
- **Deployment & Hosting:** GitHub Pages

---

## ✅ Completed Sections

- **Cinematic Hero Section:** Implemented with a high-impact background video, fluid typography scaling, and call-to-action buttons.
- **Founder Profile:** Showcases Marco Romas's biography, a linked portrait photo, and stylized notable recognitions (International Emmy Nominee, New York Festivals, etc.).
- **Capabilities (Services):** Interactive list with background image transitions, gradient masks, and smooth yellow gradient hover states.
- **Featured Projects Gallery:** Fully filterable grid supporting Documentaries, Hosting, and Brands, complete with in-background image hover reveals and direct media links.
- **Partnerships Marquee:** Infinite horizontal scrolling ticker showcasing brand partners with pause-on-hover functionality.
- **Contact & Footer Section:** Fully functional inquiry form with success states, auto-clearing input fields, contact details, and optimized social media icons.
- **Global Theme Engine:** Fully functional Light/Dark mode switcher with persistent visual styling and paper texture overlays.

---

## ⏳ Incomplete Sections

- **Backend Database Integration:** Form submissions trigger a client-side state change ("MESSAGE SENT!") rather than writing data to a persistent cloud database or server.
- **CMS Capabilities:** Project items and awards are statically managed through local data files (`portfolioData.js`) instead of a headless Content Management System.

---

## ⚠️ Known Limitations

- **Static Form Handling:** The contact form provides visual confirmation of submission but does not actually dispatch automated emails or store submissions in a database due to the 24-hour development constraints.
- **Client-Side Routing:** Built as a Single Page Application (SPA) anchored around smooth scrolling sections rather than multi-page server-side routing.
- **External Media Dependencies:** Video elements and external links rely on third-party video hosting platforms (YouTube, Instagram, Facebook) for full playback.
