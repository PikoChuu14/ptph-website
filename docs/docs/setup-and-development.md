# Setup and Development Guide

## Prerequisites

Install:

- Node.js
- npm
- Git
- Visual Studio Code or another code editor

Check installation:

```bash
node -v
npm -v
git --version
```

---

## Clone Repository

```bash
git clone <repository-url>
cd ptph-website
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Build Website

```bash
npm run build
```

This creates the `dist/` folder.

Files inside `public/` are copied into `dist/`.

Example:

```text
public/content/join-team.json
```

becomes:

```text
dist/content/join-team.json
```

---

## Preview Production Build

```bash
npm run preview
```

---

## Important Public File Rules

Because this project uses Vite, files inside `public/` are served from the website root.

Correct:

```text
/images/registration-image.jpg
/content/join-team.json
/uploads/poster.png
```

Wrong:

```text
/public/images/registration-image.jpg
public/content/join-team.json
```

---

## CMS Content Files

Editable content is stored in:

```text
public/content/
```

| File | Purpose |
|---|---|
| `site-info.json` | Website name, logo, Datang.my link |
| `forms.json` | Google Form links and WhatsApp link |
| `hero.json` | Hero section text |
| `service-posts.json` | Carousel posters |
| `why-ptph.json` | Why PTPH section |
| `programmes.json` | Programme cards |
| `registration.json` | Student registration section |
| `join-team.json` | Join Our Team section |
| `footer.json` | Address, phone, email, Google Map |

---

## Fallback Content

Fallback content is stored in:

```text
src/data/siteContent.js
```

This is used if the website fails to load content from `public/content/`.

---

## Suggested Branch Workflow

```bash
git switch -c version-x-feature-name
```

After testing:

```bash
git add .
git commit -m "Describe update"
git push -u origin version-x-feature-name
```

Merge into main after testing:

```bash
git switch main
git pull origin main
git merge version-x-feature-name
git push origin main
```
