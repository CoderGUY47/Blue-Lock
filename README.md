<div align="center">

# 🔵 Blue Lock

### Premium BPL Fantasy Cricket Team Builder Platform

*Bridging cinematic sports aesthetics with conversion-optimised fantasy cricket management and player analytics.*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-blue--lock--bpl.vercel.app-3b82f6?style=for-the-badge)](https://blue-lock-bpl.vercel.app/)
&nbsp;
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
&nbsp;
[![Vite 8](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
&nbsp;
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [🚀 Live Link](#-live-link)
- [❌ The Problem & ✅ The Solution](#-the-problem---the-solution)
- [💡 Business Value & SEO](#-business-value--seo)
- [🚀 Key Features](#-key-features)
- [📦 Tech Stack & Architecture](#-tech-stack--architecture)
- [🛠️ Installation & Setup](#️-installation--setup)
- [🚢 Production Deployment](#-production-deployment)
- [🤝 Social & Contributing](#-social--contributing)

---

## ✨ Overview

**Blue Lock** is a high-performance BPL Fantasy Cricket Team Builder — a premium sports management platform where fans craft their dream cricket teams from real BPL player data. Built with **React 19**, **Vite 8**, and **Tailwind CSS v4**, the platform delivers a cinematic, data-rich sports experience complete with player statistics, budget management, real-time team composition, and paginated player catalogs.

Inspired by the *Blue Lock* concept of elite player selection, the platform puts strategic team-building first — users manage a virtual coin budget to recruit and release players, track their selected squad in a live panel, and visualize team balance through **Recharts analytics**. With **React Paginate** handling large player rosters and **DaisyUI** modals for detailed player cards, Blue Lock is the definitive fantasy cricket companion.

---

## ❌ The Problem & ✅ The Solution

> **Fantasy cricket apps are cluttered, slow, and lack strategic depth.**

Most BPL fantasy tools overload users with noise, offer no budget tension, and provide no analytics to guide decision-making.

| ❌ The Problem | ✅ Blue Lock's Solution |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Endless unorganized player lists with no pagination | **React Paginate** — clean, browsable player pages with smooth navigation |
| No strategic constraint driving selection decisions | **Virtual coin budget system** — every pick costs coins, forcing smart choices |
| No feedback when selecting or releasing players | **React Toastify** alerts for every add/remove action with contextual messages |
| Raw stats tables with no visual representation | **Recharts analytics panel** visualizing team balance and player performance |
| No detailed player preview before committing a pick | **DaisyUI modals** — full player card with stats on demand before selecting |
| Broken mobile experiences ruining gameplay on small screens | Fully responsive layout — **Navbar and grid resize seamlessly** for all devices |

---

## 🚀 Live Link

**→ [View Blue Lock Live Demo](https://blue-lock-bpl.vercel.app/)**

<br/>

<table>
  <tr>
    <td width="50%">
      <img src="https://images.unsplash.com/photo-1540747913346-19212a4c89a3?q=80&w=880&h=495&auto=format&fit=crop" alt="Blue Lock Player Selection" width="100%" style="border-radius:8px;aspect-ratio:16/9;object-fit:cover" />
    </td>
    <td width="50%">
      <img src="https://images.unsplash.com/photo-1593766788306-28561086694e?q=80&w=880&h=495&auto=format&fit=crop" alt="Blue Lock Team Analytics" width="100%" style="border-radius:8px;aspect-ratio:16/9;object-fit:cover" />
    </td>
  </tr>
  <tr>
    <td align="center"><sub>🏏 Premium BPL Player Discovery & Selection</sub></td>
    <td align="center"><sub>📊 Team Balance & Performance Analytics</sub></td>
  </tr>
</table>

---

## 💡 Business Value & SEO

| Feature | Impact |
| --------------------------------- | ------------------------------------------------------------------------------- |
| **Budget Constraint System** | Creates strategic tension that drives repeat engagement and session depth |
| **Recharts Analytics** | Visual team stats turn passive browsing into active decision-making |
| **Paginated Player Catalog** | Clean UX prevents scroll fatigue for large BPL rosters |
| **Modal Player Preview** | Informed picking reduces buyer's remorse and improves team satisfaction |

---

## 🚀 Key Features

- **🏏 Full BPL Player Catalog** — Browse all available BPL players with rich metadata: name, role, country, price, and performance stats.
- **💰 Coin Budget Management** — Start with a virtual coin balance; each player pick deducts their price — strategic selection is mandatory.
- **📄 Paginated Player List** — React Paginate handles large rosters with smooth, accessible pagination controls.
- **🔍 Player Detail Modal** — DaisyUI-powered modal shows full player card before committing to a selection.
- **📊 Team Analytics Panel** — Recharts visualizations show selected squad composition and balance metrics.
- **🔔 Real-Time Toast Notifications** — Instant feedback for add, remove, and budget-exceeded events via React Toastify.
- **📱 Mobile-Responsive Layout** — Navbar and all grids are fully responsive across mobile, tablet, and desktop.

---

## 📦 Tech Stack & Architecture

### Core Production Dependencies

| Layer | Technology |
| -------------------------- | ----------------------------------------------------- |
| **Framework** | `react@^19.2.4` & `react-dom@^19.2.4` |
| **Build Tool** | `vite@^8.0.1` with `@vitejs/plugin-react@^6.0.1` |
| **Pagination** | `react-paginate@^8.3.0` |
| **Analytics** | `recharts@^3.8.1` |
| **Notifications** | `react-toastify@^11.0.5` |
| **Icons** | `lucide-react@^1.3.0` |

### Styling & UI Layers

| Layer | Technology |
| --------------------- | --------------------------------------------------------- |
| **Foundation** | `tailwindcss@^4.2.2` with `@tailwindcss/vite@^4.2.2` |
| **Component Library** | `daisyui@^5.5.19` (Modal, Badge, Button) |

---

## 🛠️ Installation & Setup

1. **Clone & Install**

   ```bash
   git clone https://github.com/CoderGUY47/Blue-Lock.git
   cd Blue-Lock
   npm install
   ```

2. **Develop Locally**

   ```bash
   npm run dev
   ```

   Access at `http://localhost:5173`.

3. **Production Build**

   ```bash
   npm run build
   ```

---

## 🚢 Production Deployment

Blue Lock is pre-configured for **Vercel** deployment.

- **Build Command:** `npm run build` (runs `vite build`)
- **Output Directory:** `dist`
- **Framework Preset:** Vite (auto-detected by Vercel)

---

## 🤝 Social & Contributing

<div align="center">

Produced with precision by **[CoderGUY47](https://github.com/CoderGUY47)**.

*Join us in engineering the ultimate fantasy cricket experience!*

[![GitHub](https://img.shields.io/badge/GitHub-CoderGUY47-181717?style=for-the-badge&logo=github)](https://github.com/CoderGUY47)

</div>
