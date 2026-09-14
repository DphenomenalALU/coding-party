// Author: Ibrahim Salami
// Tasks 4–5, 8–9: typed dashboard component with multiple JSX elements.
// Contributor: Josiane MUKESHIMANA — task 32: display teamScore and score buttons.
// Contributor: Sonia Etuhoko — tasks 29–30: dashboard layout classes
// Contributor: Rwigenza Davy — tasks 45–46: connect useMember to TeamDashboard and render Member and pass remove callback to MemberCard.

import type { ReactElement } from 'react';
import { useTeamScore } from './hooks/useTeamScore';
import { useMembers } from './hooks/useMembers';
import MemberCard from './MemberCard';
import AddMemberForm from './AddMemberForm';

export default function TeamDashboard(): ReactElement {
  const { teamScore, increaseScore, decreaseScore } = useTeamScore();
  const { members, addMember, removeMember } = useMembers();
  
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
        {
          members.map((member) => (
  <MemberCard
    key={member.id}
    name={member.name}
    role={member.role}
    tasksCompleted={member.tasksCompleted}
    isActive={member.isActive}
    bio={member.bio}
    onRemove={() => removeMember(member.id)}
    onToggleStatus={() => {}}
  />
))}
        <AddMemberForm onAddMember={addMember} />
      </div>
    </main>
  );
}