# CartDistrict frontend

Marketing and legal pages for CartDistrict (static HTML and CSS, no build step).

## Branches

- `production`: live site. Worker `cartdistrict`.
- `staging`: preview site. Worker `cartdistrict-staging`.

Change `staging` first, check the preview, then merge into `production`.

## Deploy

Files served live in `public/`. Config in `wrangler.jsonc`.

    npx wrangler deploy --env staging   # from the staging branch
    npx wrangler deploy                 # from the production branch

## Pages

- `index.html`: home
- `privacy.html`: privacy policy (draft, needs legal review)
- `terms.html`: terms of service (draft, needs legal review)
- `data-deletion.html`: data deletion instructions

## Run locally

    python3 -m http.server 4173 --directory public
