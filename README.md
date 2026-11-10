# CartDistrict frontend

Marketing and legal pages for CartDistrict (static HTML and CSS, no build step).

## Branches

- `production`: live site, deployed to Cloudflare Pages production.
- `staging`: preview site, deployed to the Cloudflare Pages `staging` branch alias.

Change `staging` first, check the preview, then merge into `production`.

## Pages

- `index.html`: home
- `privacy.html`: privacy policy (draft, needs legal review)
- `terms.html`: terms of service (draft, needs legal review)
- `data-deletion.html`: data deletion instructions

## Run locally

    python3 -m http.server 4173
