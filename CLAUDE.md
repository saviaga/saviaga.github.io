# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic website for Claudia Flores-Saviaga, PhD. Built with Gatsby 5, React 18, TypeScript, and Tailwind CSS. Deployed to GitHub Pages at saviaga.com.

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run develop` (http://localhost:8000) |
| Dev (mobile) | `npm run develop-mobile` |
| Build | `npm run build` (runs `fetch-stars` prebuild) |
| Serve build | `npm run serve` (http://localhost:9000) |
| Deploy | `npm run deploy` (builds then pushes `public/` to `gh-pages` branch) |
| Lint | `npm run lint` |
| Lint fix | `npm run lint -- --fix` |
| Type check | `npm run type` |
| Clean cache | `npm run clean` |
| GraphQL IDE | http://localhost:8000/___graphql (during dev) |

There is no test suite in this project.

## Architecture

**Gatsby static site generator** — pages are either file-based (`src/pages/`) or dynamically created in `gatsby-node.ts` from MDX posts and project data.

### Content & Data Model

- **Blog posts**: MDX files in `src/posts/`. Frontmatter schema (defined in `gatsby-node.ts`): `title` (required), `summary`, `date`, `cover` (all optional). Slugs auto-generated from filenames, prefixed with `/blog/`. Rendered via `src/templates/Post.tsx` using Gatsby 5's `?__contentFilePath=` pattern.
- **Publications & Projects**: Defined as typed arrays in `src/data/publications.ts` and `src/data/projects.ts`. Projects get dynamic pages at `/projects/{id}` via `src/templates/Project.tsx`.
- **Profile data**: `src/data/profile.ts`, `src/data/socialLinks.ts`, `src/data/siteMetadata.ts`.
- **Site constants**: `src/constants/siteMeta.ts` holds the site URL and default title/description.

### Prebuild: GitHub Stars

`npm run build` triggers a prebuild script (`src/scripts/fetchGitHubStars.ts`) that fetches star counts from the GitHub API for projects with `gitHubRepo` configured. Results are saved to `src/data/__generated__/projectStars.json`. Uses unauthenticated GitHub API (60 req/hour rate limit) — the script gracefully skips if rate-limited.

### Navigation

`src/constants/routes.ts` defines all route paths. `TOP_NAV` controls which routes appear in the navigation bar — currently only About, Publications, and Contact are active (Projects and Blog routes exist but are commented out in `TOP_NAV`).

### Component Organization

- `src/components/shared/` — Reusable UI primitives (Card, Button, Alert, SEO, Tags, etc.)
- `src/components/elements/` — Feature-specific elements (each in its own subdirectory)
- `src/components/screens/` — Full-page screen compositions (each in its own subdirectory)
- `src/components/layouts/RootLayout.tsx` — Root wrapper applied to all pages via `gatsby-browser.tsx`

### Key Config Files

- `gatsby-config.ts` — Plugins (MDX, images, PostCSS/Tailwind, Google Analytics, RSS feed, Prism.js syntax highlighting with okaidia theme)
- `gatsby-node.ts` — MDX frontmatter schema, slug creation, dynamic page generation for posts and projects
- `gatsby-browser.tsx` — Global style imports (`src/styles/global.css`, Prism.js theme) and RootLayout wrapping
- `tailwind.config.js` — Roboto font, custom `shadow-card`, typography plugin with red-600 link colors

### Type System

TypeScript types in `src/types/` define the data shapes (Publication, Project, Profile, SocialLink, Tag, GitHubStars, etc.). All data files are type-safe.

## Conventions

- Node 18.15.0+ required (see `.nvmrc`)
- 2-space indentation, LF line endings (see `.editorconfig`)
- ESLint with Airbnb config + TypeScript ESLint
- Tailwind for styling; custom styles in `src/styles/global.css` and `src/styles/custom.css`
- Tailwind purge is active — avoid constructing class names dynamically (e.g., `bg-${color}-500`), use full class strings instead
- Run `npm run clean` after modifying Gatsby config files or GraphQL schema to clear stale cache
