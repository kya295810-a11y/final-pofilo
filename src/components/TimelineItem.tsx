import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { ExperienceItem } from '../data/experience';

type Props = { item: ExperienceItem; index: number };

export default function TimelineItem({ item, index }: Props) {
  const [ref, inView] = useInView({ threshold: 0.16, triggerOnce: true });
  const side = index % 2 === 0 ? 'left' : 'right';

  return (
    <div ref={ref} className="timeline-item relative md:py-6">
      <div className={`md:w-1/2 ${side === 'left' ? 'md:pr-8 md:ml-0 md:order-1' : 'md:pl-8 md:ml-auto md:order-2'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.06 }}
          className="timeline-card"
        >
          <div className="text-sm text-secondary opacity-80">{item.period} · {item.location}</div>
          <h4 className="text-xl font-semibold mt-2">{item.role}</h4>
          <div className="text-sm opacity-80 mt-1">{item.company}</div>
          <ul className="mt-3 list-disc pl-5 text-secondary space-y-1">
            {item.bullets.map((b, i) => (
              <li key={i} className="text-sm">{b}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="timeline-marker absolute left-1/2 transform -translate-x-1/2 top-6 md:top-10">
        <div className="marker-dot" aria-hidden />
      </div>
    </div>
  );
}
