// Author: Ibrahim Salami
// Tasks 4–5, 8–9: typed dashboard component with multiple JSX elements.
// Author: Josiane MUKESHIMANA
// Task 31 :added teamScore state
// Contributor: Sonia Etuhoko — tasks 29–30: dashboard layout classes
import type { ReactElement } from 'react';
import { useState } from 'react';

export default function TeamDashboard(): ReactElement {
  const [teamScore] = useState<number>(0);

  return (
    <main className="team-dashboard">
      <h1>Coding Party — Team Dashboard</h1>
      <p>
        We are a team of six learning React and TypeScript by building a shared
        dashboard. Our group application will bring together member profiles,
        team progress, and interactive tools as we complete the coding tasks.
      </p>
      <p>Team score: {teamScore}</p>
      <div className="member-grid">
        {/* MemberCards render here when the list is wired */}
      </div>
    </main>
  );
}