# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
.
├─ public/                      # Archivos estáticos (favicons, og-images)
├─ src/
│  ├─ pages/                    # Rutas (SSG/SSR). Ej: index.astro, blog/[slug].astro
│  ├─ layouts/                  # Plantillas: BaseLayout.astro, BlogLayout.astro
│  ├─ components/
│  │  ├─ ui/                    # Átomos (Botón, Input, Card)
│  │  ├─ sections/              # Secciones reutilizables (Hero, Features)
│  │  └─ widgets/               # Islands interactivas (carrito, buscador)
│  ├─ content/                  # Content Collections
│  │  ├─ config.ts              # Definición de colecciones (zod)
│  │  ├─ blog/                  # MD/MDX del blog
│  │  └─ pages/                 # Páginas de marketing en MDX si aplica
│  ├─ lib/
│  │  ├─ env.ts                 # Validación de variables de entorno (zod)
│  │  ├─ seo.ts                 # Helpers SEO (metadatos, OG, JSON-LD)
│  │  ├─ utils/                 # Utilidades puras
│  │  └─ services/              # Acceso a APIs/DB (fetchers, SDKs)
│  ├─ server/
│  │  ├─ api/                   # Endpoints de Astro (/api/*.ts)
│  │  └─ middleware.ts          # Middlewares (headers, seguridad)
│  ├─ styles/
│  │  ├─ globals.css            # Tailwind base + tokens
│  │  └─ prose.css              # Tipografía para MDX
│  ├─ assets/                   # Imágenes procesadas por Astro <Image />
│  └─ composables/              # Composables de Vue (estado local por island)
├─ tests/                       # Vitest + Playwright (e2e)
├─ scripts/                     # Scripts de build/deploy/ci
├─ .env.example                 # Plantilla de variables
├─ astro.config.mjs
├─ tsconfig.json
├─ tailwind.config.ts
└─ eslint.config.js

```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
