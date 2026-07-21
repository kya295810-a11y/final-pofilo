import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import projectImg from '../assets/project1.svg';

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8">Projects</h3>

        <div className="space-y-12">
          {projects.map((p, i) => (
            <motion.article key={p.id} className="project-card relative rounded-xl overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7">
                  <div className="text-sm text-secondary">{p.role}</div>
                  <h4 className="text-2xl md:text-4xl font-bold mt-2">{p.title}</h4>
                  <p className="mt-4 text-secondary max-w-xl">{p.summary}</p>

                  <div className="mt-6 flex gap-3">
                    <a href={p.live} className="px-5 py-3 border border-[rgba(255,255,255,0.06)] rounded-md">Live Demo</a>
                    <a href={p.github} className="px-5 py-3 bg-accent text-black rounded-md">GitHub</a>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="w-full h-64 md:h-48 lg:h-64 bg-[#0a0a0a] rounded-lg overflow-hidden">
                    <img src={projectImg} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
