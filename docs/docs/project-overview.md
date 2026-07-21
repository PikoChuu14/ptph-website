# Project Overview

## Purpose

The PTPH website provides Pusat Tuisyen Permata Hikmah with a simple, professional, and maintainable online presence.

The website helps PTPH:

- Present education services to parents
- Show current programmes and promotions
- Allow parents to register interest using Google Forms
- Allow job seekers and internship applicants to apply online
- Provide location and contact information
- Link users to existing digital tools such as Datang.my
- Allow non-technical staff to edit selected website content using Decap CMS

---

## Target Audiences

### Parents / Guardians

Parents can:

- Understand what PTPH offers
- View available programmes
- View current promotions
- Contact PTPH through WhatsApp
- Register their children through Google Form
- Find the centre using Google Maps

### Job Seekers / Internship Applicants

Applicants can:

- Learn that PTPH accepts job/internship applications
- View suitable opportunities
- Submit an application through Google Form

### PTPH Staff

Staff can:

- Update website wording
- Update programme information
- Update service posters
- Update form links
- Update contact details
- Update Join Our Team information

---

## System Flow

### Parent Registration Flow

```text
Parent visits website
↓
Clicks "Isi Borang Pendaftaran"
↓
Google Form opens
↓
Parent submits details
↓
Response is recorded in Google Sheets
↓
PTPH staff reviews response
↓
PTPH contacts parent
```

### Job / Internship Application Flow

```text
Applicant visits website
↓
Clicks "Sertai Kami"
↓
Clicks "Isi Borang Permohonan"
↓
Google Form opens
↓
Applicant submits details
↓
Response is recorded in Google Sheets
↓
PTPH staff reviews application
```

### CMS Editing Flow

```text
Staff visits /admin
↓
Logs in using Netlify Identity
↓
Chooses website section
↓
Edits content
↓
Saves draft / moves through workflow
↓
Publishes approved changes
↓
Changes are committed to GitHub
↓
Netlify deploys updated website
```

---

## Why Google Forms Are Used

Google Forms are used because they are:

- Free to use
- Easy for non-technical staff
- Connected directly to Google Sheets
- Fast to implement
- Suitable for prototype and early-stage operation
- Lower risk than building a database immediately

At the current stage, a custom database is not necessary because form responses can be managed in Google Sheets.

---

## Why CMS Is Used

The website is built in React. Without a CMS, staff would need a developer to edit code whenever they want to update content.

Decap CMS allows staff to edit selected content through an admin interface.

CMS-editable content includes:

- Website name and basic information
- Hero section wording
- Programme section
- Why PTPH section
- Service carousel posters
- Registration section
- Join Our Team section
- Footer/contact/location information
- Google Form links
