# Architecture — Personal Website Frontend

## Runtime model

```
Browser
  └── index.html (Vite entry)
        └── main.ts
              ├── createApp(App)
              ├── app.use(router)
              └── import @/styles/index.css
        └── App.vue → PageShell.vue
              ├── Header nav (hash + mailto links)
              └── RouterView
                    ├── HomePage → section components ← homeContent
                    ├── ProjectDetailPage ← getProjectBySlug(slug)
                    ├── AboutPage ← aboutContent
                    ├── ResumePage (PDF embed)
                    └── ContactPage
```

## Build and deploy

1. Developer runs `npm run build` → `vue-tsc` then `vite build` → `dist/`
2. GitHub Actions on `master`: checkout → Node 20 → `npm ci` → build → `upload-pages-artifact`
3. `deploy-pages` job publishes to GitHub Pages
4. `CNAME` points custom domain `therealdom.com`

## Content flow

| Layer | Responsibility |
|-------|----------------|
| `src/types/content.ts` | Interfaces for hero, stories, timeline, projects |
| `src/content/*.ts` | Authoritative copy and structured data |
| `src/pages/*.vue` | Route-level composition |
| `src/components/home/*.vue` | Presentational sections |
| `src/styles/*.css` | Global tokens and section styling |

## Project detail

`/projects/:slug` loads `ProjectDetailPage`, looks up `projects` array via `getProjectBySlug`, and optionally renders `fullStory` as paragraph blocks split on `\n\n`.

## Static hosting notes

- No backend API; all data is bundled at build time
- Resume PDF in `public/` copied to dist root
- Optional portable Node under `.tools/` for Windows dev environments (gitignored)
