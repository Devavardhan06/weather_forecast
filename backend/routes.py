from flask import Blueprint, jsonify, request
import requests
from database import db
from ml_model import predict_weather
import config

weather_routes = Blueprint('weather_routes', __name__)

# Fetch real-time weather data
@weather_routes.route('/current-weather', methods=['GET'])
def get_current_weather():
    city = request.args.get('city', 'London')
    api_url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={config.WEATHER_API_KEY}&units=metric"
    
    response = requests.get(api_url)
    if response.status_code == 200:
        data = response.json()
        return jsonify(data)
    else:
        return jsonify({"error": "City not found"}), 404

# Predict future weather using ML model
@weather_routes.route('/predict-weather', methods=['POST'])
def forecast_weather():
    input_data = request.json
    prediction = predict_weather(input_data)
    return jsonify(prediction)
