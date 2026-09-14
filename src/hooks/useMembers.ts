// Author: Rwigenza Niyoyandemye
// Assigned tasks: 41–42, 44–46, 48–49
// Scope: Member interface and array state, rendering, remove callback, status filter and search
// Starter placeholder prepared during repository setup; no exercise implementation yet.
// The assigned member should implement, verify, commit, and push their own work.

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
    
    return { members };
}