import Card from "../atoms/Card";

function StatCard({ label, value }) {
  return (
    <Card>
      <p className="text-sm">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </Card>
  );
}

export default StatCard;
