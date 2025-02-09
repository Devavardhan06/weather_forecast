import numpy as np
import tensorflow as tf
import pickle

# Load Pretrained Model
model = tf.keras.models.load_model("models/weather_model.h5")
scaler = pickle.load(open("models/scaler.pkl", "rb"))

def predict_weather(input_data):
    # Normalize input
    input_data_scaled = scaler.transform([input_data])
    prediction = model.predict(input_data_scaled)
    return {"temperature": prediction[0][0], "humidity": prediction[0][1]}
