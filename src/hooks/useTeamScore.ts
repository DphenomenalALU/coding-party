// Author: Josiane MUKESHIMANA
// Assigned tasks: 31–35, 47
// Scope: Typed score state and updates; active/inactive toggle integration
// Contributor: Ibrahim Salami — task 50 final integration review.

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
