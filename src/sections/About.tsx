import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portrait from '../assets/portrait.svg';

const paragraphs = [
  "I blend product thinking with growth marketing to build digital experiences that convert.",
  "My work sits at the intersection of design, data, and delightful micro-interactions.",
  "I specialize in building high-performance, accessible, and emotionally resonant interfaces using React, TypeScript and motion design tools.",
  "I care about storytelling, restraint, and craft. Every animation and layout choice is deliberate.",
];

export default function About(): JSX.Element {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true });

  return (
    <section id="about" className="about-section py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <aside className="md:col-span-1">
          <div className="sticky top-24">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="portrait-mask about-portrait"
            >
              <img src={portrait} alt="KYAW SAN LIN portrait" className="w-full h-full object-cover" />
            </motion.div>
            <div className="mt-6 text-sm text-secondary opacity-80">KYAW SAN LIN — Creative Developer & Growth Marketer</div>
          </div>
        </aside>

        <div className="md:col-span-1" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About
          </motion.h2>

          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.6 }}
              className="mb-6 leading-relaxed text-lg text-secondary"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
