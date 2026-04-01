# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Architecture

**Tech Stack**: React 18 + TypeScript + Vite + shadcn-ui + Tailwind CSS + React Router

**Project Structure**:
- `src/pages/` – Route components (one per page)
- `src/components/` – Reusable UI components
  - `ui/` – shadcn-ui primitives (button, dialog, card, etc.)
  - `layout/` – Header, Footer
  - `home/`, `faculty/` – Feature-specific components
- `src/data/` – Static data files (departments, teachers, news, etc.)
- `src/lib/utils.ts` – `cn()` helper for className merging

**Routing**: React Router in `src/App.tsx` with all routes defined. Catch-all `*` route renders `NotFound`.

**Styling**: Tailwind CSS with CSS variables for theming (see `src/index.css`). shadcn-ui components are pre-configured with `slate` base color and CSS variables.

**Path Aliases**: `@/*` resolves to `./src/*` (configured in `tsconfig.json`)

**Key Patterns**:
- All pages export default as `Element` type for route usage
- UI components use `class-variance-authority` for variants
- Data stored as plain TypeScript arrays in `src/data/`
