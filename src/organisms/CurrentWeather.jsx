import Card from "../components/atoms/Card";

function CurrentWeather() {
  return (
    <Card>
      <h2 className="text-xl">Mithapur</h2>
      <p className="text-5xl font-bold">32°C</p>
      <p>Feels like 35°C • Sunny</p>
    </Card>
  );
}

export default CurrentWeather;
