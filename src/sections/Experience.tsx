import React from 'react';
import TimelineItem from '../components/TimelineItem';
import { experience } from '../data/experience';

export default function Experience(): JSX.Element {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8">Experience</h3>

        <div className="timeline relative">
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border" />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
