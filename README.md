# tanishq.nayak — portfolio

Personal portfolio site. Built with Next.js 15 + Tailwind CSS, deployed on Vercel.

**Live:** [nayaktanishq.vercel.app](https://nayaktanishq.vercel.app)

---

## About

Final-year CS student at PDEU, Gandhinagar. Working at the boundary of hardware design and security — post-quantum cryptography on FPGA, ML-based intrusion detection, and more.

---

## Stack

- **Framework:** Next.js 15 (App Router, fully static)
- **Styling:** Tailwind CSS + CSS custom properties
- **Fonts:** IBM Plex Sans + IBM Plex Mono
- **Deployment:** Vercel

---

## Project structure

```
app/
├── data/
│   └── projects.ts        # Single source of truth for all project content
├── components/
│   ├── Nav.tsx
│   └── Footer.tsx
├── about/
│   └── page.tsx
├── projects/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adding or editing a project

All project content lives in `app/data/projects.ts`. Each entry follows this shape:

```ts
{
  slug: "project-slug",          // URL: /projects/project-slug
  label: "01",                   // Display number
  title: "Project Title",
  tagline: "One-line description shown in listings.",
  track: "hardware",             // "hardware" | "security" | "software"
  summary: "...",                // First paragraph on the project page
  detail: "...",                 // Second paragraph
  highlights: ["...", "..."],    // Bullet points in the highlights box
  stack: ["Verilog", "FPGA"],    // Tech tags
  repoUrl: "https://github.com/...",
  demoUrl: "https://...",        // Optional
}
```

No other files need to change when adding a project.

---

## Updating the live site

Push to `master` — Vercel redeploys automatically.

```bash
git add .
git commit -m "your message"
git push
```
