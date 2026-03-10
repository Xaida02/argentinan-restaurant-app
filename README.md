# 🥩 Local Food — Resto Ferro

A responsive Argentine restaurant app built with React and Tailwind CSS. Browse the full menu, filter by category or price, and manage your cart — all with a polished UI and smooth interactions.

**Live site:** [argentinian-restaurant-xaida02.netlify.app](https://argentinian-restaurant-xaida02.netlify.app)

---

## ✨ Features

- 🔍 **Live search** — filters menu items in real time as you type, with smooth scroll to results
- 🗂️ **Category & price filters** — filter foods by type or price range with active filter indicators
- 🛒 **Cart system** — add, remove, and adjust quantities with persistent state across the app
- 🎞️ **Entrance animations** — staggered fade-in on hero load with CSS keyframe sequences
- 📜 **Scroll progress ring** — SVG ring button that tracks page scroll progress and returns to top
- 🔔 **Add to cart toast** — animated notification with undo support on every cart addition
- 📱 **Responsive** — mobile floating cart button, collapsible side menu, adaptive layouts
- ⏳ **Loading overlay** — branded entrance screen on page load

---

## 🛠️ Stack

| Tool            | Use                        |
| --------------- | -------------------------- |
| React 18        | UI components and routing  |
| Tailwind CSS 3  | Utility-first styling      |
| React Router v6 | Page navigation            |
| React Icons     | Icon library               |

---

## 🚀 Run locally

```bash
git clone https://github.com/Xaida02/argentinan-restaurant-app.git
cd argentinan-restaurant-app
npm install
npm start
```

---

## 📁 Structure

```
src/
├── components/     # Navbar, Hero, HeadLineCards, Food, Footer, ScrollTop, LoadingOverlay
├── pages/          # Home, Cart, Error
├── variables/      # Foods data, categories, prices, menu links, social links
└── context.jsx     # Global cart and food state
```

---

## 👤 Author

Made by **Tobías** — frontend developer.
[github.com/Xaida02](https://github.com/Xaida02)
