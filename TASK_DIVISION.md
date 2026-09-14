# Task division — six members, 50 tasks

Ibrahim leads setup, coordination, integration, and the final build review. Every task has one primary owner. Counts reflect difficulty and integration effort, so styling and props have more individual steps.

| Member | GitHub | Tasks | Primary authored file | Responsibility |
| --- | --- | --- | --- | --- |
| Ibrahim Salami **(lead)** | @DphenomenalALU | 1–9, 50 | `src/TeamDashboard.tsx` | Project setup, typed dashboard, App integration, final verification |
| Evander Manna | @evand3rr | 10–20 | `src/MemberCard.tsx` | Reusable member cards, typed props, defaults, optional values, initial member list |
| Sonia Etuhoko | @soniaetuhoko | 21–30 | `src/MemberCard.css` | Card styling, conditional classes, typed inline style, responsive dashboard layout |
| Josiane MUKESHIMANA | @Josiane705 | 31–35, 47 | `src/hooks/useTeamScore.ts` | Typed score state and updates; active/inactive toggle integration |
| Irene Winnie | @Winnie-Irene | 36–40, 43 | `src/AddMemberForm.tsx` | Controlled name input, typed events and form submission, adding a member |
| Rwigenza Niyoyandemye | @Rwigenzadavy | 41–42, 44–46, 48–49 | `src/hooks/useMembers.ts` | Member interface and array state, rendering, remove callback, status filter and search |

## Work order and handoffs

1. **Ibrahim, tasks 1–9:** Generate a Vite React + TypeScript starter in a temporary sibling directory and copy its setup into this repository, preserving this README, plans, `.gitignore`, and member files. Install dependencies, clean the starter, create the dashboard, and connect it to `App.tsx`. Run the dev server and verify it in a browser. Commit and push this foundation.
2. **Evander, tasks 10–20:** Implement `MemberCard` and its typed props. Coordinate edits to `TeamDashboard.tsx` with Ibrahim to render multiple cards and then map the initial typed data array. Put initial data in `src/data/members.ts` if useful.
3. **Sonia, tasks 21–30:** Implement `MemberCard.css`; coordinate JSX class and inline-style edits with Evander. Add general layout styling in `src/App.css` and keep card styling separate. Check narrow and wide screens.
4. **Josiane, tasks 31–35:** Implement numeric `teamScore` state and functional score updates in `useTeamScore.ts`, called by `TeamDashboard`; coordinate score display/buttons in the dashboard with Ibrahim. Decrement must stop at zero.
5. **Irene, tasks 36–40:** Implement `AddMemberForm` with controlled input, typed change/submit events, and `preventDefault`. First display the submitted name. **Rwigenza, tasks 41–42:** Define/export `Member` in `src/types/member.ts` and move the initial array into typed state in `useMembers`.
6. **Irene, task 43:** Connect form submission to the add-member function agreed with Rwigenza. **Rwigenza, tasks 44–46:** Connect updated array rendering and typed remove callback to the dashboard/card. **Josiane, task 47:** Add status-toggle behavior with Rwigenza and Evander. **Rwigenza, tasks 48–49:** Add status filtering and controlled name search; both filters should work together.
7. **Ibrahim, task 50:** Integrate all contributions and verify the complete application with the team, including the production build and manual checks.

## Authorship and coordination

Each member has a primary file containing their name. The initial headers designate the intended author; they do not establish that the student has implemented the tasks. A member must make their own commits with their own GitHub account.

Some tasks deliberately touch another person's component. Coordinate before editing shared files, retain existing author credits, and add a scoped `// Contributor: Full Name — tasks ...` comment (CSS uses `/* ... */`). Ibrahim helps integrate; he does not commit under teammates' identities.

## Completion checklist

- [x] Ibrahim: tasks 1–9, 50
- [x] Evander: tasks 10–20
- [x] Sonia: tasks 21–30
- [x] Josiane: tasks 31–35, 47
- [x] Irene: tasks 36–40, 43
- [x] Rwigenza: tasks 41–42, 44–46, 48–49

All tasks 1–50 are implemented and have passed the final integration build and lint review. Each member should still add their own manual verification details to their contribution entry when submitting.
