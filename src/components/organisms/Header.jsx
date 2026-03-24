import Input from "../atoms/Input.jsx.jsx";

function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">WeatherX</h1>
      <Input placeholder="Search city..." />
    </div>
  );
}

export default Header;
