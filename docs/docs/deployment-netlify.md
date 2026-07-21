# Netlify Deployment Guide

## Build Settings

Typical Netlify settings:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Production branch | `main` |

---

## Deployment Flow

```text
Code pushed to GitHub
↓
Netlify detects update
↓
Netlify runs npm run build
↓
dist/ folder is generated
↓
Website is deployed
```

If auto deploy is disabled:

```text
Code/CMS changes saved to GitHub
↓
Netlify does not deploy automatically
↓
Admin manually triggers deploy
↓
Website updates
```

---

## Manual Deployment

In Netlify:

```text
Deploys
→ Trigger deploy
→ Deploy site
```

If the website is not updating correctly:

```text
Trigger deploy
→ Clear cache and deploy site
```

---

## Branch Deploys

Branch deploys are useful for testing before publishing live.

Example:

```text
version-1-10-expanded-cms--permatahikmaheducationgroup.netlify.app
```

Use branch deploys to test:

- CMS changes
- Layout changes
- New images
- New content files

---

## Production Deploy

Production deploy is the live website:

```text
https://permatahikmaheducationgroup.netlify.app
```

Only publish to production after testing.

---

## Netlify Credit Consideration

CMS publishing can trigger Netlify deploys.

Typical CMS flow:

```text
Edit in Decap CMS
↓
Publish
↓
CMS commits changes to GitHub
↓
Netlify deploys
```

To reduce unnecessary deploy usage:

- Group multiple changes before publishing
- Use Editorial Workflow
- Keep auto deploy disabled if manual approval is preferred
- Manually deploy only after approved updates

---

## Checking Deployed Content Files

Open:

```text
https://your-site.netlify.app/content/join-team.json
https://your-site.netlify.app/content/programmes.json
https://your-site.netlify.app/content/registration.json
```

If these return 404, the `public/content/` files are not included in the deployed build.

Possible fix:

```bash
npm run build
```

Then check:

```bash
dir dist\content
```

If files exist locally but not online, trigger:

```text
Clear cache and deploy site
```
