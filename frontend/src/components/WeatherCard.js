import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white text-black p-4 rounded-lg mt-6 shadow-lg w-1/3">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
