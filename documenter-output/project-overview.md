# Project Overview — Personal Website Frontend

## Purpose

Static personal portfolio site for Damanveer (Dom) Singh — senior software engineer. Presents career stories, project case studies, skills, about copy, resume PDF, and contact links.

## Stack summary

- **Vue 3** + **Vite 6** + **TypeScript**
- **Vue Router 4** for client-side routes
- Plain **CSS** with custom-property design tokens (no UI framework)
- **GitHub Pages** deployment via GitHub Actions

## Repository layout

```
personal-website-frontend/
├── src/
│   ├── main.ts              # App bootstrap, router, global styles
│   ├── App.vue              # Root → PageShell layout
│   ├── router/index.ts      # Route table with lazy pages
│   ├── layouts/PageShell.vue
│   ├── pages/               # Home, About, Contact, Resume, ProjectDetail
│   ├── components/
│   │   ├── common/          # SectionContainer, StatCard, etc.
│   │   └── home/            # Homepage section SFCs
│   ├── content/             # Typed content modules (home, projects, about)
│   ├── types/content.ts     # Shared TypeScript interfaces
│   └── styles/              # tokens → base → layout → sections
├── public/                  # Resume PDF, static assets
├── .github/workflows/       # deploy-pages.yml
├── CNAME                    # therealdom.com
├── vite.config.ts
└── package.json
```

## Configuration

| Item | Value |
|------|-------|
| Custom domain | `therealdom.com` (CNAME) |
| Deploy branch | `master` |
| Build command | `vue-tsc --noEmit && vite build` |
| Output | `dist/` |

## Content editing

Copy and structured data live in `src/content/` — not embedded in Vue templates. See README.md in repo root for file map.
