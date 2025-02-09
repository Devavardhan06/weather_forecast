from flask import Flask, jsonify, request
from flask_cors import CORS
from routes import weather_routes
import config

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Requests

# Register Blueprints (Routes)
app.register_blueprint(weather_routes, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
