# Portfolio

A dark, editorial-style portfolio built with Vite + React. Fully responsive
down to mobile.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
```

The output goes to `dist/`, which you can deploy to Vercel, Netlify, GitHub
Pages, or any static host.

## Making it yours

- **Name, bio, role, links** — edit `src/components/Hero.jsx` and
  `src/components/Contact.jsx`.
- **Projects** — edit `src/data/projects.js`. Each project needs a title,
  role, description, tags, a year, an image URL, and a link. Swap the
  Unsplash placeholder URLs for your own images (drop files in `public/`
  and reference them as `/your-image.jpg`, or keep using hosted URLs).
- **About section / skills** — edit `src/components/About.jsx`.
- **Colors / fonts** — the whole palette and type scale lives in
  `src/index.css` as CSS variables at the top of the file (`--bg`,
  `--accent`, `--serif`, etc.), so you can retheme everything from one
  place.
- **Favicon** — replace `public/favicon.svg`.

## Notes on the design

- Fonts are Fraunces (serif display), Inter (body), and IBM Plex Mono
  (labels/tags), loaded from Google Fonts in `index.html`.
- The project list has a signature interaction: on desktop, hovering a
  row shows a floating image preview that follows your cursor. On mobile
  and touch devices it gracefully falls back to inline thumbnails.
- Respects `prefers-reduced-motion`.
