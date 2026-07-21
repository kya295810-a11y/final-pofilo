import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="py-8 border-t border-[rgba(255,255,255,0.04)] mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm opacity-80">© {new Date().getFullYear()} KYAW SAN LIN — All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="mailto:hello@kyawsan.dev" className="text-sm opacity-80">hello@kyawsan.dev</a>
          <a href="https://github.com/" className="text-sm opacity-80">GitHub</a>
          <a href="https://www.linkedin.com/" className="text-sm opacity-80">LinkedIn</a>
        </div>
        <div className="text-sm opacity-70">Built with React + TypeScript</div>
      </div>
    </footer>
  );
}
