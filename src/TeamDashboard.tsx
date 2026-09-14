// Author: Ibrahim Salami
// Tasks 4–5, 8–9: typed dashboard component with multiple JSX elements.
// Contributor: Josiane MUKESHIMANA — task 32: display teamScore and score buttons.
// Contributor: Sonia Etuhoko — tasks 29–30: dashboard layout classes
// Contributor: Rwigenza Davy — tasks 45–46: connect useMember to TeamDashboard and render Member and pass remove callback to MemberCard.
// Contributor: Ibrahim Salami — task 50: final integration, accessibility, and review.

import type { ReactElement } from 'react';
import { useTeamScore } from './hooks/useTeamScore';
import { useMembers } from './hooks/useMembers';
import MemberCard from './MemberCard';
import AddMemberForm from './AddMemberForm';

export default function TeamDashboard(): ReactElement {
  const { teamScore, increaseScore, decreaseScore } = useTeamScore();
  const {
    members,
    filter,
    searchTerm,
    addMember,
    removeMember,
    toggleStatus,
    setFilterType,
    setSearchTerm,
  } = useMembers();

  return (
    <main className="team-dashboard">
      <h1>Coding Party — Team Dashboard</h1>
      <p>
        We are a team of six learning React and TypeScript by building a shared
        dashboard. Our group application will bring together member profiles,
        team progress, and interactive tools as we complete the coding tasks.
      </p>
      <section className="dashboard-toolbar" aria-label="Team controls">
        <div className="score-panel">
          <h2>Team score</h2>
          <p aria-live="polite">{teamScore}</p>
          <div className="button-row">
            <button type="button" onClick={increaseScore}>
              Increase score
            </button>
            <button type="button" onClick={decreaseScore}>
              Decrease score
            </button>
          </div>
        </div>

        <AddMemberForm onAddMember={addMember} />
      </section>

      <section className="member-controls" aria-label="Member filters">
        <label htmlFor="member-search">Search members</label>
        <input
          id="member-search"
          type="search"
          value={searchTerm}
          placeholder="Search by name"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <div className="button-row" aria-label="Filter member status">
          <button
            type="button"
            aria-pressed={filter === 'all'}
            onClick={() => setFilterType('all')}
          >
            All
          </button>
          <button
            type="button"
            aria-pressed={filter === 'active'}
            onClick={() => setFilterType('active')}
          >
            Active
          </button>
          <button
            type="button"
            aria-pressed={filter === 'inactive'}
            onClick={() => setFilterType('inactive')}
          >
            Inactive
          </button>
        </div>
      </section>

      <div className="member-grid" aria-live="polite">
        {members.length > 0 ? (
          members.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              tasksCompleted={member.tasksCompleted}
              isActive={member.isActive}
              bio={member.bio}
              onRemove={() => removeMember(member.id)}
              onToggleStatus={() => toggleStatus(member.id)}
            />
          ))
        ) : (
          <p className="empty-state">No members match the current filters.</p>
        )}
      </div>
    </main>
  );
}
