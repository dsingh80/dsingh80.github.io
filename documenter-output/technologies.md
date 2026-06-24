# Technologies — Personal Website Frontend

## Vue 3

**Role in project:** Renders the SPA with Composition API `script setup` SFCs; `HomePage` composes section components fed by typed content props.

**Typical purpose:** Progressive JavaScript framework for reactive UIs.

**Advantages here:** Lightweight runtime for a content-heavy static site; no Pinia/Vuex needed because state is route-local and content is imported.

**Evidence:** `package.json`, `src/main.ts`, section components under `src/components/home/`

---

## Vite

**Role in project:** Dev server, production bundler, and `@` → `src` path alias.

**Typical purpose:** Fast ESM dev server and Rollup-based production builds.

**Advantages here:** Fast iteration on layout and copy; `vue-tsc` runs before `vite build` in the npm script.

**Evidence:** `vite.config.ts`, `package.json` scripts

---

## TypeScript

**Role in project:** Defines `HomePageContent`, `ProjectEntry`, and related interfaces in `src/types/content.ts`.

**Typical purpose:** Compile-time schema validation for JS apps.

**Advantages here:** Content modules (`home.ts`, `projects.ts`, `about.ts`) share one contract; prop mismatches fail at build.

**Evidence:** `tsconfig.json`, `src/types/content.ts`

---

## Vue Router

**Role in project:** Routes for `/`, `/projects/:slug`, `/about`, `/resume`, `/contact` with lazy-loaded pages and `scrollBehavior` returning top.

**Typical purpose:** Client-side routing for Vue SPAs.

**Advantages here:** Dynamic `import()` per page; `createWebHistory` for clean URLs on static hosting.

**Evidence:** `src/router/index.ts`

---

## CSS custom properties

**Role in project:** Dark-theme tokens (colors, fonts, spacing) in `tokens.css`, imported via layered `index.css`.

**Typical purpose:** Design tokens without preprocessors.

**Advantages here:** No Tailwind/Sass; small CSS surface area with Fraunces/Inter Tight/JetBrains Mono stack.

**Evidence:** `src/styles/tokens.css`, `src/styles/index.css`

---

## GitHub Actions

**Role in project:** On `master` push: `npm ci` → `npm run build` → upload `dist/` → deploy Pages.

**Typical purpose:** Repo-integrated CI/CD.

**Advantages here:** Free static hosting with custom domain; no separate deploy target.

**Evidence:** `.github/workflows/deploy-pages.yml`, `CNAME`
