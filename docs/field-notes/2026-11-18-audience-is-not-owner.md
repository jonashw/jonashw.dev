---
date: 2026-11-18
repo: jonashw/jonashw.dev
kind: correction
area: ddd
---
Situation: PR #5 marked the Ranked Choice Voting Simulator as civic work by changing its Owner value from "Personal" to "Civic tech".
Jon said: "using \"Owner\" for \"Civic tech\" is unnatural to me. I'm still the owner (Personal), I just intended it for a different audience. could we have \"portfolio audience\" (or similar) as an invisible facet that we can filter on in this UI?"
Jon said: "It might be nice to use the same facet-based interface (even with a faceted search filters UI) to depict other portfolio items (would this perhaps be relevant for the art KB front end?)."
Observed: Owner is restored to "Personal". Each entry gets an `audience` list that is never displayed and can filter the gallery through `?audience=`.
Inferred (my reading): Owner and audience are separate attributes; overloading one field to carry the other is the modelling mistake to avoid. "Invisible" was read as "not shown on the card", with filtering by link for now; a visible facet-filter UI is a possible next step.
