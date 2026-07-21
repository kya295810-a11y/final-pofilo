import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useActiveSection from '../hooks/useActiveSection';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav(): JSX.Element {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        <a href="#hero" className="logo flex items-center gap-3" aria-label="Home">
          <div className="logo-mark w-9 h-9 rounded-md flex items-center justify-center bg-gradient-to-br from-[#C3E41D] to-[#56CCF2] text-black font-semibold">KS</div>
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link text-sm ${active === item.id ? 'nav-active' : 'opacity-80'}`}
            >
              {item.label}
            </a>
          ))}
          <a href="/resume.pdf" className="ml-4 px-4 py-2 rounded-md bg-accent text-black text-sm">Resume</a>
        </nav>

        <div className="md:hidden">
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="p-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mobile-menu fixed inset-0 z-50 bg-black/70">
            <div className="absolute right-6 top-6">
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="h-full flex items-center justify-center">
              <div className="bg-background/90 backdrop-blur-sm rounded-xl p-8 mx-6 w-[min(90%,420px)]">
                <ul className="flex flex-col gap-4 text-lg">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} onClick={() => setOpen(false)} className={`block py-2 ${active === item.id ? 'font-semibold' : ''}`}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <a href="/resume.pdf" className="inline-block px-6 py-3 bg-accent text-black rounded-md">Resume</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
