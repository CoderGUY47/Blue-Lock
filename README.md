<div align="center">

# 🔵 Blue Lock — BPL Fantasy Cricket

### Premium Fantasy Cricket Team Builder & Budget Management Platform

*A high-fidelity interactive fantasy cricket team selection experience — build your dream BPL squad, manage your coin budget, and track your picks with real-time stats.*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-blue--lock--bpl.vercel.app-3b82f6?style=for-the-badge)](https://blue-lock-bpl.vercel.app/)
&nbsp;
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
&nbsp;
[![Vite 8](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
&nbsp;
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4.2-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [❌ The Problem & ✅ The Solution](#-the-problem---the-solution)
- [🚀 Live Link](#-live-link)
- [💡 Business Value & Game Design](#-business-value--game-design)
- [🚀 Key Features](#-key-features)
- [📦 Tech Stack & Architecture](#-tech-stack--architecture)
- [📂 Project Structure](#-project-structure)
- [🛠️ Installation & Setup](#️-installation--setup)
- [🚢 Production Deployment](#-production-deployment)
- [🤝 Social & Contributing](#-social--contributing)

---

## ✨ Overview

**Blue Lock** is an interactive BPL Fantasy Cricket Team Builder where fans craft their dream 11-player squads within a strict coin budget system. Built on **Vite 8** and **React 19** with **Tailwind CSS v4** and **DaisyUI v5**, the platform displays paginated player catalogs, enforces budget constraints with live balance tracking, and visualizes team composition through **Recharts** analytics panels.

Named after the elite Japanese football selection program concept, this app brings that same intensity to cricket fan engagement.

---

## ❌ The Problem & ✅ The Solution

> **Fantasy cricket fans need a fast, fun, and beautifully designed team selection experience.**

| ❌ The Problem | ✅ Blue Lock's Solution |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| No visual feedback when budget is exceeded | Live **coin balance counter** updating instantly on every player selection |
| Player lists with hundreds of entries are impossible to scan | **react-paginate** chunking player catalog into manageable page views |
| Flat player cards with no visual personality | Rich **DaisyUI player cards** with position badges and stat highlights |
| No analytics on selected team composition | **Recharts** pie and bar charts showing role distribution and budget allocation |
| Toast spam from repeated duplicate player warnings | Single **react-toastify** pop with duplicate guard check logic |

---

## 🚀 Live Link

→ [View Blue Lock Live Demo](https://blue-lock-bpl.vercel.app/)

<br/>

<table>
  <tr>
    <td width="50%">
      <img src="https://images.unsplash.com/photo-1540747913346-19212a4b423d?q=80&w=880&h=495&auto=format&fit=crop" alt="Blue Lock Player Selection" width="100%" style="border-radius:8px;aspect-ratio:16/9;object-fit:cover" />
    </td>
    <td width="50%">
      <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=880&h=495&auto=format&fit=crop" alt="Blue Lock Analytics" width="100%" style="border-radius:8px;aspect-ratio:16/9;object-fit:cover" />
    </td>
  </tr>
  <tr>
    <td align="center"><sub>🏘 BPL Fantasy Player Selection Grid</sub></td>
    <td align="center"><sub>💰 Live Budget Tracker & Team Analytics</sub></td>
  </tr>
</table>

---

## 💡 Business Value & Game Design

| Feature | Impact |
| --------------------------------- | ------------------------------------------------------------------------------- |
| **Budget Constraint System** | Adds strategic depth — forces users to make trade-off decisions between stars |
| **Paginated Player Catalog** | Improves performance with large player datasets, keeping UI snappy |
| **Recharts Team Analytics** | Visual feedback transforms raw selection data into useful strategy insights |

---

## 🚀 Key Features

- **🏏 Player Selection Grid** — Browse paginated BPL player cards with position, price, and rating.
- **💰 Live Budget Tracker** — Real-time coin balance that prevents over-budget team selections.
- **📊 Team Analytics Dashboard** — Recharts charts showing selected team composition and budget split.
- **📄 Pagination System** — react-paginate navigating large player catalogs without lag.
- **🔔 Toast Alerts** — react-toastify notifications for duplicate selections and budget overflow.

---

## 📦 Tech Stack & Architecture

| Layer | Technology |
| -------------------------- | ----------------------------------------------------- |
| **Framework** | `react@^19.2.4` |
| **Build Tool** | `vite@^8.0.1` |
| **Styling** | `tailwindcss@^4.2.2` + `daisyui@^5.5.19` |
| **Charts** | `recharts@^3.8.1` |
| **Pagination** | `react-paginate@^8.3.0` |
| **Notifications** | `react-toastify@^11.0.5` |
| **Icons** | `lucide-react@^1.3.0` |

---

## 📂 Project Structure

```text
Blue-Lock/
├── src/
│   ├── components/     # PlayerCard, BudgetBar, TeamPanel, Charts
│   ├── data/           # BPL player JSON dataset
│   └── App.jsx
├── index.html
└── vite.config.js
```

---

## 🛠️ Installation & Setup

1. **Clone & Install**

   ```bash
   git clone https://github.com/CoderGUY47/Blue-Lock.git
   cd Blue-Lock
   npm install
   ```

2. **Run Locally**

   ```bash
   npm run dev
   ```

---

## 🚢 Production Deployment

- **Hosting:** Deployed on **Vercel** via automatic Git integration.
- **Build Command:** `npm run build`
- **Output Directory:** `dist/`

---

## 🤝 Social & Contributing

<div align="center">

Produced with precision by **[CoderGUY47](https://github.com/CoderGUY47)**.

[![GitHub](https://img.shields.io/badge/GitHub-CoderGUY47-181717?style=for-the-badge&logo=github)](https://github.com/CoderGUY47)

</div>
