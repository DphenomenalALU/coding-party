// Author: Evander Manna
// Assigned tasks: 10–20
// Scope: Reusable member cards, typed props, defaults, optional values, initial member list

interface MemberCardProps {
  name: string;
  role: string;
}

function MemberCard({ name, role }: MemberCardProps): JSX.Element {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default MemberCard;
