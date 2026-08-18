# FutureEdge SEO + AI Search launch checklist

The repository now contains the technical foundations. After deploying to Vercel:

1. Open `https://myfutureedge.com/robots.txt` and `https://myfutureedge.com/sitemap.xml` and confirm both load.
2. Add `https://myfutureedge.com/` to Google Search Console and submit `https://myfutureedge.com/sitemap.xml`.
3. Use Search Console URL Inspection on the homepage and request indexing after major launches.
4. Add the domain to Bing Webmaster Tools and submit the same sitemap.
5. Keep publishing genuinely useful, expert-led ATAR / Year 12 content over time (for example: specific assessment mistakes, revision systems, parent support, and post-result resets). This is the biggest remaining growth lever; metadata alone will not rank the site for competitive study queries.
6. Earn legitimate mentions and links from participating schools, educators, contributors and relevant education publications when the series launches.

## AI search

`robots.txt` explicitly allows OAI-SearchBot and PerplexityBot. GPTBot is disallowed so the site can be surfaced in ChatGPT search without opting the site into OpenAI foundation-model training via crawler. Generic search crawlers remain allowed.

No `llms.txt` file has been added. Google currently says special AI text files such as `llms.txt` are not required for Google Search generative features; the priority is normal crawlability, useful original content, clear page structure and established SEO.
