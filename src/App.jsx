import { useState } from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import { WeatherContextProvider } from "./contexts/WeatherContext.jsx";

function App() {
  return (
    <>
      <WeatherContextProvider>
        {" "}
        <Home />
      </WeatherContextProvider>
    </>
  );
}

export default App;
