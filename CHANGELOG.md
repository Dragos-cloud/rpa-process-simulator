# Changelog

All notable public-facing changes are documented here.

## 0.62 — 2026-10-22

- Replaced the single scrolling User Guide with eight topic tabs in English and Romanian, keeping navigation visible while the selected topic scrolls.
- Removed the "8. Coming next" section and added the missing Romanian Process Model reference tab.
- Gave the English/Romanian import-file tables a non-wrapping, minimum-width file-type column so headers and extensions stay readable.
- Added accessible tab/panel relationships, keyboard navigation with arrows and Home/End, and preserved the selected topic when switching language or returning from the simulator.
- Scoped simulation shortcuts to the simulator so reading the guide cannot inadvertently play, step or reset it.
- Added six guide navigation regression tests to the validation workflow.

## 0.61 — 2026-10-21

- Replaced raw-condition scenario names with route-focus titles and expandable branch explanations, available without an LLM.
- Added conservative Boolean interpretation for supported VB/C# negation, conjunction, disjunction and equality expressions, preserving branch polarity and exact source values.
- Retained full decision conditions, source workflow and authored label alongside compact display names. Older truncated conditions prompt a re-import; unsupported expressions remain technical.
- Preserved selected branches when toggling AI labels and included selected branch assumptions and full conditions in timeline exports.
- Added scenario polarity, grouping, source-retention, compatibility and selection regression tests.
- Published an import-led, 2:46 walkthrough with actual local-AI responses, English captions and a persistent AI disclosure; the MP4 and subtitles are release assets linked from the README.
- Updated the handbook and walkthrough guidance to distinguish documented requirements, source evidence, unsupported human waits and AI-generated review suggestions from completed implementation.
- Enabled a public GitHub Pages app from the `main` branch root, with `.nojekyll`, a README launch link and hosted/local-AI setup guidance. Application version remains 0.61; hosting does not change its runtime code.

## 0.60 — 2026-10-21

- Added semantic column matching for legacy English/Romanian PDD tables and lane-oriented BPMN element tables, including reordered columns and current/future-state scope.
- Kept exception definitions, state transitions, human-review requirements, business rules and open constraints distinct, with heading/table/row references and visible parsing diagnostics.
- Added PDD mapping for calls in non-REFramework entry workflows and retained the parsed PDD in saved sessions and bounded local-AI context.
- Reworded missing mappings and missing Throw evidence as review findings, not proof of missing implementation. Unspecified exception types are no longer guessed from table order.
- Added dependency-free parser regression tests to the validation workflow.

## 0.59 — 2026-10-21

- Renamed the application to UiPath RPA Project Simulator.
- Reframed the guides and documentation around importing your own project and the needs of BAs, RPA developers, stakeholders, and trainers.
- Allowed the longer app header to wrap and retained existing saved-session and browser-settings compatibility.

## 0.58 — 2026-10-21

- Prepared the public package with generic documentation and clearer LLM endpoint privacy guidance.
- Fixed the GitHub Actions Node.js setup and excluded local production files and credentials.

## 0.57 — 2026-10-21

- Licensed the project under MIT, naming Dragos Marin as copyright holder.
- Added a page-wide, non-overlapping author footer.

## 0.56 — 2026-10-21

- Initial public repository preparation.
- Added publication documentation, static JavaScript validation, and safeguards against accidentally committing imported process material.
- Removed client-specific references from public source comments and product documentation.
