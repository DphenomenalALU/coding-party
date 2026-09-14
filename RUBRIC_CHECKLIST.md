# Rubric evidence checklist

<!-- Author: Ibrahim Salami — task 50 final integration evidence. -->

This checklist records the implementation evidence a reviewer can inspect in the public repository. It describes completed behavior and the commits that introduced it; each student should still report only their own work in Canvas.

## Task coverage

| Tasks | Evidence in the implementation |
| --- | --- |
| 1–9 | Vite React + TypeScript setup, clean entry page, typed `TeamDashboard`, `App` import/render, heading, description, and multiple JSX elements. |
| 10–20 | Reusable `MemberCard`, typed `name`/`role`/`tasksCompleted`/`isActive`/`bio` props, default task count, conditional status and bio, six-member typed array, and `.map()` rendering. |
| 21–30 | Separate `MemberCard.css`, semantic class names, active/inactive classes, inline style, responsive media queries, and the `member-grid` CSS layout. |
| 31–35 | Typed numeric `teamScore` state, displayed score, functional increment, and decrement clamped at zero. |
| 36–40 | Controlled name input, typed `ChangeEvent` and `FormEvent`, `preventDefault()`, empty-name guard, and visible submitted-name feedback. |
| 41–42 | Exported `Member` interface and typed `useState<Member[]>` member state. |
| 43–47 | Typed add callback, automatic rendering of new members, remove callback, status toggle, and status reflected in both text and styling. |
| 48–49 | All/Active/Inactive controls and a controlled, case-insensitive name search that work together. |
| 50 | `TeamDashboard` owns the hook instances and composes the score, form, filters, cards, callbacks, empty state, accessibility labels, and final validation. |

## Rubric evidence

- **Task completion and functionality:** `npm run build`, `npm run lint`, and browser smoke checks pass. The smoke checks cover score increment/decrement, status toggle, inactive filtering, search, adding a member, visible submission feedback, and six-member rendering.
- **React and TypeScript quality:** Components have explicit React element return types where needed; shared data uses the exported `Member` interface; state, callback props, form events, controlled inputs, stable keys, and functional state updates are typed; component CSS remains separate from page CSS.
- **GitHub practices, authorship, and collaboration:** The repository is public, `node_modules` and build output are ignored, the lockfile is committed, work appears in incremental member-authored commits, and source files retain `// Author:` / contributor comments. `CONTRIBUTIONS.md` maps each member to tasks, files, and commit hashes.

## Submission checks

Before submitting, confirm the repository URL is public, invite the five teammates as collaborators if needed, and have each student copy their own completed task list and actual verification details into their Canvas comment. Do not claim work a student did not perform.
