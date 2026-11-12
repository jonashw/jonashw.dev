---
date: 2026-11-12
repo: jonashw/jonashw.dev
kind: preference
area: architecture
---
Situation: The website AA picked a mindset-first outline whose essays and recent-work section need regular refreshing. Portfolio data was kept in Airtable and exported as JSON to Azure blob storage.
Jon said: "Right now, I have manage the portfolio software data in an airtable base (could we please migrate that???)"
Jon said: "If we switch to maintaining that data together (via an mcp connector to some database/cache layer), it could be baked into our regular workflow. That includes the essays, which could be up for regular review and reworking."
Observed: Jon wants content upkeep to be part of his routine work with Claude, not a separate manual export step, and wants Airtable out of the loop.
Inferred (my reading): Content in the repo (JSON + Markdown, edited through PRs) meets "maintain together" without a new database or MCP server; Claude can already edit repos in any thread. Jon had proposed a DB plus an MCP connector; offered both, he chose "Files in the site repo (PR #3)" on 2026-11-12 (no reason given).
