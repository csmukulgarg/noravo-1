# Noravo

A storefront for premium leather shoes and luxury towels, built with the Next.js App Router.

Two categories, one promise: full-grain leather footwear and high-GSM cotton towels, presented in a single catalogue with a 3D hero, filterable product grid, and per-product detail pages that link out to Amazon for checkout.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15.3 (App Router, Turbopack dev) |
| UI | React 19, Tailwind CSS v4, shadcn/ui on Radix primitives |
| 3D / motion | Three.js via `@react-three/fiber` + `drei`, Framer Motion |
| Data | Drizzle ORM against libSQL (`@libsql/client`) |
| Auth | better-auth |
| Payments | Stripe |

## Getting started

```bash
bun install
bun dev
```

The dev server runs on [http://localhost:3000](http://localhost:3000). `npm`, `yarn`, and `pnpm` all work too — the lockfile committed here is `bun.lock`.

## Scripts

| Command | What it does |
|---|---|
| `bun dev` | Dev server with Turbopack |
| `bun run build` | Production build |
| `bun start` | Serve the production build |
| `bun run lint` | ESLint via `next lint` |

## Project layout

```
src/
  app/            App Router entries — layout, home, /products, error boundaries
  components/     Navigation, Footer, Hero3D, ProductCard
    ui/           shadcn/ui primitives
  lib/
    products.ts   Product catalogue and the Product type
    utils.ts      cn() and shared helpers
  hooks/          use-mobile and friends
  visual-edits/   Visual editing instrumentation
```

## The catalogue

Products live in `src/lib/products.ts` as a typed array — there's no CMS behind it. Each entry carries pricing, imagery, colourways, and an `amazonLink` for fulfilment.

`productType` splits the catalogue in two, and `category` narrows it further:

- **Shoes** — Oxford, Derby, Brogue, Loafer, Monk Strap, Boot
- **Towels** — Bath, Beach, Hand, Face

Shoes carry `sizes`, towels carry `dimensions`. To add a product, append a `Product` to that array; the home page pulls its featured set from the first two of each type, and `/products` renders the full grid.
