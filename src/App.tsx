// Author: Ibrahim Salami
// Tasks 6–7: import and render the team's dashboard.
// Contributor: Sonia Etuhoko — tasks 28–30: import App.css for layout
import type { ReactElement } from 'react';
import './App.css';
import TeamDashboard from './TeamDashboard';

export default function App(): ReactElement {
  return <TeamDashboard />;
}
