# Site content

Portfolio data lives here, in git, instead of in Airtable with a JSON export to Azure blob storage.

- `portfolio-systems.json`: one entry per system, shown in the order listed. `slug` is a stable id.
- `audience` says who an entry is meant for (`professional`, `civic-tech`). It is never shown on a card. Add `?audience=civic-tech` to the site address to show only matching entries.
- Screenshots live in `public/portfolio/` and are referenced as `/portfolio/<file>`.

To change the portfolio, edit these files in a branch and open a PR. Netlify builds a preview for every PR and deploys `main` on merge.
