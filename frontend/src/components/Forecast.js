import React, { useState } from "react";

const Forecast = () => {
  const [forecastData, setForecastData] = useState(null);
  const [inputData, setInputData] = useState({ temperature: "", humidity: "", pressure: "", wind_speed: "" });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const getForecast = async () => {
    const response = await fetch("http://localhost:5000/api/predict-weather", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    });
    const data = await response.json();
    setForecastData(data);
  };

  return (
    <div className="p-6 bg-white text-black rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Weather Forecast</h2>
      <div className="flex flex-col space-y-2">
        <input type="number" name="temperature" placeholder="Current Temp (°C)" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="humidity" placeholder="Humidity (%)" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="pressure" placeholder="Pressure (hPa)" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="wind_speed" placeholder="Wind Speed (m/s)" onChange={handleChange} className="p-2 border rounded" />
        <button onClick={getForecast} className="bg-blue-500 text-white px-4 py-2 rounded">Get Forecast</button>
      </div>
      {forecastData && (
        <div className="mt-4">
          <p>Predicted Temperature: {forecastData.temperature}°C</p>
          <p>Predicted Humidity: {forecastData.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Forecast;
