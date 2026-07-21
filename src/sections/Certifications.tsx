import React from 'react';
import CertificateCard from '../components/CertificateCard';
import { certifications } from '../data/certifications';

export default function Certifications(): JSX.Element {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8">Certifications</h3>

        <div className="cert-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((c) => (
            <CertificateCard key={c.id} cert={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
