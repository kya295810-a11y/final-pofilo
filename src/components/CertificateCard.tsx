import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import type { Certificate } from '../data/certifications';

type Props = { cert: Certificate };

export default function CertificateCard({ cert }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
    const rotateX = dy * -6; // subtle tilt
    const rotateY = dx * 8;
    const translateZ = 18;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = '';
  };

  return (
    <motion.div
      ref={ref}
      className="cert-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <div className="cert-thumb">
        {cert.image ? (
          <img src={cert.image} alt={`${cert.title} thumbnail`} className="w-full h-full object-cover" />
        ) : (
          <div className="thumb-placeholder" />
        )}
      </div>

      <div className="cert-meta p-4">
        <div className="cert-title font-semibold text-lg">{cert.title}</div>
        <div className="cert-issuer text-secondary text-sm">{cert.issuer} · <span className="cert-date">{cert.date}</span></div>
        <div className="mt-4">
          <a href={cert.file || '/resume.pdf'} download className="download-btn inline-block px-4 py-2 rounded-md">
            Download
          </a>
        </div>
      </div>
    </motion.div>
  );
}
