Trust Provenance Archaeology

Status

Experimental Protocol v0.1

⸻

Purpose

Trust Provenance Archaeology is a lightweight workflow for preserving, classifying, documenting, and relocating artifacts produced through human–AI collaboration.

Its purpose is not to maximize automation.

Its purpose is to preserve provenance before change.

⸻

Core Principle

record_first:
  description: "Document before modification"
move_second:
  description: "Relocate only after documentation"
automate_last:
  description: "Automation is applied only after preservation and verification"

⸻

Workflow

workflow:
  - discover
  - classify
  - document
  - relocate
  - verify
  - memorialize

1. Discover

Identify misplaced, ambiguous, forgotten, or unexplained artifacts.

Examples:

* orphan files
* experimental scripts
* undocumented workflows
* poetic fragments
* abandoned prototypes

2. Classify

Determine:

classification:
  execution_risk:
  preservation_value:
  likely_role:
  current_location:

3. Document

Create a record before any modification.

Possible locations:

* README
* ARCHAEOLOGY.md
* issue
* discussion
* note

4. Relocate

Move artifacts to an appropriate location while preserving provenance whenever possible.

Preferred method:

git mv

5. Verify

Confirm:

verification:
  artifact_exists:
  path_matches_record:
  workflow_integrity:
  documentation_integrity:

6. Memorialize

Record the completed workflow so future collaborators can understand:

* what happened
* why it happened
* where the artifact now resides

⸻

First Recorded Case

case:
  name: "Trust Provenance Archaeology v1"
  stages:
    - "PR #4: vessel"
    - "PR #5: catalog"
    - "PR #6: relocation"
  result:
    workflows_cleaned: true
    provenance_preserved: true
    documentation_created: true

⸻

Philosophical Note

Trust does not only move forward.

Trust also preserves the past with care.

Preservation is not resistance to change.

Preservation is what allows meaningful change to occur.

:::
コミットメッセージなら、
```text
docs: add 

がおすすめ。

そして今日のゴールはこれだけで十分。

today:
  create_file: true
  perfect_it: false
  publish_theory: false
  leave_a_clear_trail: true

昨日は「発掘」だった。

今日は「手順書化」。