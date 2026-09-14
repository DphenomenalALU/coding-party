// Author: Josiane MUKESHIMANA
// Assigned tasks: 31–35, 47
// Scope: Typed score state and updates; active/inactive toggle integration
// Starter placeholder prepared during repository setup; no exercise implementation yet.
// The assigned member should implement, verify, commit, and push their own work.

import { useState } from 'react';

export function useTeamScore() {
  const [teamScore, setTeamScore] = useState<number>(0);

  const increaseScore = () => {
    setTeamScore((prevScore) => prevScore + 1);
  };

  const decreaseScore = () => {
    setTeamScore((prevScore) => (prevScore > 0 ? prevScore - 1 : 0));
  };

  return { teamScore, increaseScore, decreaseScore };
}
