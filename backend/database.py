from pymongo import MongoClient
import config

client = MongoClient(config.DB_URI)
db = client.weatherDB
