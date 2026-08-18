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
