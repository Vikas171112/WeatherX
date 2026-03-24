import Card from "../components/atoms/Card";
import HourItem from "../molecules/HourItem";

function HourlyForecast() {
  return (
    <Card>
      <h3 className="mb-3">Hourly Forecast</h3>
      <div className="flex gap-4 overflow-x-auto">
        {["Now", "1PM", "2PM", "3PM"].map((t, i) => (
          <HourItem key={i} time={t} temp={30} />
        ))}
      </div>
    </Card>
  );
}

export default HourlyForecast;
