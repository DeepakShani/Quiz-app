import React from 'react';
// import { motion } from 'framer-motion';

// Full-stack developer single-file portfolio React component
// Tailwind CSS assumed to be available in the project (no import required here)
// Replace placeholder data (name, bio, projects, links) with your own content.

const projects = [
  {
    id: 1,
    title: 'Food Delivery App (Clone)',
    description:
      'React + Vite frontend, Express + Node backend, MongoDB, JWT auth, responsive PWA with offline caching and basic payments integration.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'PWA'],
    link: '#',
    repo: '#'
  },
  {
    id: 2,
    title: 'Realtime Chat App',
    description:
      'WebSocket-based realtime chat with rooms, typing indicators and message persistence.',
    tech: ['React', 'Socket.io', 'Node', 'Redis'],
    link: '#',
    repo: '#'
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description:
      'Full e-commerce flow with product catalog, cart, orders, Stripe payments and admin dashboard.',
    tech: ['Next.js', 'Postgres', 'Prisma', 'Stripe'],
    link: '#',
    repo: '#'
  }
];

export default function FullStackPortfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">FK</div>
          <div>
            <h1 className="text-lg font-semibold">Killer Kalra</h1>
            <p className="text-xs text-gray-500">Full‑Stack Developer</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="/resume.pdf" download className="px-3 py-1 rounded-md border border-gray-200 text-sm">Resume</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-indigo-600 font-medium mb-2">Full‑Stack Developer</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">I build beautiful, fast, and reliable web apps</h2>
            <p className="mt-4 text-gray-600">I'm a full‑stack developer specialising in React, Node.js and scalable databases. I ship production-ready features, mentor junior engineers, and care about performance and UX.</p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm shadow">See projects</a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 text-sm">Get in touch</a>
            </div>

            <div className="mt-6 flex gap-4 text-sm text-gray-500">
              <div>
                <div className="text-xs uppercase">Experience</div>
                <div className="font-medium">3+ years</div>
              </div>
              <div>
                <div className="text-xs uppercase">Available</div>
                <div className="font-medium">Open to opportunities</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow p-6"
          >
            <h3 className="text-sm text-gray-500">Featured Project</h3>
            <h4 className="mt-2 font-semibold">Food Delivery App (Clone)</h4>
            <p className="mt-2 text-gray-600 text-sm">Responsive food ordering app with search, cart, user auth and admin panel. Built as a performance-first app with caching, image optimization and progressive enhancement.</p>

            <div className="mt-4 flex gap-2 flex-wrap">
              {['React','Node','MongoDB','PWA'].map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-md border border-gray-100">{t}</span>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <a href="#" className="text-sm underline">Live demo</a>
              <a href="#" className="text-sm underline">Source</a>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-8">
          <h3 className="text-2xl font-bold">Selected Projects</h3>
          <p className="text-gray-600 mt-2">Few projects that showcase both frontend and backend work.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article key={p.id} whileHover={{ translateY: -6 }} className="bg-white rounded-2xl shadow p-5 flex flex-col">
                <div className="h-36 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">Screenshot</div>
                <h4 className="mt-4 font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-gray-600 flex-1">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full border">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a href={p.link} className="text-sm underline">Live</a>
                  <a href={p.repo} className="text-sm underline">Code</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-8">
          <h3 className="text-2xl font-bold">Tech & Skills</h3>
          <p className="text-gray-600 mt-2">Hands-on with the following stack and tools.</p>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'JavaScript (ES6+)',
              'React / Next.js',
              'Node.js / Express',
              'TypeScript',
              'Postgres / MongoDB',
              'Docker / Kubernetes',
              'Testing (Jest, Playwright)',
              'CI / CD'
            ].map((s) => (
              <div key={s} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-sm font-medium">{s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-8">
          <h3 className="text-2xl font-bold">About Me</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 text-gray-600">
              <p>I build end-to-end web applications with a focus on performance, simplicity and accessibility. I enjoy mentoring, writing clear technical docs and improving developer experience.</p>

              <ul className="mt-4 space-y-2">
                <li>• Experience shipping production features in fast-paced teams.</li>
                <li>• Strong grounding in data modeling and APIs.</li>
                <li>• Comfortable architecting scalable systems and monitoring them in production.</li>
              </ul>

              <div className="mt-4 flex gap-3">
                <a href="/resume.pdf" download className="px-4 py-2 rounded-md border">Download Resume</a>
                <a href="#contact" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Hire me</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">Photo</div>
              <h4 className="mt-4 font-semibold">Killer Kalra</h4>
              <p className="text-sm text-gray-500">Based in India • Open to remote</p>

              <div className="mt-4 flex gap-3">
                <a href="#" aria-label="github" className="text-sm underline">GitHub</a>
                <a href="#" aria-label="linkedin" className="text-sm underline">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-8">
          <h3 className="text-2xl font-bold">Contact</h3>
          <p className="text-gray-600 mt-2">Want to work together? Fill this quick form or email me at <span className="font-medium">you@example.com</span>.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <form className="bg-white rounded-2xl shadow p-6 space-y-4">
              <label className="block">
                <span className="text-sm text-gray-600">Name</span>
                <input className="mt-1 block w-full rounded-md border px-3 py-2" placeholder="Your name" />
              </label>

              <label className="block">
                <span className="text-sm text-gray-600">Email</span>
                <input className="mt-1 block w-full rounded-md border px-3 py-2" placeholder="you@example.com" />
              </label>

              <label className="block">
                <span className="text-sm text-gray-600">Message</span>
                <textarea className="mt-1 block w-full rounded-md border px-3 py-2" rows={4} placeholder="Short message" />
              </label>

              <div className="flex justify-end">
                <button type="button" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Send</button>
              </div>
            </form>

            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-6 shadow">
                <h4 className="font-semibold">Location</h4>
                <p className="text-sm text-gray-600 mt-2">India — Remote available</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h4 className="font-semibold">Availability</h4>
                <p className="text-sm text-gray-600 mt-2">Open to part-time & full-time roles</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h4 className="font-semibold">Quick links</h4>
                <div className="mt-3 flex gap-3 flex-wrap">
                  <a href="#" className="text-sm underline">GitHub</a>
                  <a href="#" className="text-sm underline">LinkedIn</a>
                  <a href="#" className="text-sm underline">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-gray-500">
          © {new Date().getFullYear()} Killer Kalra — Built with React & Tailwind
        </footer>
      </main>
    </div>
  );
}
