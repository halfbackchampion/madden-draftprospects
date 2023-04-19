from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
jsonFile = open("../db.json", "r")
data = json.load(jsonFile)

@app.route("/")
def home_page():
    return jsonify(data["positions"])