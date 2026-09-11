# Build with Leaser

The public technology and ecosystem site for `build.leaserai.com`.

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
