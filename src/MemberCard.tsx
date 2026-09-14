// Author: Evander Manna
// Assigned tasks: 10–20
// Scope: Reusable member cards, typed props, defaults, optional values, initial member list
// Contributor: Sonia Etuhoko — task 21: import MemberCard.css

import "./MemberCard.css";

interface MemberCardProps {
  name: string;
  role: string;
  tasksCompleted?: number; // numeric - optional pattern reused for default below
  isActive: boolean; //
  bio?: string; // — optional prop
  onRemove: () => void; // — typed callback prop
  onToggleStatus: () => void; // — typed callback prop
}

function MemberCard({
  name,
  role,
  tasksCompleted = 0,
  isActive,
  bio,
  onRemove,
  onToggleStatus,
}: MemberCardProps): JSX.Element {
  // Task III.6 — dynamic class based on isActive
  const statusClass = isActive ? "member-card--active" : "member-card--inactive";

  return (
    // className attributes; multiple classes on one element
    // one inline style (typed via React's style attribute)
    <div className={`member-card ${statusClass}`} style={{ borderRadius: "10px" }}>
      <h3 className="member-card__name">{name}</h3>
      <p className="member-card__role">{role}</p>
      <p className="member-card__tasks">Tasks completed: {tasksCompleted}</p>

      {/* conditional rendering of Active/Inactive */}
      <p className="member-card__status">Status: {isActive ? "Active" : "Inactive"}</p>

      {/* optional rendering, only shown when bio is provided */}
      {bio && <p className="member-card__bio">{bio}</p>}

      <div className="member-card__actions">
        <button onClick={onToggleStatus}>
          Mark {isActive ? "Inactive" : "Active"}
        </button>
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
}

export default MemberCard;
