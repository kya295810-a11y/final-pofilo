# KYAW SAN LIN — Premium Portfolio (scaffold)

This is a handcrafted React + TypeScript + Vite starter scaffold for a premium portfolio following the provided spec.

Quick start:

```bash
npm install
npm run dev
```

Files created by the scaffold include a cinematic loading screen, hero with parallax, About, Skills, Experience, Certifications, Projects, Contact, and Footer.

Development

```bash
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build locally
npm run preview
```

Notes

- The project uses `Lenis` for smooth scrolling, `Framer Motion` + `GSAP` for motion, and `@react-three/fiber` for future 3D scenes.
- Replace placeholder images in `src/assets/` and `public/` with your high-resolution assets.
- For contact form production, wire the form to your backend or a service like Formspree / Netlify Forms.

Deploy

1. Build: `npm run build`
2. Upload the `dist/` folder to your static host (Vercel, Netlify, AWS S3 + CloudFront).

For Vercel: connect the repo and set the build command to `npm run build` and the output directory to `dist`.

Accessibility & Performance

Run Lighthouse in Chrome DevTools and iterate on performance metrics. The project is scaffolded to reach high Lighthouse scores, but final content and images will affect the results.

If you want, I can continue polishing animations, responsiveness, and run Lighthouse audits.
