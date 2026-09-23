Yes — for a lightweight HTML/CSS/JavaScript site that you currently keep in GitHub, I would use **Cloudflare Pages + Cloudflare Access**. It is free for small use, deploys directly from a GitHub repository, and puts real access control in front of the site rather than merely hiding it with browser-side JavaScript. Cloudflare’s Zero Trust/Access free tier supports up to 50 users, while Pages itself is free to start. [cloudflare](https://www.cloudflare.com/products/pages/)

## Best option: Cloudflare Pages + Access

This gives you:

- GitHub-connected deployment: push changes to your repository and the site redeploys.
- Hosting for a plain static folder—no framework, server, database, or build process required.
- HTTPS and CDN delivery included.
- A gate before content is served, so protected HTML, JavaScript, images, PDFs, etc. are not simply downloadable by viewing page source.
- Access policies based on allowed email addresses or email domains. Visitors receive a one-time code by email, rather than all sharing an easily forwarded password.
- A free plan intended for teams or protected use cases with up to 50 users. [cloudflare](https://www.cloudflare.com/products/pages/)

This is especially good for private prototypes, design reviews, portfolios-in-progress, and client/stakeholder previews.

### Basic setup

1. Create a new repository for the protected site, or use a separate branch/repo from your public GitHub Pages site.
2. In Cloudflare, open **Workers & Pages** and create a Pages project connected to that GitHub repo.
3. Set the output/build setting to serve your static files:
   - If `index.html` is at the repository root and you have no build step, use the root folder.
4. Confirm the deployed Pages URL works.
5. In Cloudflare Zero Trust, create an **Access Application** for that Pages hostname or, preferably, a custom subdomain such as `prototype.yourdomain.com`.
6. Add an Allow policy:
   - Specific email addresses for a short reviewer list, or
   - An email domain for a work team.
7. Disable or redirect the default `pages.dev` URL if you use a custom domain; otherwise a person might bypass the protected hostname using the Pages URL. Cloudflare’s Pages documentation specifically notes using Access over the Pages preview hostname and redirecting the project’s `pages.dev` address to the custom domain. [developers.cloudflare](https://developers.cloudflare.com/pages/configuration/custom-domains/)

## Important distinction: password vs. access control

A single shared password is convenient, but not ideal for anything sensitive: anyone can forward it, and you cannot revoke access for one person without changing it for everyone.

Cloudflare Access normally works more like this:

> A reviewer visits `prototype.yourdomain.com` → Cloudflare asks for their email → sends a one-time code → grants access only if that email matches your allow rule.

For design/prototype sharing, that is usually better than one common password. You can remove a stakeholder’s email later without disturbing other people.

## Faster alternative: Netlify + Basic Auth

If you specifically want a traditional shared username/password prompt and do not mind committing those credentials to your repository, Netlify can host a static site free and apply HTTP Basic Authentication through a `_headers` file. Netlify documents this configuration as available through custom headers, including on free/personal use, while its polished dashboard-based password-protection option requires Pro. [netlify](https://www.netlify.com/blog/restricting-access-to-netlify-sites-with-passwords/)

Create a file named `_headers` in the published site folder:

```text
/*
  Basic-Auth: reviewer:choose-a-long-random-password
```

Then deploy the repo to Netlify. Visitors will see the browser’s native username/password dialog.

### Why I would not use this for sensitive work

- The username and password sit in the Git repo unless you keep the repository private.
- Anyone who knows the credentials can share them.
- It provides one shared credential rather than individual access.
- Do not use it for real secrets, customer data, unreleased confidential material, or anything regulated.

Still, it is probably the quickest solution if the goal is simply “send a prototype to two people this week.”

## Options compared

| Option | Cost for basic use | Protection type | Best for | Main limitation |
|---|---:|---|---|---|
| Cloudflare Pages + Access | Free, up to 50 Access users | Individual email-based sign-in / one-time codes | Private prototypes, client reviews, ongoing protected sites | Slightly more setup; ideally use a custom domain |
| Netlify + `_headers` Basic Auth | Free hosting | Shared username/password | Very quick, low-sensitivity demos | Credentials live in configuration/repo; shared and weakly revocable |
| Netlify dashboard password gate | Paid Pro | Shared site password or team login | Teams that prefer dashboard controls | Not a free production-site option.  [docs.netlify](https://docs.netlify.com/manage/security/secure-access-to-sites/password-protection/) |
| Vercel | Free hosting, but password gate is paid | Password protection requires paid plan | Apps already deployed on Vercel | Not a free password-protected solution.  [vercel](https://vercel.com/docs/deployment-protection/methods-to-protect-deployments/password-protection) |
| Static “password page” JavaScript | Free anywhere | Client-side obfuscation at best | Casual puzzle/easter egg only | Not actual protection; assets can often be reached directly |

## My recommendation

Use **Cloudflare Pages + Cloudflare Access** if you can accept email-based access instead of one shared password. It is the best balance of free, lightweight, GitHub-friendly, and reasonably secure.

Use **Netlify Basic Auth** only if you truly need a shared-password browser prompt and the site is a low-risk prototype. Keep the repository private and use a unique, long password.

Avoid adding a password check solely in JavaScript to a GitHub Pages site. That can hide navigation, but it does not reliably protect the underlying files; a visitor can often view source, inspect network requests, or directly load asset URLs. For stronger static-only encryption approaches, PageCrypt can encrypt individual HTML content using the Web Crypto API, but it is less convenient than putting a real access layer in front of the entire site. [render](https://render.com/blog/static-site-auth-pagecrypt)