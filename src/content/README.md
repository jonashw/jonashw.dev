# Site content

Portfolio data lives here, in git, instead of in Airtable with a JSON export to Azure blob storage.

- `portfolio-systems.json`: one entry per system, shown in the order listed. `slug` is a stable id.
- `sector` lists who the software serves: `state-government`, `public-university`, `community-programs`, `general-public`, or `any`.
- `engagement` says how the work came about: `client-work`, `in-house`, `saas-product`, or `personal`.
- Neither is shown on a card. Add `?sector=state-government` or `?engagement=personal` (or both, joined with `&`) to the site address to show only matching entries.
- Screenshots live in `public/portfolio/` and are referenced as `/portfolio/<file>`.

To change the portfolio, edit these files in a branch and open a PR. Netlify builds a preview for every PR and deploys `main` on merge.
