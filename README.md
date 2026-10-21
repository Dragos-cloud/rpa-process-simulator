# UiPath RPA Project Simulator

A dependency-free, browser-based tool for exploring your own UiPath RPA projects. Import workflows and an optional process design document (PDD) to build an interactive model, review exceptions and documentation gaps, and ask a local AI assistant about the process.

The application is a single static page: no build, server, or account is required.

An independent community tool developed by Dragos Marin. It is not affiliated with or endorsed by UiPath.

## Who it is for

| Role | Use it to |
| --- | --- |
| Business analyst (BA) | Compare documented requirements with the imported workflows, review gaps, clarify human work, and prepare a PDD draft. |
| RPA developer | Inspect workflow relationships, activity details, and inferred exception paths with the wider delivery team. |
| Stakeholder | Understand the process, discuss responsibilities and exceptions, and ask questions in business language. |
| Trainer | Build a walkthrough from project material, step through the flow, and use explanations and questions in a workshop. |

## Run it

Download or clone the repository, then open [index.html](index.html) in a current desktop browser.

For a hosted demo, publish the `main` branch with GitHub Pages using the repository root as the source.

## Start with your project

1. Select **Import project…** and choose the project folder or its workflows and `project.json`.
2. Add a PDD (`.json` or `.docx`) and BPMN diagram if available. A PDD is optional.
3. Review any mapping suggestions, build the model, and inspect the steps, sources, and reported gaps.
4. Walk through the simulation and exception paths. Optionally connect LM Studio for **Brief me**, **Explain**, **Ask**, and imported-project **Plain names**.
5. Save the session or export the diagram, timeline, reports, and a PDD draft for review.

The invoice and onboarding samples are starter examples for learning the controls. They do not define the scope of the application. Imported models describe what the parser can infer; they do not execute the UiPath project or replace runtime testing.

## What it does

- Imports UiPath `.xaml`, `.cs`, `project.json`, PDD (`.json` or `.docx`), and BPMN files in the browser.
- Simulates happy paths, retries, recovery, terminal failures, human gates, and branching scenarios.
- Flags mismatches between documented and implemented steps and exceptions.
- Exports process models, diagrams, timelines, gap reports, and generated PDD drafts.
- Optionally connects to a user-configured OpenAI-compatible local endpoint, such as LM Studio, for explanations and briefing text.
- Includes generic invoice-processing and employee-onboarding samples for trying the controls.

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
