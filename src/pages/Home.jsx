import StatCard from "../molecules/StatCard";
import CurrentWeather from "../organisms/CurrentWeather";
import Header from "../organisms/Header";
import HourlyForecast from "../organisms/HourlyForecast";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 p-6 text-white">
      <Header />

      <CurrentWeather />

      <div className="grid grid-cols-3 gap-4 my-6">
        <StatCard label="Humidity" value="60%" />
        <StatCard label="Wind" value="15 km/h" />
        <StatCard label="Pressure" value="1012 hPa" />
      </div>

      <HourlyForecast />
    </div>
  );
}

export default Home;
