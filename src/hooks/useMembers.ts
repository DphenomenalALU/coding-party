// Author: Rwigenza Niyoyandemye
// Assigned tasks: 41–42, 44–46, 48–49
// Scope: Member interface and array state, rendering, remove callback, status filter and search
// Contributor: Josiane MUKESHIMANA — task 47: toggle member active/inactive status
import { useState } from 'react';
import type { Member } from '../types/member';

const initialMembers: Member[] = [
  {
    id: 'ibrahim-salami',
    name: 'Ibrahim Salami',
    role: 'Team lead and developer',
    tasksCompleted: 9,
    isActive: true,
    bio: 'Coordinates the integration and final review for the coding party.',
  },
  {
    id: 'evander-manna',
    name: 'Evander Manna',
    role: 'React component developer',
    tasksCompleted: 20,
    isActive: true,
    bio: 'Owns the reusable MemberCard component and typed member props.',
  },
  {
    id: 'irene-winnie',
    name: 'Irene Winnie',
    role: 'Form and interaction developer',
    tasksCompleted: 5,
    isActive: true,
  },
  {
    id: 'sonia-etuhoko',
    name: 'Sonia Etuhoko',
    role: 'UI and responsive styling developer',
    tasksCompleted: 10,
    isActive: true,
  },
  {
    id: 'josiane-mukeshimana',
    name: 'Josiane MUKESHIMANA',
    role: 'State and status developer',
    tasksCompleted: 6,
    isActive: true,
  },
  {
    id: 'rwigenza-niyoyandemye',
    name: 'Rwigenza Niyoyandemye',
    role: 'Member state developer',
    tasksCompleted: 9,
    isActive: true,
  },
];

export type FilterType = 'all' | 'active' | 'inactive';

export function useMembers() {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [filter, setFilter] = useState<FilterType>('all');
  const [search, setSearch] = useState('');

  const filteredMembers = members.filter((member) => {
    const matchesFilter =
      filter === 'active'
        ? member.isActive
        : filter === 'inactive'
          ? !member.isActive
          : true;
    const matchesSearch = member.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  function addMember(newMember: Member): void {
    setMembers((previousMembers) => [...previousMembers, newMember]);
  }

  function removeMember(memberId: string): void {
    setMembers((previousMembers) =>
      previousMembers.filter((member) => member.id !== memberId),
    );
  }

  function toggleStatus(memberId: string): void {
    setMembers((previousMembers) =>
      previousMembers.map((member) =>
        member.id === memberId
          ? { ...member, isActive: !member.isActive }
          : member,
      ),
    );
  }

  return {
    members: filteredMembers,
    addMember,
    removeMember,
    toggleStatus,
    setFilterType: setFilter,
    setSearchTerm: setSearch,
  };
}
