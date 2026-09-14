// Author: Ibrahim Salami
// Tasks 4–5, 8–9: typed dashboard component with multiple JSX elements.
// Contributor: Josiane MUKESHIMANA — task 32: display teamScore and score buttons.
// Contributor: Sonia Etuhoko — tasks 29–30: dashboard layout classes
import type { ReactElement } from 'react';
import { useTeamScore } from './hooks/useTeamScore';

export default function TeamDashboard(): ReactElement {
  const { teamScore, increaseScore, decreaseScore } = useTeamScore();


  return (
    <main className="team-dashboard">
      <h1>Coding Party — Team Dashboard</h1>
      <p>
        We are a team of six learning React and TypeScript by building a shared
        dashboard. Our group application will bring together member profiles,
        team progress, and interactive tools as we complete the coding tasks.
      </p>
      <p>Team score: {teamScore}</p>            
      <button onClick={increaseScore}>+1</button>  
      <button onClick={decreaseScore}>-1</button>
      <div className="member-grid">
        {/* MemberCards render here when the list is wired */}
      </div>
    </main>
  );
}