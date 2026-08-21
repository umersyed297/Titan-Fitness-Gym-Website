# Titan Fitness Gym

Marketing and lead-generation website for Titan Fitness Gym in Clifton, Karachi.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/titan-fitness-gym/src/App.tsx` — single-page website experience
- `artifacts/titan-fitness-gym/src/content.ts` — editable business, programs, trainers, pricing, gallery, and testimonials content
- `artifacts/titan-fitness-gym/src/index.css` — visual theme, typography, responsive layout, and motion support
- `artifacts/titan-fitness-gym/public/titan-hero.jpg` — hero image asset

## Architecture decisions

- The first release is intentionally frontend-only; WhatsApp is the conversion path instead of a custom booking or payment flow.
- Owner-editable details are centralized in `src/content.ts`, with unconfirmed pricing, coach bios, and establishment year marked as placeholders.
- The site uses restrained motion and a reduced-motion fallback so the cinematic treatment does not compromise readability or accessibility.

## Product

The site introduces Titan Fitness Gym, highlights its training programs and community proof, surfaces location and opening hours, and drives membership enquiries to WhatsApp.

## User preferences

The user provided a premium, kinetic fitness-brand direction and asked that unconfirmed details not be invented.

## Gotchas

Pricing, trainer names, certifications, and the established year are intentionally illustrative until the gym confirms them.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
