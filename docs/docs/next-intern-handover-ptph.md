# Next Intern Handover Documentation
## Permata Hikmah Education Group / Pusat Tuisyen Permata Hikmah Website

**Project:** PTPH Website  
**Stack:** React + Vite, CSS, Netlify, Decap CMS, Google Forms, Google Sheets, Apps Script  
**Purpose:** Help the next intern understand how the website works, how to maintain it, how to deploy it, and what should be improved next.

---

## 1. Project Summary

This website was built for **Permata Hikmah Education Group / Pusat Tuisyen Permata Hikmah** as an official information and registration platform.

The website supports two main audiences:

1. **Parents / guardians** who want to learn about PTPH programmes and register their children.
2. **Job seekers / internship applicants** who want to apply to join PTPH.

The website is built using **React + Vite** and deployed on **Netlify**. To make the website easier for non-technical staff to update, **Decap CMS** was added so selected content can be edited through `/admin` without touching code.

---

## 2. Current Main Features

- Hero section with background image and call-to-action buttons
- Service / promotion carousel
- Poster lightbox preview
- “Kenapa Kami?” section
- Programme carousel
- Gallery section
- Student registration section
- Join Our Team / career section
- Footer with contact details and Google Maps
- Google Forms for student registration and career/internship application
- Google Sheets for form response collection
- Decap CMS admin panel
- Editorial workflow in Decap CMS
- Fade-in animation while scrolling
- Responsive layout, although phone view still needs improvement

---

## 3. Technology Used

| Area | Tool |
|---|---|
| Frontend | React |
| Build Tool | Vite |
| Styling | CSS |
| Hosting | Netlify |
| CMS | Decap CMS |
| CMS Authentication | Netlify Identity |
| CMS Git Access | Netlify Git Gateway |
| Form Collection | Google Forms |
| Response Storage | Google Sheets |
| Email Automation | Google Apps Script |
| Version Control | Git + GitHub |

---

## 4. Repository Structure

```text
ptph-website/
├── public/
│   ├── admin/
│   │   ├── index.html
│   │   └── config.yml
│   ├── content/
│   │   ├── footer.json
│   │   ├── forms.json
│   │   ├── gallery.json
│   │   ├── hero.json
│   │   ├── join-team.json
│   │   ├── programmes.json
│   │   ├── registration.json
│   │   ├── service-posts.json
│   │   ├── site-info.json
│   │   └── why-ptph.json
│   ├── images/
│   ├── uploads/
│   └── ...
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

## 5. Important Files

### `src/App.jsx`

This is the main React file. It contains the main website components and the logic to load CMS content from JSON files.

Main sections inside this file usually include:

- `App()`
- `Navbar()`
- `Hero()`
- `ServiceCarousel()`
- `Benefits()` / Kenapa Kami section
- `Programmes()`
- `Gallery()`
- `Register()`
- `JoinTeam()`
- `Footer()`
- Scroll reveal animation logic

The website content is loaded from:

```text
public/content/
```

If JSON content fails to load, fallback content from `src/data/siteContent.js` may be used.

---

### `src/index.css`

This file controls the visual design.

It includes styling for:

- Layout
- Navbar
- Hero section
- Programme carousel
- Gallery carousel
- Registration section
- Join Team section
- Footer
- Mobile responsiveness
- Fade-in scroll animation

If the website looks visually broken, this is usually the first file to check.

---

### `src/data/siteContent.js`

This file stores fallback/default content.

Important note: if `App.jsx` imports fallback values using aliases like this:

```jsx
siteInfo as defaultSiteInfo
```

then use `defaultSiteInfo` inside `App.jsx`, not `siteInfo`.

A previous issue happened because the code mixed old names and new names, causing errors such as:

```text
ReferenceError: siteInfo is not defined
ReferenceError: defaultSiteInfo is not defined
```

---

### `public/content/*.json`

These files store CMS-editable content.

| File | Purpose |
|---|---|
| `site-info.json` | Website name, logo path, basic site info |
| `hero.json` | Hero section wording |
| `service-posts.json` | Service/poster carousel content |
| `why-ptph.json` | Kenapa Kami cards |
| `programmes.json` | Programme carousel content |
| `gallery.json` | Gallery images |
| `registration.json` | Student registration section |
| `join-team.json` | Career / internship section |
| `forms.json` | Google Form and WhatsApp links |
| `footer.json` | Address, phone, email, map |

---

### `public/admin/config.yml`

This is the Decap CMS configuration file. It controls:

- Which Git branch the CMS edits
- Which JSON files appear in CMS
- What fields staff can edit
- Media upload folder
- Editorial workflow

For production, this should usually point to `main`:

```yml
backend:
  name: git-gateway
  branch: main
```

If testing CMS on a separate branch, temporarily change `branch` to the branch name. Before merging into main, change it back to `main`.

---

### `index.html`

This controls the browser tab title and favicon.

Example title:

```html
<title>Permata Hikmah Education Group</title>
```

Example favicon:

```html
<link rel="icon" type="image/png" href="/images/ptph-logo.png" />
```

---

## 6. How Content Loading Works

The website loads content like this:

```text
React component loads
↓
App.jsx fetches JSON files from /content/
↓
Content is stored in React state
↓
Components display the content
```

Example:

```jsx
fetchJson("/content/programmes.json", fallbackProgrammes)
```

Because Vite serves files inside `public/` from the root, this file:

```text
public/content/programmes.json
```

is accessed as:

```text
/content/programmes.json
```

Do not use:

```text
/public/content/programmes.json
```

---

## 7. How to Run Locally

Install dependencies:

```bash
npm install
```

Start local server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

Build the website:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 8. Git Workflow

Recommended workflow for future updates:

```bash
git switch main
git pull origin main
git switch -c version-x-feature-name
```

After making changes:

```bash
git status
git add .
git commit -m "Describe the update"
git push -u origin version-x-feature-name
```

After testing:

```bash
git switch main
git pull origin main
git merge version-x-feature-name
git push origin main
```

Avoid doing major updates directly on `main`.

---

## 9. If You Accidentally Edit on Main

If changes are not committed yet:

```bash
git switch -c version-x-feature-name
git add .
git commit -m "Move changes into feature branch"
git push -u origin version-x-feature-name
```

If committed but not pushed:

```bash
git switch -c version-x-feature-name
git push -u origin version-x-feature-name
git switch main
git reset --hard origin/main
```

If already pushed to main:

```bash
git switch -c backup-branch-name
git push -u origin backup-branch-name
git switch main
git log --oneline
git revert COMMIT_ID
git push origin main
```

---

## 10. Netlify Usage

### Normal Build Settings

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Production branch | `main` |

### Manual Deploy

In Netlify:

```text
Deploys
→ Trigger deploy
→ Deploy site
```

If changes do not appear:

```text
Deploys
→ Trigger deploy
→ Clear cache and deploy site
```

Use “Clear cache and deploy site” when:

- CSS does not update
- JSON content does not update
- Gallery images do not appear
- Branch deploy looks outdated

---

## 11. Branch Deploys

Branch deploys are useful for testing before production.

Use branch deploys to test:

- New design
- CMS changes
- Image paths
- Mobile layout
- Gallery images
- Form button links

Sometimes branch deploy previews may appear outdated. If that happens:

1. Check the deploy commit hash.
2. Trigger deploy again.
3. Use “Clear cache and deploy site”.
4. Hard refresh browser using `Ctrl + F5`.

---

## 12. Decap CMS Usage

CMS admin URL:

```text
https://permatahikmaheducationgroup.netlify.app/admin/
```

The CMS uses:

- Netlify Identity for login
- Git Gateway to write changes to GitHub
- Editorial Workflow for draft/review/publish

CMS workflow:

```text
Draft
↓
In Review
↓
Ready
↓
Publish
```

Staff can edit:

- Website name
- Hero text
- Programme content
- Gallery images
- Service poster carousel
- Registration section
- Join Team section
- Form links
- WhatsApp link
- Footer contact details
- Google Maps embed

Important: free Decap CMS does not strongly enforce role-based publishing. If strict approval is needed, keep Netlify auto deploy disabled and allow only an admin to manually deploy the website.

---

## 13. Gallery Section

The gallery section displays images in a moving carousel.

Content file:

```text
public/content/gallery.json
```

Example:

```json
{
  "label": "Galeri",
  "title": "Galeri PTPH",
  "description": "Lihat suasana kelas, aktiviti pembelajaran dan persekitaran di Pusat Tuisyen Permata Hikmah.",
  "images": [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg"
  ]
}
```

Gallery images can be stored in:

```text
public/images/gallery/
```

or uploaded through Decap CMS into:

```text
public/uploads/
```

Correct paths:

```text
/images/gallery/gallery-1.jpg
/uploads/gallery-photo.jpg
```

Wrong paths:

```text
public/images/gallery/gallery-1.jpg
/public/images/gallery/gallery-1.jpg
```

---

## 14. Google Forms and Google Sheets

The website uses Google Forms instead of a custom database.

Current flow:

```text
Website button
↓
Google Form
↓
Google Sheets response sheet
↓
Staff reviews response
```

This is used for:

- Student registration
- Job / internship application

Form links are stored in:

```text
public/content/forms.json
```

---

## 15. Google Sheets Apps Script Email Automation

There is an email automation idea/system connected to Google Sheets and Apps Script.

Purpose:

- Send confirmation email to applicants
- Send application ID
- Send application type
- Send application status
- Send accepted/rejected/pending updates

Important next improvement:

Use a **Permata Hikmah work email**, not the supervisor’s personal email, to send automated emails.

Reason:

- More professional
- Easier to hand over to future staff
- Avoids dependency on one person’s personal email
- Better for long-term organisation identity

Possible sender email examples:

```text
admin@custom-domain
career@custom-domain
permatahikmah@gmail.com
```

If the organisation later buys a domain, a domain-based email is better.

---

## 16. Current Known Issues / Limitations

### Phone View Needs Improvement

The website works, but mobile layout still needs more testing.

Check:

- Navbar on phone
- Long title wrapping
- Programme carousel on small screen
- Gallery image size
- Button spacing
- Footer layout
- CMS-uploaded image sizes

### Google Search Visibility Not Complete

The website may not appear on Google search immediately.

The next intern should:

- Use Google Search Console
- Submit URL for indexing
- Add a sitemap later
- Improve page title and meta description
- Add proper SEO tags
- Consider custom domain

### Domain Still Uses Netlify URL

The Netlify URL is usable but not professional enough for long-term use.

Future improvement:

- Buy a custom domain
- Connect it to Netlify
- Consider `.com`, `.my`, or `.com.my`
- Use the same domain for work email if possible

### Images Are Still Temporary

Gallery images should be replaced with images provided by the supervisor.

Use real images of:

- Classroom environment
- Students learning
- Teachers guiding students
- Centre facilities
- Learning activities

Get permission before using images of students publicly.

### CMS Workflow Needs Staff Training

Staff need to understand:

- How to login
- How to edit text
- How to upload images
- How to publish changes
- What not to touch
- When to ask a technical person for help

---

## 17. Things To Do Next

### Priority 1 — Make Website Appear on Google Search

Tasks:

- Set up or check Google Search Console
- Add the production Netlify URL
- Verify ownership
- Submit URL for indexing
- Add sitemap later
- Add meta title and meta description
- Make sure the website title is correct
- Search for the website after a few days/weeks

Suggested title:

```text
Permata Hikmah Education Group | Pusat Tuisyen di Masai, Johor
```

Suggested meta description:

```text
Permata Hikmah Education Group menyediakan pendidikan awal, tuisyen sekolah rendah dan menengah, kelas Fardu Ain serta pendaftaran online untuk ibu bapa.
```

### Priority 2 — Link Website to Social Media

Add social media links to the footer:

- Instagram
- Facebook
- TikTok
- WhatsApp
- YouTube if available

The footer is the best location because it keeps the navbar clean.

### Priority 3 — Use Custom Domain

Current website uses Netlify domain.

Possible future domain names:

```text
permatahikmaheducation.com
permatahikmah.com.my
permatahikmah.my
```

Steps:

1. Choose domain name.
2. Buy domain from a domain provider.
3. Connect DNS to Netlify.
4. Set custom domain in Netlify.
5. Enable HTTPS.
6. Update Google Search Console with new domain.
7. Update Google Forms and official materials with new URL.

### Priority 4 — Replace Gallery Images

Replace current gallery images with real images from the supervisor.

Steps:

1. Collect approved images from supervisor.
2. Compress images.
3. Rename clearly:
   ```text
   gallery-1.jpg
   gallery-2.jpg
   gallery-3.jpg
   ```
4. Put images in:
   ```text
   public/images/gallery/
   ```
   or upload through Decap CMS.
5. Update:
   ```text
   public/content/gallery.json
   ```
6. Test website.

### Priority 5 — Improve Phone View

Test using Chrome DevTools and real phones.

Check screen sizes:

- Small iPhone size
- Standard iPhone size
- Android medium screen
- Tablet size

Focus on:

- Navbar
- Hero section
- Programme carousel
- Gallery carousel
- Registration buttons
- Footer map

### Priority 6 — Use Organisation Work Email for Apps Script

Current concern:

- If automation uses a personal email, future handover becomes difficult.

Recommended action:

- Create/use official PTPH email
- Move Apps Script trigger ownership to that email
- Use official email for applicant confirmation/status messages
- Avoid sending official application emails from personal accounts

### Priority 7 — Add Analytics

Add basic analytics to understand website usage.

Possible tools:

- Google Analytics
- Netlify Analytics
- Plausible Analytics

Useful metrics:

- Total visitors
- Most viewed sections
- Registration button clicks
- Join Team button clicks
- Gallery engagement

### Priority 8 — Improve SEO and Sharing Preview

Add:

- Open Graph title
- Open Graph description
- Open Graph image
- Favicon
- Proper meta description
- Better page title
- Structured contact info

This helps when the website link is shared on WhatsApp, Facebook, or Telegram.

### Priority 9 — Improve CMS Safety

Future improvements:

- Add clearer labels in CMS
- Add help text for fields
- Limit unnecessary fields
- Make image size guidelines
- Add documentation screenshots
- Keep manual deploy approval for safety

### Priority 10 — Consider Future Database/Admin Dashboard

For now, Google Forms + Sheets are enough.

In the future, consider a real admin dashboard if PTPH needs:

- Student database
- Applicant tracking
- Attendance system
- Class scheduling
- Parent communication
- Payment tracking

Do not build this unless the supervisor confirms it is needed.

---

## 18. Testing Checklist Before Handover

### Website

- [ ] Website loads
- [ ] Navbar works
- [ ] Hero buttons work
- [ ] Service carousel works
- [ ] Programme carousel shows all programmes
- [ ] Gallery images move
- [ ] Registration button opens correct Google Form
- [ ] Join Team button opens correct Google Form
- [ ] WhatsApp link opens correct number
- [ ] Footer map loads
- [ ] Phone view is acceptable

### CMS

- [ ] `/admin` opens
- [ ] Login works
- [ ] Existing content appears
- [ ] Editing simple text works
- [ ] Publishing works
- [ ] Website updates after deploy
- [ ] Image upload works

### Deployment

- [ ] `npm run build` works locally
- [ ] Netlify deploy succeeds
- [ ] `/content/*.json` files open online
- [ ] No red console errors

### Forms

- [ ] Student registration form accepts response
- [ ] Career/internship form accepts response
- [ ] Responses appear in Google Sheets
- [ ] Email automation works if enabled

---

## 19. Common Errors and Fixes

### Blank White Page

Open browser console.

Common errors:

```text
ReferenceError: siteInfo is not defined
ReferenceError: defaultSiteInfo is not defined
Cannot read properties of undefined
```

Fix:

- Check imports in `App.jsx`
- Make sure alias names are consistent
- Check JSON file structure
- Check `.map()` uses fallback:

```jsx
(programme.subjects || []).map(...)
```

### JSON File 404

Example:

```text
Failed to fetch /content/registration.json
```

Fix:

- Check file exists:
  ```text
  public/content/registration.json
  ```
- Check spelling
- Check singular/plural file name
- Run:
  ```bash
  npm run build
  ```
- Check:
  ```text
  dist/content/
  ```

### Image Not Showing

If image is in:

```text
public/images/gallery/photo.jpg
```

Use:

```text
/images/gallery/photo.jpg
```

Do not use:

```text
public/images/gallery/photo.jpg
```

### CMS Shows Empty Fields

Possible causes:

- `config.yml` field names do not match JSON field names
- CMS is pointed to wrong branch

Check:

```yml
backend:
  name: git-gateway
  branch: main
```

---

## 20. Final Advice for Next Intern

Before adding major features, understand the current system first.

Recommended order:

1. Run the project locally.
2. Understand `App.jsx`.
3. Understand `public/content/*.json`.
4. Understand Decap CMS config.
5. Test Netlify deployment.
6. Test Google Forms and Sheets.
7. Improve mobile view.
8. Improve SEO/search visibility.
9. Replace gallery images.
10. Only then consider bigger features like an admin dashboard or database.

The current website is already useful as a working platform. The next improvement should focus on making it more professional, easier to find on Google, easier to maintain, and safer for long-term staff use.
