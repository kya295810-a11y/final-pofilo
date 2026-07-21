import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  label: string;
  left?: string;
  top?: string;
  depth?: number;
  size?: string;
};

export default function SkillCapsule({ label, left = '50%', top = '50%', depth = 28, size = '120px' }: Props) {
  return (
    <div
      className="skill-capsule"
      data-cursor="hover"
      style={{ left, top, ['--depth' as any]: `${depth}px`, width: size, height: size }}
    >
      <motion.div
        className="skill-inner"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4 + (depth / 18), repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.06 }}
      >
        <div className="skill-label">{label}</div>
      </motion.div>
    </div>
  );
}
