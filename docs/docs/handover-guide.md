# Handover Guide for PTPH Staff

## Main Website

```text
https://permatahikmaheducationgroup.netlify.app
```

## Admin CMS

```text
https://permatahikmaheducationgroup.netlify.app/admin/
```

---

## What Staff Can Update

Through CMS, staff can update:

- Website text
- Programme information
- Promotion/service posters
- Why PTPH cards
- Student registration section
- Join Our Team section
- Contact number
- Email
- Address
- Google Form links
- WhatsApp link
- Google Map embed link

---

## What Staff Should Not Edit Without Technical Help

Avoid editing:

- Source code in `src/`
- React components
- CSS layout files
- Netlify build settings
- GitHub branch settings
- CMS backend configuration in `public/admin/config.yml`

---

## Registration Management

Student registrations are handled through:

```text
Website button → Google Form → Google Sheets
```

Staff should manage student registrations from the linked Google Sheets response file.

---

## Job / Internship Applications

Applications are handled through:

```text
Website button → Google Form → Google Sheets
```

Staff should manage applications from the linked Google Sheets response file.

---

## Updating Google Form Links

1. Open CMS admin.
2. Go to **Website Settings**.
3. Open **Forms & WhatsApp**.
4. Paste the new Google Form link.
5. Save/publish changes.
6. Deploy website if needed.

---

## Updating Posters

1. Open CMS admin.
2. Go to **Page Sections**.
3. Open **Service Carousel**.
4. Add/edit poster title, description, and image.
5. Save/publish changes.
6. Deploy website if needed.

---

## Updating Contact Information

1. Open CMS admin.
2. Go to **Website Settings**.
3. Open **Footer & Location**.
4. Update phone/email/address.
5. Save/publish changes.
6. Deploy website if needed.

---

## Deployment Note

If Netlify auto deploy is enabled:

```text
Published CMS changes → Website updates automatically
```

If Netlify auto deploy is disabled:

```text
Published CMS changes → Saved to GitHub only
Manual Netlify deploy needed
```

Manual deploy:

```text
Netlify Dashboard
→ Deploys
→ Trigger deploy
→ Deploy site
```

If content still does not update:

```text
Trigger deploy
→ Clear cache and deploy site
```
