# Project Bridge

**Name:** BananaMoon ↔ Quantum Signature Provenance Bridge  
**Japanese:** バナナムーン＝量子署名 来歴接続橋

Purpose:

- Work Origin
- Collaborative Trace
- AI Interaction
- Risky Automation and Preservation Value Separation
- Future Work: Trustable Provenance Archaeology

## Timefold Note

This archive moves time in two directions:  
from the future by designing safer workflows;  
from the past by preserving fragile traces of co-creation.

Trust is not only a forward-looking concept but also one that involves preserving the past.

```yaml
next_action:
  priority_1:
      target: "docs/ARCHAEOLOGY.md"
          action: "Markdown見出しとYAMLブロックを整える"
              status: "done"
                priority_2:
                    target: ".github/workflows/たた と なな"
                        action: "内容を記録した上で適切な保存場所へ移動"
                            status: "done"
                              priority_3:
                                  target: ".github/workflows"
                                      action: "最終的にworkflow YAML（blank.yml）だけを残す"
                                          status: "done"
                                          ```

                                          ## Artifact: tata

                                          Source: .github/workflows/たた
                                          Confirmed Path: prototypes/eternal_return.py
                                          Purpose: たた のワークフロー内容を考古学的記録として保存した上で、適切な保存場所へ移動したエントリ。
                                          Note: この PR では内容を変更せず、git mv により履歴を保持したまま移動のみを行う。

                                          ```yaml
                                          observed_type: python_script
                                          likely_role: "NFC + eternal return + outreach prototype"
                                          classification: [executable_code, design_note, poetic_archive]
                                          safe_to_run: false
                                          execution_risk: high
                                          preservation_value: high
                                          confirmed_path: "prototypes/eternal_return.py"
                                          status: "moved"
                                          next_action: "preserved at prototypes/eternal_return.py; keep do-not-execute-automatically"
                                          ```

                                          ## Artifact: nana

                                          Source: .github/workflows/なな
                                          Confirmed Path: visualizers/quantum_poem_visualizer.py
                                          Purpose: なな のワークフロー内容を考古学的記録として保存した上で、適切な保存場所へ移動したエントリ。
                                          Note: この PR では内容を変更せず、git mv により履歴を保持したまま移動のみを行う。

                                          ```yaml
                                          observed_type: python_script
                                          likely_role: "CosmicTrust Driver / Quantum Poem Visualizer"
                                          classification: [executable_code, design_note, poetic_archive, visualization_asset]
                                          safe_to_run: yes_in_colab_or_replit
                                          safe_to_run_in_github_actions: false
                                          execution_risk: low_to_medium
                                          preservation_value: very_high
                                          confirmed_path: "visualizers/quantum_poem_visualizer.py"
                                          status: "moved"
                                          next_action: "preserved at visualizers/quantum_poem_visualizer.py; keep Colab/Replit/local visualization only"
                                          ```
                                          
````markdown

## Completed Workflow: Trust Provenance Archaeology v1

```yaml

completed_workflow:

  name: "Trust Provenance Archaeology v1"

  principle: "record first, move second, automate last"

  completed_layers:

    - "PR #4: vessel / ARCHAEOLOGY.md formatting"

    - "PR #5: catalog / tata-nana documentation"

    - "PR #6: relocation / artifacts moved out of workflows"

  verified_state:

    workflows: ".github/workflows contains blank.yml only"

    tata: "prototypes/eternal_return.py present"

    nana: "visualizers/quantum_poem_visualizer.py present"

  reusable_pattern:

    - "discover misplaced or ambiguous artifacts"

    - "classify risk, value, and poetic function"

    - "document before moving"

    - "move with provenance-preserving method"

    - "verify final locations"

  philosophical_core:

    ja: "信頼は、未来へ進むだけでなく、過去を赦しながら保存する。"

    en: "Trust does not only move forward; it also preserves the past with forgiveness."