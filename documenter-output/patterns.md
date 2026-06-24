# Patterns — Personal Website Frontend

## Content-as-data modules

Homepage, projects, and about copy live in `src/content/*.ts` as typed exports. Pages import content objects and pass slices to section components.

**Role:** Separates editorial content from Vue templates.

**Tradeoff:** TypeScript contract prevents shape drift; single-author site avoids CMS complexity.

---

## Section composition

`HomePage.vue` wires `HeroSection`, `StackMarqueeSection`, `TimelineSection`, `SkillsGridSection`, `AboutSection`, and `ClosingCtaSection` — each receives a typed prop slice from `homeContent`.

**Role:** One component per homepage anchor (`#stories`, `#career`, `#stack`, `#about`).

**Tradeoff:** Independent section evolution vs. more files than a single-page template.

---

## Lazy route loading

All routes in `router/index.ts` use `() => import("@/pages/...")`.

**Role:** Code-split secondary pages (project detail, about, resume, contact).

**Tradeoff:** Smaller initial bundle for homepage-first traffic.

---

## Layout shell

`App.vue` → `PageShell.vue` owns header nav, mobile menu toggle, and `<RouterView />`.

**Role:** Shared chrome; pages focus on content sections.

**Tradeoff:** Nav behavior centralized; hash links on home (`/#stories`) coexist with routed pages.
