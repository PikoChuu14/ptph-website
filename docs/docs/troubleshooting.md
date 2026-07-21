# Troubleshooting Guide

## 1. Website Shows Blank Page

Common cause: React crashed because of undefined variables or broken CMS content.

Example error:

```text
ReferenceError: contactInfo is not defined
```

Fix: check imports in `App.jsx`.

Use fallback aliases:

```jsx
import {
  contactInfo as defaultContactInfo,
  heroContent as defaultHeroContent,
} from "./data/siteContent";
```

---

## 2. Failed to Fetch JSON File

Example:

```text
Failed to fetch /content/registration.json
```

Cause: file name mismatch.

Check all three match:

```text
App.jsx fetch path: /content/registration.json
Actual file: public/content/registration.json
Decap config: public/content/registration.json
```

Rename with Git:

```bash
git mv public/content/registrations.json public/content/registration.json
git commit -m "Fix registration content file name"
git push
```

---

## 3. Cannot Read Properties of Undefined

Example:

```text
Cannot read properties of undefined (reading 'map')
```

Cause: a CMS list field is missing or empty.

Fix:

```jsx
{(programmesContent.items || []).map((programme) => (
```

Nested lists:

```jsx
{(programme.subjects || []).map((subject) => (
```

---

## 4. Decap CMS Shows Empty Fields

Cause:

- CMS config does not match JSON field names
- Decap is reading the wrong branch

Check `public/admin/config.yml`.

For production:

```yml
backend:
  name: git-gateway
  branch: main
```

For branch testing:

```yml
backend:
  name: git-gateway
  branch: your-test-branch
```

---

## 5. Git Gateway Error

Error:

```text
Your Git Gateway backend is not returning valid settings
```

Fix in Netlify:

```text
Project configuration
→ Identity
→ Services
→ Git Gateway
→ Enable Git Gateway
```

---

## 6. Email Not Confirmed / User Not Found

Fix:

1. Go to Netlify Identity users.
2. Delete problematic user if needed.
3. Invite email again.
4. Open newest invite email.
5. Accept invite and set password.
6. Login through `/admin`.

---

## 7. CMS Changes Saved but Website Does Not Update

Possible cause: Netlify auto deploy is disabled.

Fix:

```text
Netlify
→ Deploys
→ Trigger deploy
→ Deploy site
```

If still not updated:

```text
Trigger deploy
→ Clear cache and deploy site
```

---

## 8. Image Does Not Load

If image is here:

```text
public/images/example.jpg
```

Use:

```text
/images/example.jpg
```

Not:

```text
public/images/example.jpg
```

Test directly:

```text
http://localhost:5173/images/example.jpg
```
