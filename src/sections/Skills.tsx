import React from 'react';
import SkillCapsule from '../components/SkillCapsule';
import { skills } from '../data/skills';

export default function Skills(): JSX.Element {

  const placements = [
    ['12%', '20%', '14'],
    ['28%', '10%', '30'],
    ['48%', '18%', '18'],
    ['68%', '12%', '24'],
    ['82%', '26%', '10'],
    ['20%', '48%', '20'],
    ['36%', '62%', '28'],
    ['52%', '56%', '12'],
    ['70%', '50%', '22'],
    ['86%', '60%', '16'],
    ['14%', '78%', '26'],
    ['44%', '78%', '18'],
    ['72%', '78%', '20'],
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8">Skills</h3>
        <div className="relative h-[420px] md:h-[560px] bg-transparent rounded-lg overflow-visible">
          {skills.map((s, i) => (
            <SkillCapsule key={s} label={s} left={placements[i][0]} top={placements[i][1]} depth={Number(placements[i][2])} />
          ))}
        </div>
      </div>
    </section>
  );
}
