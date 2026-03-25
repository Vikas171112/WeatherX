import { useState } from "react";
import Input from "../atoms/Input.jsx";
import { fetchSuggestions } from "../../services/fetchSuggestions.js";
import SuggestionsList from "../molecules/SuggestionList.jsx";
import { useWeather } from "../../contexts/WeatherContext.jsx";
import { fetchWeather } from "../../services/fetchWeather.js";

function Header() {
  const {
    searchTerm,
    setWeather,
    selectedCity,
    setSearchTerm,
    suggestions,
    setSuggestions,
    setSelectedCity,
  } = useWeather();
  async function handleChange(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value) return setSuggestions([]);

    const data = await fetchSuggestions(value);
    setSuggestions(data.results || []);
  }

  async function handleSelect(city) {
    setSelectedCity(city);
    setSearchTerm(city.name);
    console.log(selectedCity, "From header");
    const weather = await fetchWeather(
      selectedCity?.latitude,
      selectedCity?.longitude,
    );
    setWeather(weather);

    setSuggestions([]);
  }
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">WeatherX</h1>
      <Input placeholder="Search city..." onChange={handleChange} />
      {suggestions && (
        <SuggestionsList suggestions={suggestions} onSelect={handleSelect} />
      )}
    </div>
  );
}

export default Header;
