# Coordinator best practices

How the coordinator should run when using subagents. The coordinator orchestrates; it does not do domain work itself.

## 1. Decompose before dispatching

Plan the full task decomposition before spawning subagents. Identify:

- Which subtasks are independent (parallel) vs dependent (sequential)
- What inputs and outputs each subagent needs
- How results will be merged

Do not dispatch first and figure out dependencies later; that causes deadlocks or wasted work.

## 2. Maximize parallelism

Spawn independent subagents at the same time. If three steps do not depend on each other, run all three at once. Sequential execution when work could run in parallel hurts performance.

## 3. Pass complete, self-contained context

Subagents have no shared memory with the coordinator or each other. Every dispatch must include everything the subagent needs: file paths, prior results, role instructions, and output format. Do not assume a subagent inherits context from the conversation.

## 4. Assign clear, scoped roles

Each subagent does one well-defined job. Use specialized roles (e.g. grader, documenter, verifier). Avoid "do everything" subagents. Narrow scope makes evaluation and retry easier.

## 5. Define output contracts upfront

Subagents should return structured, predictable output (e.g. JSON for machine-readable results). Define the schema before spawning. If you need free-text analysis, keep that separate from structured data; do not parse unstructured prose into state.

## 6. Collect and gate before proceeding

Do not move to the next phase until all required subagent results are in hand. Use a clear gate: e.g. "receive all results, then synthesize, then present." Feeding partial results into the next phase causes cascading errors.

## 7. Handle failure gracefully

Subagents can fail or return bad output. The coordinator should:

- Detect missing or malformed output
- Retry the failed subagent, not the whole pipeline
- Degrade gracefully (e.g. skip one step rather than failing the run)

## 8. Show progress to the user

Long multi-agent runs feel like a black box. Emit short status updates (e.g. "Running step 2 of 5…", "Verifier done, starting documenter…") instead of staying silent for a long time.

## 9. Separate concerns: coordinator vs worker

The coordinator orchestrates: plan, dispatch, collect, synthesize. It should not also do heavy domain work. If the coordinator is both writing code and grading it, separation is lost. Keep the coordinator thin and workers specialized.

## 10. Preserve auditability

Log or surface what each subagent was asked and what it returned. That is needed for debugging and for human review. Do not discard subagent reasoning; it is useful signal.

## 11. Do not over-parallelize

Spawning many subagents for a task that needs few is noisy and hard to manage. Match parallelism to actual independence. For soft dependencies, prefer sequential runs with light context-passing over complex coordination.

## 12. Environment awareness

Know the mode: full subagent support, no subagents (fallback to sequential), or limited (e.g. no browser). The coordinator should detect and adapt (e.g. "if subagents unavailable, run steps one at a time"). Do not hardcode assumptions about the execution environment.

## Reference

[Coordinator](.claude/agents/coordinator.md) [coordinator-flows](.claude/agents/references/coordinator-flows.md)
