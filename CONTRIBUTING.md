# Contributing

Use this one shared public repository. Ibrahim should add the other five GitHub usernames in Settings → Collaborators with write access; each member must accept the invitation before pushing.

## Get started

Clone the shared repository using its actual GitHub URL. Use your own Git identity, with an email connected to your own GitHub account. Do not use another student's name/email for commits.

Install the committed dependencies and start the app:

```sh
npm ci
npm run dev
```

The Vite setup and package lockfile are committed. Use the local URL printed by Vite.

## Commit as you complete work

Coordinate direct pushes to `main` with the team. Before starting and before pushing, pull the latest changes. If you have unfinished changes, commit them appropriately or stash them before pulling. Resolve conflicts with the relevant owner; never force-push shared history.

```sh
git pull --rebase origin main
# Implement a small task or related group of tasks; verify it.
git add src/MemberCard.tsx
# Stage any other files you actually changed, including your contribution-log entry.
git commit -m "feat: add typed member card props (tasks 11-14)"

git push origin main
```

Adjust filenames and messages to your actual work. Commit/push working milestones as you finish them. Do not hold the entire completed exercise for one final upload. Do not create empty commits merely to inflate history.

## Author comments

```tsx
// Author: Evander Manna
// Tasks: 10–20
```

For shared edits, retain original authors and add a scoped contributor comment. CSS uses `/* Author: Sonia Etuhoko */`. Starter headers identify assignments only; implemented code and genuine commit history demonstrate cgit pull --rebase origin mainontributions.

Keep `node_modules`, `dist`, local environment files and secrets out of Git. Commit the generated package lockfile so everyone can use `npm ci`.

## Verification and submission

Run `npm run build` after implementation. Check member props/defaults, responsive cards, score increments and zero floor, form submission, adding/removing/toggling members, and combined filtering/search. Record only checks you actually performed.

Update your own section of `CONTRIBUTIONS.md` with tasks, files, real commit links/hashes and verification. Submit the public repository URL on Canvas, and in your individual submission comment state which tasks you completed or significantly contributed to.
