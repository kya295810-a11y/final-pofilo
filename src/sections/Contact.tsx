import React, { useState } from 'react';

export default function Contact(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Work inquiry from ${name || 'Website'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@kyawsan.dev?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-6xl md:text-8xl font-black leading-tight">Let's Build Something Great.</h2>
          <p className="mt-6 text-secondary max-w-lg">I'm available for freelance, consulting, and full-time roles. Tell me about your project and let's explore how we can work together.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-transparent p-6 rounded-lg border border-[rgba(255,255,255,0.04)]">
          <div>
            <label className="text-sm text-secondary">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-2 p-3 rounded-md bg-[#0b0b0b] border border-[rgba(255,255,255,0.03)]" required />
          </div>

          <div>
            <label className="text-sm text-secondary">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-2 p-3 rounded-md bg-[#0b0b0b] border border-[rgba(255,255,255,0.03)]" required />
          </div>

          <div>
            <label className="text-sm text-secondary">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="w-full mt-2 p-3 rounded-md bg-[#0b0b0b] border border-[rgba(255,255,255,0.03)]" required />
          </div>

          <div>
            <button type="submit" className="px-6 py-3 bg-accent text-black rounded-md">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
