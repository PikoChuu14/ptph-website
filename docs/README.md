# Pusat Tuisyen Permata Hikmah Website

This repository contains the website prototype for **Pusat Tuisyen Permata Hikmah (PTPH)**.

The website is designed as an information and enquiry platform for two main audiences:

1. **Parents/guardians** who want to register their children for classes.
2. **Job seekers/internship applicants** who want to join PTPH.

The website is built using **React + Vite**, deployed using **Netlify**, and prepared for non-technical content updates using **Decap CMS**.

---

## Main Features

- Responsive landing page for PTPH
- Malay language website content
- Hero section with education-focused background
- Service/promotion carousel
- Poster lightbox preview
- Programme section
- Why PTPH section
- Student registration section linked to Google Form
- Join Our Team section linked to Google Form
- Google Sheets used for form response collection
- Google Maps embed in footer
- Direct navbar link to Datang.my attendance system
- Decap CMS admin panel for editing website content
- Editorial workflow for draft/review/publish content changes

---

## Technology Stack

| Area | Tool |
|---|---|
| Frontend | React |
| Build Tool | Vite |
| Styling | CSS |
| Version Control | Git + GitHub |
| Hosting | Netlify |
| CMS | Decap CMS |
| Registration Data | Google Forms |
| Response Storage | Google Sheets |
| Location | Google Maps Embed |

---

## Repository Structure

```text
ptph-website/
├── public/
│   ├── admin/
│   │   ├── index.html
│   │   └── config.yml
│   ├── content/
│   │   ├── footer.json
│   │   ├── forms.json
│   │   ├── hero.json
│   │   ├── join-team.json
│   │   ├── programmes.json
│   │   ├── registration.json
│   │   ├── service-posts.json
│   │   ├── site-info.json
│   │   └── why-ptph.json
│   ├── images/
│   ├── service-posts/
│   ├── uploads/
│   └── why-ptph/
├── src/
│   ├── data/
│   │   └── siteContent.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── docs/
├── index.html
├── package.json
└── vite.config.js
```

---

## Quick Start

```bash
npm install
npm run dev
```

The local website usually runs at:

```text
http://localhost:5173
```

Build production files:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Important Links

Replace these with the real links if needed:

| Item | Link |
|---|---|
| Live Website | `https://permatahikmaheducationgroup.netlify.app` |
| CMS Admin | `https://permatahikmaheducationgroup.netlify.app/admin/` |
| Student Registration Google Form | Stored in `public/content/forms.json` |
| Career/Internship Google Form | Stored in `public/content/forms.json` |
| Datang.my | Stored in `public/content/site-info.json` |
| Google Map Embed | Stored in `public/content/footer.json` |

---

## Documentation

Detailed documentation is available in the `docs/` folder.

| File | Purpose |
|---|---|
| `project-overview.md` | Project purpose and system flow |
| `setup-and-development.md` | Local setup and development guide |
| `deployment-netlify.md` | Netlify deployment guide |
| `cms-user-guide.md` | Decap CMS editing guide |
| `handover-guide.md` | Guide for PTPH staff |
| `testing-checklist.md` | Testing checklist |
| `version-history.md` | Version progress summary |
| `troubleshooting.md` | Common issues and fixes |
| `future-improvements.md` | Suggested future upgrades |

---

## Current Recommended Workflow

For website content updates:

```text
Staff logs into /admin
↓
Staff edits content in Decap CMS
↓
Changes are saved through Editorial Workflow
↓
Admin reviews and publishes changes
↓
Netlify deploys website
↓
Website content updates
```

For student/job applications:

```text
User clicks website button
↓
Google Form opens
↓
User submits form
↓
Response is stored in Google Sheets
↓
PTPH staff reviews response in Google Sheets
```

---

## Notes

- The website currently does not use a custom backend or database.
- Google Forms and Google Sheets are used to avoid database cost at the current stage.
- Decap CMS is used only for editing website content, not for storing registration submissions.
- If Netlify auto deploy is disabled, CMS changes will be saved to GitHub but will not appear on the live website until a manual deploy is triggered.
