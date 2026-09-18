# Build with Leaser AI

The public technology and ecosystem site for `build.leaserai.com`.

## Publishing insights

The homepage is the editorial index. Each published field note lives at a stable
path under `insights/<slug>/`; add its canonical URL to `sitemap.xml` when it
goes live. Forthcoming topics on the homepage are intentionally not linked.

## Publishing careers

The careers index lives at `careers/`, with one stable path per role. Application
links route through `careers/apply/` and pass the role as a query parameter to a
shared Tally form. The embed uses dynamic height so it does not create a nested
scroll area on mobile. Add public role URLs to `sitemap.xml`; keep the application
and confirmation pages out of the sitemap.

## Preview locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy with GitHub Pages

Push the repository to GitHub, then choose **Deploy from a branch** under
Settings → Pages. Select the default branch and `/ (root)`. The included `CNAME`
points Pages at `build.leaserai.com`.

Add a DNS `CNAME` record for `build` pointing to `<github-user-or-org>.github.io`.
Enable **Enforce HTTPS** after GitHub provisions the certificate.
