---
date: 2026-11-18
repo: jonashw/jonashw.dev
kind: correction
area: ddd
---
Situation: PR #5 marked the Ranked Choice Voting Simulator as civic work by changing its Owner value from "Personal" to "Civic tech".
Jon said: "using \"Owner\" for \"Civic tech\" is unnatural to me. I'm still the owner (Personal), I just intended it for a different audience. could we have \"portfolio audience\" (or similar) as an invisible facet that we can filter on in this UI?"
Jon said: "It might be nice to use the same facet-based interface (even with a faceted search filters UI) to depict other portfolio items (would this perhaps be relevant for the art KB front end?)."
Jon said (later, on tagging 4-H SaaS as civic tech): "Maybe we're mixing dimensions". Offered a split into sector served, engagement and site, he said: "Great split.  Agreed."
Observed: Owner is restored to "Personal". Each entry gets hidden `sector` and `engagement` fields that can filter the gallery through the address.
Inferred (my reading): Owner, sector served and engagement are separate attributes; overloading one field (or one label like "civic tech") to carry another is the modelling mistake to avoid. "Invisible" was read as "not shown on the card", with filtering by link for now; a visible facet-filter UI is a possible next step.
