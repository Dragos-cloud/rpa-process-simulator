# RPA Process Simulator

A dependency-free, browser-based simulator for reviewing UiPath RPA processes. It turns workflows and process-design material into an interactive process map that can be played step by step, tested against exceptions, compared with a PDD, and used to draft a PDD.

The application is a single static page: no build, server, or account is required.

## Run it

Download or clone the repository, then open [index.html](index.html) in a current desktop browser.

For a hosted demo, publish the `main` branch with GitHub Pages using the repository root as the source.

## What it does

- Simulates happy paths, retries, recovery, terminal failures, human gates, and branching scenarios.
- Imports UiPath `.xaml`, `.cs`, `project.json`, PDD (`.json` or `.docx`), and BPMN files in the browser.
- Flags mismatches between documented and implemented steps and exceptions.
- Exports process models, diagrams, timelines, gap reports, and generated PDD drafts.
- Includes generic invoice-processing and employee-onboarding samples.
- Optionally connects to a user-configured OpenAI-compatible local endpoint, such as LM Studio, for explanations and briefing text.

## Privacy and data handling

The simulator processes imported files in the browser. It does not use a hosted backend. If you enable the LLM feature, the app sends only the context needed for that prompt to the endpoint you configure. Use a local endpoint for sensitive process material, and do not enable **Remember this token** on shared browser profiles.

This repository intentionally ignores imported workflows, PDDs, BPMN files, generated session exports, and Word documents. Commit only anonymised fixtures that you have permission to publish.

## Repository layout

- [index.html](index.html) — complete application (HTML, CSS, JavaScript, and generic samples).
- [PRODUCT_HANDBOOK.md](PRODUCT_HANDBOOK.md) — detailed product and maintenance reference.
- [CHANGELOG.md](CHANGELOG.md) — public release notes.

## Quality checks

The GitHub Actions workflow verifies that the embedded JavaScript compiles. Before releasing, also check both sample processes, human gates, exception recovery, session save/load, and document exports in your target browsers. Test project imports with anonymised fixtures only.

## Limitations

Simulation timings are estimates, not production benchmarks. Imported models and PDD mappings need human review; coded workflows and unsupported control-flow constructs may not be fully represented. AI explanations and generated documents are drafts and can contain mistakes. See the handbook for the detailed limitations.

## License

Licensed under the [MIT License](LICENSE). Redistributions must retain the copyright and permission notice for Dragos Marin.
