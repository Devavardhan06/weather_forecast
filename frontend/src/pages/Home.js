import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-400 to-blue-600 text-white">
      <h1 className="text-4xl font-bold mt-10">Real-Time Weather Forecast</h1>
      <SearchBar setWeatherData={setWeatherData} />
      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
};

export default Home;
