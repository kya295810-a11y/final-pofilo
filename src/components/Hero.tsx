import React from 'react';
import { motion } from 'framer-motion';
import portrait from '../assets/portrait.svg';

const name = ['K','Y','A','W',' ','S','A','N',' ','L','I','N'];

export default function Hero() {
  return (
    <section className="hero relative">
      <div className="aurora" />
      <div className="container mx-auto px-6 relative z-10 flex gap-24 items-center">
        <div>
          <div className="text-6xl md:text-9xl leading-none font-extrabold opacity-5 select-none">
            KYAW SAN LIN
          </div>
          <motion.h1 initial="hidden" animate="visible" className="absolute top-24 left-8 text-6xl md:text-9xl font-bold tracking-tight">
            {name.map((letter, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <div className="mt-8 max-w-lg">
            <p className="text-lg opacity-80">Google Certified Digital Marketing Professional · AI Content Creator · Growth Marketer · Creative Developer</p>
            <div className="mt-6 flex gap-4">
              <a href="#projects" className="px-5 py-3 border rounded-md border-[rgba(255,255,255,0.06)]" data-cursor="hover">View My Work</a>
              <a href="/resume.pdf" className="px-5 py-3 download-btn rounded-md" data-cursor="hover">Download Resume</a>
            </div>
          </div>
        </div>

        <div className="portrait-mask">
          <img src={portrait} alt="Portrait placeholder" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
