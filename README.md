# 🗂️ Gopal Krishna — Personal Portfolio

A clean, minimal personal portfolio website built with **React + Vite + Tailwind CSS**, inspired by modern developer portfolio designs. Features a cream/off-white light theme, full dark mode support, smooth animations, and a fully responsive layout.

**Live Site →** [gopal-portfolio.vercel.app]([https://gopal-portfolio.vercel.app](https://my-portfolio-tau-pearl-80.vercel.app/))

---

## Preview

| Light Mode | Dark Mode |
|---|---|
| ![Light Mode](public/preview-light.png) | ![Dark Mode](public/preview-dark.png) |

---

## Features

- **Theme Toggle** — Light / Dark / System default with one click
- **Sticky Navbar** — Blur backdrop on scroll with smooth section navigation
- **Hero Section** — Profile avatar, animated tagline, email copy button, Resume link
- **Tech Stack Marquee** — Auto-scrolling strip with 30+ technology icons
- **About Section** — Full-width bio card with 4 stat cards (CGPA, LeetCode, Projects, Year)
- **Education Timeline** — Vertical timeline with connecting line (B.Tech → 12th → 10th)
- **Projects Section** — All projects stacked vertically with GitHub + Live links on each card
- **Certifications** — Grid of certification cards (HackerRank, Infosys, NPTEL)
- **Achievements** — Icon-based achievement cards with no emojis
- **Experience Section** — Vertical timeline matching education layout
- **Contact Section** — Gmail compose link, LinkedIn button, social links row
- **Fully Responsive** — Works on mobile, tablet, and desktop
- **No Emoji UI** — All icons are proper Lucide / React Icons components

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v3 |
| Icons | Lucide React + React Icons |
| Fonts | DM Sans (Google Fonts) |
| Deployment | Vercel |

---

## Project Structure

```
gopal-portfolio/
├── public/
│   └── resume.pdf          # Your resume file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav + theme toggle
│   │   ├── Hero.jsx         # Hero card with CTA buttons
│   │   ├── TechStack.jsx    # Auto-scrolling marquee
│   │   ├── About.jsx        # Bio + stats grid
│   │   ├── Education.jsx    # Vertical timeline
│   │   ├── Experience.jsx   # Work experience timeline
│   │   ├── Projects.jsx     # Project cards with links
│   │   ├── Certifications.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx      # Gmail compose + social links
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js     # All personal data in one place
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # Theme variables + global styles
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/gopalkrishna06114/gopal-portfolio.git

# 2. Navigate into the folder
cd gopal-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Opens at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

Output goes into the `dist/` folder.

---

## Customization

All personal data is centralized in one file — **`src/data/portfolio.js`**

```js
// Update these to personalize your portfolio
export const personal = {
  name: "Your Name",
  role: "Your Role",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  leetcode: "https://leetcode.com/yourusername",
  location: "Your City, Country",
};
```

Other arrays you can edit in the same file:
- `techStack` — add/remove technologies
- `projects` — add your projects with GitHub + live links
- `education` — your academic background
- `experience` — internships and work history
- `certifications` — your certificates
- `achievements` — notable highlights

### Updating Your Resume

Drop your PDF inside the `public/` folder:
```
public/resume.pdf
```

Or replace the `href` in `Hero.jsx` with your **Google Drive link** for view tracking.

---

## Deployment on Vercel

```bash
# 1. Push to GitHub
git add .
git commit -m "deploy"
git push

# 2. Go to vercel.com
# → New Project → Import your GitHub repo
# → Framework: Vite (auto-detected)
# → Click Deploy
```

Every future `git push` auto-redeploys on Vercel.

---

## Color System

The entire theme runs on CSS variables defined in `src/index.css`:

```css
/* Light mode */
:root {
  --bg-primary:    #f0efe8;
  --bg-card:       #e8e7de;
  --text-primary:  #1a1a18;
  --text-secondary:#4a4a42;
  --text-muted:    #8a8a7e;
}

/* Dark mode */
.dark {
  --bg-primary:    #111110;
  --bg-card:       #1c1c1a;
  --text-primary:  #f0f0e8;
  --text-secondary:#b8b8b0;
  --text-muted:    #6a6a62;
}
```

To change the color palette, update these variables and every component updates automatically.

---

## License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use this as a template for your own portfolio — just update the data in `portfolio.js` and swap out the content.

---

## Connect

**Gopal Krishna**

- GitHub — [github.com/gopalkrishna06114](https://github.com/gopalkrishna06114)
- LinkedIn — [linkedin.com/in/gopalkrishna](https://linkedin.com/in/gopalkrishna)
- Email — gopalkrishna06114@gmail.com
- LeetCode — [leetcode.com/gopalkrishna06114](https://leetcode.com/gopalkrishna06114)
