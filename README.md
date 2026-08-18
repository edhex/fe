# FutureEdge website

Production-ready static site for **myfutureedge.com**.

## Structure

```text
.
├── index.html
├── 404.html
├── vercel.json
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── assets/
    ├── styles.css
    ├── app.js
    ├── futureedge-mark.png
    ├── christopher-lim.webp
    ├── isaac-brennin.webp
    ├── dr-mark-merry.webp
    └── og-card.png
```

## Fastest deployment

1. Create a new GitHub repository, e.g. `futureedge-site`.
2. Upload **the contents of this folder** to the root of the repo.
3. In Vercel choose **Add New → Project**, import the GitHub repo and deploy it. This is a static site; no framework/build command is required.
4. Test the generated `*.vercel.app` URL on desktop and mobile.
5. In Vercel open **Settings → Domains** and add `myfutureedge.com` and `www.myfutureedge.com`.
6. Vercel will show the DNS records required. Update only the website A/CNAME records in GoDaddy. **Do not delete MX/TXT records used by email.**
7. Once the custom domain works, submit the priority-list form once. The form currently uses FormSubmit and may require one-time approval from `hello@myfutureedge.com`.

## Updating the site

Edit the relevant file, commit and push to GitHub. Vercel will redeploy automatically from the production branch.

## Form

Priority-list submissions are configured for:

`hello@myfutureedge.com`

The site uses FormSubmit. If you later want first-party form handling, replace this with a Vercel Function or another form service.

## Domain

Canonical production URL: `https://myfutureedge.com/`


## FormSubmit

The FutureEdge priority form is activated with FormSubmit. The HTML fallback endpoint uses the confirmed FormSubmit token rather than the destination email address. The JavaScript AJAX submission continues to use FormSubmit's documented AJAX email endpoint so the in-page success experience remains unchanged.


## Launch update — 18 Aug 2026

This package now includes:

- mobile hamburger navigation with accessible ARIA states and Escape-to-close
- permanent redirects for the old WordPress checkout/event URLs
- canonical redirects from `www.myfutureedge.com` and `fe-ten-iota.vercel.app` to `myfutureedge.com`
- `/privacy` and `/terms` pages
- updated sitemap and robots.txt
- search-focused page title/description and Australian language targeting
- Organization, WebSite, WebPage and Service JSON-LD structured data
- explicit AI-search crawler access for OAI-SearchBot and PerplexityBot
- stronger security headers and a Content Security Policy
- `SEO-AI-LAUNCH-CHECKLIST.md` with the remaining Search Console/Bing steps

Deploy by replacing the existing GitHub repository contents with this package and pushing to the production branch. Vercel should redeploy automatically.


## Important: replace the full repo
This release uses versioned CSS/JS filenames (`styles-20260818b.css` and `app-20260818b.js`) to defeat stale browser/CDN caching. Upload the **entire contents** of this folder, including `/assets`, rather than replacing only `index.html`.
