// Author: Rwigenza Niyoyandemye
// Assigned tasks: 41–42, 44–46, 48–49
// Scope: Member interface and array state, rendering, remove callback, status filter and search
// Starter placeholder prepared during repository setup; no exercise implementation yet.
// The assigned member should implement, verify, commit, and push their own work.
// Contributor: Josiane MUKESHIMANA — task 47: toggle member active/inactive status
import { useState } from 'react';
import type { Member } from '../types/member';

const initialMembers: Member[] = [

  { id: '1',
    name: 'Ibrahim',
    role: 'Developer',
    tasksCompleted: 8,
    isActive: true,
},

  { id: '2',
    name: 'Irene',
    role: 'Designer',
    tasksCompleted: 3,
    isActive: false,
},

  { id: '3',
    name: 'Evander',
    role: 'Manager',
    tasksCompleted: 8,
    isActive: true,
  },
];

export function useMembers() {
    const [members, setMembers] = useState<Member[]>(initialMembers);

    function addMember(newMember: Member) {
        setMembers((prevMembers) => [...prevMembers, newMember]);
    }

    function removeMember(memberId: string) {
        setMembers((prevMembers) => prevMembers.filter((member) => member.id !== memberId));
    }

    function toggleStatus(memberId: string) {
        setMembers((prevMembers) =>
            prevMembers.map((member) =>
                member.id === memberId
                    ? { ...member, isActive: !member.isActive }
                    : member
            )
        );
    }

    return { members, addMember, removeMember, toggleStatus };
}

    