import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export function WeatherContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <WeatherContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        suggestions,
        setSuggestions,
        selectedCity,
        setSelectedCity,
        weather,
        setWeather,
        loading,
        setLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
export const useWeather = () => useContext(WeatherContext);
