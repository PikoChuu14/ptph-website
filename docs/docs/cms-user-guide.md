# Decap CMS User Guide

## CMS Admin Link

Open:

```text
https://permatahikmaheducationgroup.netlify.app/admin/
```

Alternative:

```text
https://permatahikmaheducationgroup.netlify.app/admin/index.html
```

---

## Login

The CMS uses Netlify Identity.

Steps:

1. Open the admin link.
2. Click **Login with Netlify Identity**.
3. Enter email and password.
4. Access the CMS dashboard.

If the account is new, accept the Netlify Identity invite email first.

---

## CMS Sections

The CMS is divided into:

### Website Settings

- Site Info
- Forms & WhatsApp
- Footer & Location

### Page Sections

- Hero Section
- Service Carousel
- Why PTPH
- Programmes
- Registration Section
- Join Our Team

---

## What Each CMS Section Controls

### Site Info

Controls:

- Website name
- Short name
- Logo path
- Datang.my URL

File:

```text
public/content/site-info.json
```

### Forms & WhatsApp

Controls:

- Student registration Google Form link
- Career/internship Google Form link
- WhatsApp link

File:

```text
public/content/forms.json
```

### Footer & Location

Controls:

- Address
- Phone number
- Email
- Map title
- Google Maps embed URL

File:

```text
public/content/footer.json
```

### Hero Section

Controls:

- Main headline
- Main description
- Primary button text
- Secondary button text

File:

```text
public/content/hero.json
```

### Service Carousel

Controls:

- Carousel label
- Carousel title
- Hint text
- Poster list
- Poster title
- Poster description
- Poster image

File:

```text
public/content/service-posts.json
```

### Why PTPH

Controls:

- Section label
- Section title
- Description
- Benefit cards
- Card images

File:

```text
public/content/why-ptph.json
```

### Programmes

Controls:

- Section label
- Section title
- Section description
- Programme cards
- Programme subjects

File:

```text
public/content/programmes.json
```

### Registration Section

Controls:

- Registration label
- Registration title
- Registration description
- Button text
- Note text
- Optional background/image if configured

File:

```text
public/content/registration.json
```

### Join Our Team

Controls:

- Label
- Title
- Paragraphs
- Button text
- Opportunities list
- Optional image if configured

File:

```text
public/content/join-team.json
```

---

## Editorial Workflow

The CMS uses Editorial Workflow:

```text
Draft → In Review → Ready → Publish
```

### Draft

The content has been edited but is not ready yet.

### In Review

The content is waiting for checking.

### Ready

The content is approved and ready to publish.

### Publish

The content is saved to GitHub and can be deployed to the website.

---

## Recommended Editing Workflow

```text
1. Edit one or more sections
2. Save changes
3. Move changes to In Review
4. Supervisor/admin checks content
5. Move to Ready
6. Publish changes
7. Deploy website if auto deploy is disabled
```

---

## Media Tab

The Media tab uploads and manages images.

Configured media folder:

```text
public/uploads
```

Public URL:

```text
/uploads
```

Example uploaded image path:

```text
/uploads/new-poster.png
```

Use Media for:

- New posters
- Promotion images
- Section images
- Join Our Team images
- Why PTPH card images

---

## Important Warnings

Do not delete required fields unless you know what they do.

Be careful with:

- Image paths
- Google Form links
- WhatsApp links
- Google Map embed URLs
- Programme subject lists

If a list becomes empty or incorrectly formatted, the section may not display correctly.

---

## If CMS Changes Do Not Appear

Check:

1. Was the change published?
2. Was Netlify deployed?
3. Is auto deploy disabled?
4. Open the JSON file directly:
   ```text
   /content/join-team.json
   ```
5. Try hard refresh:
   ```text
   Ctrl + F5
   ```
6. Trigger Netlify:
   ```text
   Clear cache and deploy site
   ```
