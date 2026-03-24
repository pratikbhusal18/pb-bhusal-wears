# PB. Bhusal Wears 🎨👕

A casual, colorful, and fun clothing company website built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. Full-stack ready architecture with component-based design, product data layer, and automated deployment.

![License](https://img.shields.io/badge/license-MIT-coral)
![Deploy](https://img.shields.io/github/actions/workflow/status/pratikbhusal18/pb-bhusal-wears/deploy.yml?label=deploy)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4)

🌐 **Live Site:** [pratikbhusal18.github.io/pb-bhusal-wears](https://pratikbhusal18.github.io/pb-bhusal-wears/)

---

## Screenshots

### 🏠 Home Page
Hero banner with gradient background, featured products, customer testimonials, and newsletter signup.

![Home Page](public/screenshots/home.png)

### 🛍️ Shop Page
Full product catalog with interactive category filters (T-Shirts, Hoodies, Bottoms, Accessories).

![Shop Page](public/screenshots/shop.png)

### 📖 About Page
Brand story, company timeline, core values, and team section.

![About Page](public/screenshots/about.png)

### 💬 Contact Page
Contact form with validation, business details, and interactive FAQ accordion.

![Contact Page](public/screenshots/contact.png)

### 📱 Mobile View
Fully responsive design with hamburger navigation and stacked layouts.

<p align="center">
  <img src="public/screenshots/mobile.png" alt="Mobile View" width="360">
</p>

---

## Overview

PB - Bhusal Wears is an e-commerce storefront for a clothing brand that celebrates self-expression through casual, comfortable, and eco-friendly fashion. Built with a modern React architecture, it's designed to scale into a full-stack application with database, shopping cart, and payment integration.

### Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero banner, feature strip, trending products, testimonials, newsletter |
| **Shop** | `/shop` | Product catalog with real-time category filtering |
| **About** | `/about` | Brand story, timeline, values, team cards |
| **Contact** | `/contact` | Contact form, business info, FAQ accordion |

### Features

- 🎨 Casual & fun design with a playful color palette (coral, yellow, teal, sky blue)
- 📱 Fully responsive — mobile, tablet, and desktop
- ⚛️ React components with TypeScript for type safety
- 🛍️ Product data layer ready for database integration
- 🎯 Interactive category filtering on Shop page
- 📬 Newsletter and contact form with state management
- 🧭 App Router with sticky navbar and active page indicators
- 🚀 Static export for fast GitHub Pages deployment

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router and static export |
| **React 19** | Component-based UI |
| **TypeScript** | Type safety |
| **Tailwind CSS 4** | Utility-first styling |
| **GitHub Actions** | CI/CD pipeline |
| **GitHub Pages** | Hosting |

---

## Project Structure

```
pb-bhusal-wears/
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages CI/CD
├── public/
│   └── screenshots/            # README screenshots
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (Navbar + Footer)
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Tailwind + custom theme
│   │   ├── shop/page.tsx       # Shop page
│   │   ├── about/page.tsx      # About page
│   │   └── contact/page.tsx    # Contact page
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky nav with mobile menu
│   │   ├── Footer.tsx          # Site footer
│   │   ├── ProductCard.tsx     # Reusable product card
│   │   └── Newsletter.tsx      # Email signup form
│   └── data/
│       └── products.ts         # Product catalog data
├── next.config.ts              # Next.js config (static export)
├── package.json
└── README.md
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm
- [Git](https://git-scm.com/)

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/pratikbhusal18/pb-bhusal-wears.git
cd pb-bhusal-wears
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000/pb-bhusal-wears](http://localhost:3000/pb-bhusal-wears)

### 4. Build for production

```bash
npm run build
```

Static files are exported to the `out/` directory.

---

## Deployment

### Option A: GitHub Pages (Current Setup)

The site auto-deploys on every push to `master`. Here's how to set it up from scratch on a new repo:

**Step 1 — Create a GitHub repository**

```bash
gh repo create your-username/your-repo --public --source=. --push
```

**Step 2 — Enable GitHub Pages**

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment**, set Source to **GitHub Actions**

**Step 3 — Add the deployment workflow**

The workflow file at `.github/workflows/deploy.yml` handles everything automatically:
1. Installs Node.js 20 and project dependencies
2. Runs `npm run build` (Next.js static export to `out/`)
3. Uploads and deploys the `out/` folder to GitHub Pages

**Step 4 — Update `next.config.ts` for your repo**

```typescript
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/your-repo-name",  // ← change this to your repo name
  images: { unoptimized: true },
};
```

**Step 5 — Push and deploy**

```bash
git add -A
git commit -m "Deploy to GitHub Pages"
git push origin master
```

**Step 6 — Verify deployment**

1. Go to your repo → **Actions** tab → watch the workflow run
2. Once it shows ✅, your site is live at:
   ```
   https://your-username.github.io/your-repo-name/
   ```

> ℹ️ Every future push to `master` will automatically rebuild and redeploy the site within ~2 minutes.

---

### Option B: Vercel (Recommended for Full-Stack)

When you add API routes, database, or authentication, switch to Vercel for full Next.js support:

**Step 1 — Install Vercel CLI**

```bash
npm i -g vercel
```

**Step 2 — Remove static export config**

In `next.config.ts`, remove `output: "export"` and `basePath` to enable full server-side features.

**Step 3 — Deploy**

```bash
vercel
```

Follow the prompts. Vercel auto-detects Next.js and configures everything.

**Step 4 — Set up auto-deploy**

Link your GitHub repo in the [Vercel Dashboard](https://vercel.com/dashboard). Every push to `master` will auto-deploy.

---

### Option C: Manual / Self-Hosted

**Step 1 — Build the static site**

```bash
npm run build
```

**Step 2 — Serve the `out/` folder**

Upload the contents of the `out/` directory to any static hosting provider (Netlify, AWS S3, Cloudflare Pages, or your own web server).

```bash
# Quick local test
npx serve out
```

---

## Customization Guide

| What | Where |
|------|-------|
| Brand colors | `src/app/globals.css` → `@theme inline` block |
| Products | `src/data/products.ts` |
| Company info | `src/app/about/page.tsx` |
| Contact details | `src/app/contact/page.tsx` |
| Navigation links | `src/components/Navbar.tsx` |
| Footer links | `src/components/Footer.tsx` |

### Adding a new product

Add an entry to `src/data/products.ts`:

```typescript
{
  id: "13",
  name: "Your Product Name",
  category: "tshirts",
  categoryLabel: "T-Shirts",
  price: 29.99,
  emoji: "👕",
  badge: "NEW",
}
```

---

## Roadmap

- [ ] **Prisma + SQLite** — Move products to a database
- [ ] **Shopping cart** — React context with add/remove/quantity
- [ ] **Stripe checkout** — Real payment processing
- [ ] **User auth** — NextAuth.js with login & order history
- [ ] **Admin dashboard** — Manage products and orders
- [ ] **Product detail pages** — Individual product views
- [ ] **Search & filters** — Full-text search, price/size filtering
- [ ] **Dark mode** — Theme toggle
- [ ] **Real product images** — Replace emoji placeholders

---

## License

This project is open source under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by <strong>PB - Bhusal Wears</strong></p>
