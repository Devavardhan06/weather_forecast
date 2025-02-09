import React, { useState } from "react";

const SearchBar = ({ setWeatherData }) => {
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    const response = await fetch(`http://localhost:5000/api/current-weather?city=${city}`);
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="mt-6 flex">
      <input
        type="text"
        placeholder="Enter City Name"
        className="p-2 text-black rounded-l-lg"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather} className="bg-yellow-500 px-4 py-2 rounded-r-lg">Search</button>
    </div>
  );
};

export default SearchBar;
