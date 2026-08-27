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


## Launch update - 18 Aug 2026

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

## Private contributor page

The repository also contains a private/unlisted contributor page at `/speakertab` and confirmation page at `/speakertab-thanks`.

- It is intentionally **not linked from the public website**.
- It is intentionally **not included in sitemap.xml**.
- It carries both HTML `noindex` directives and an `X-Robots-Tag: noindex` response header via `vercel.json`.
- The form submits to the existing activated FutureEdge FormSubmit endpoint and supports an optional image upload. FormSubmit currently documents a 10 MB combined file-upload limit; the page enforces a 9 MB single-photo limit for headroom.
- Contributor permission and paid engagement terms are deliberately separate. Any paid interview/event arrangement should be confirmed separately in writing.

### Contributor form v1.1 notes
- Contributor form is for adults (18+) only and uses self-consent.
- Mobile number and ATAR are required.
- Interview-topic section was removed; interview scope will be handled separately.
- Contributor may optionally suggest other students, parents, teachers, coaches or experts FutureEdge should consider.
- Photo consent allows light presentation edits/enhancement without materially changing appearance.
- Any paid engagement is agreed separately in writing before that activity.


### Speaker photo upload
The speaker form uses a native multipart POST to FormSubmit. iPhone HEIC/HEIF photos are converted client-side to JPEG (max 2400px) before submission, and the file field uses FormSubmit's documented `attachment` name.


## Contributor-page copy polish - 27 Aug 2026
- Reframed `/speakertab` as an expression of interest rather than assuming a contributor has been selected.
- Split graduating school from current university/organisation and simplified the Year 12 graduation-year field.
- Reworked the agreement so permissions apply if FutureEdge and the contributor agree to work together.
- Replaced legalistic "reasonably practicable" wording with plain English.
- Removed em dashes across public website copy and interaction text, and tightened wording that felt overly generated or corporate.
