# v0.61 — Flexible PDD imports and readable scenario walkthroughs

This release combines the PDD import improvements in v0.60 with readable, source-preserving scenario descriptions in v0.61.

## Changes

- Read legacy English/Romanian PDD tables and lane-oriented BPMN element tables using semantic column matching and current/future-state scope.
- Preserve typed process elements, canonical exceptions, separate state transitions, human-task requirements, rules and source references, with a visible PDD readout.
- Map requirements to non-REFramework entry-workflow calls as well as REFramework Process.xaml calls; keep requirements in saved sessions and bounded local-AI context.
- Use activity-focused scenario titles, business-language branch assumptions and expandable complete source conditions without requiring an LLM.
- Preserve branch polarity and selected routes through AI-label toggles; include assumptions and source expressions in timeline exports.
- Describe missing mappings and missing Throw evidence as limited review findings, not proof of incomplete implementation.
- Add 40 dependency-free PDD and scenario regression tests to CI.

## Walkthrough

The attached **2:46, 1080p MP4** imports a synthetic, intentionally unfinished Customer Order Processing project. It demonstrates PDD/source review, readable routes, real local-AI Brief me / Explain / Ask responses, reusable outputs, and training examples at the end.

AI-generated narration and AI-assisted production are disclosed throughout. English captions are embedded; a separate SRT is attached. The closing narration contains no author credit.

See the [walkthrough guide](https://github.com/Dragos-cloud/uipath-rpa-project-simulator/blob/v0.61/docs/demo/README.md) for chapters, source-check examples and limitations.

## Scope and compatibility

The simulator does not execute UiPath workflows or prove implementation completeness. AI responses may overstate functionality and must be checked against sources. Human waits and persistence are not fully modelled for imports; playback timings are estimates, not measured performance. Existing session schema 1 and JSON PDD imports remain supported; re-import projects to recover source conditions truncated in older saved sessions.

The synthetic project source, private code-evaluation notes, credentials and production intermediates are not included. The app remains a static `index.html` with no build step.
