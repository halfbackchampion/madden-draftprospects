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

@app.route("/<int:id>", methods = ["GET"])
def get_position(id):
    position = list(filter(lambda p: p["id"] == id, data["positions"]))
    return jsonify(position[0])