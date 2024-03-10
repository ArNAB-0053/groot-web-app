from flask import Flask, request, jsonify
from flask_cors import CORS
import disease_detector
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load disease_info.json
with open('disease_info.json', 'r') as file:
    dataset_info = json.load(file)

@app.route('/', methods=['GET','POST'])
def display_disease():
    if 'image' not in request.files:
        return jsonify({"error": "No image provided"})

    image_file = request.files['image']
    if image_file.filename == '':
        return jsonify({"error": "No image selected"})

    image_path = 'temp.jpg'  # Temporary file path
    image_file.save(image_path)

    # Perform disease detection
    model_prediction = disease_detector.predict_disease_from_image(image_path)

    # Retrieve information about the predicted disease
    disease_info = dataset_info.get(model_prediction, {})

    # Prepare response
    result = {
        "disease": {
            "class": model_prediction,
            "name": disease_info.get('name', ''),
            "symptoms": disease_info.get('symptoms', ''),
            "management": disease_info.get('management', '')
        }
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=3000)
