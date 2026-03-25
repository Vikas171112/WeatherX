import { useWeather } from "../../contexts/WeatherContext";

function CurrentWeather() {
  const { weather, selectedCity } = useWeather();
  console.log(weather);

  if (!weather) return <p>No data</p>;

  return (
    <div>
      <h2>{selectedCity?.name}</h2>
      <p>{weather.current?.temperature_2m}°C</p>
    </div>
  );
}

export default CurrentWeather;
