from flask import Flask, jsonify
import disease_detector
import json

app = Flask(__name__)
image_path = 'test/test/AppleScab1.JPG'

# Load disease_info.json
with open('disease_info.json', 'r') as file:
    dataset_info = json.load(file)

@app.route('/', methods=['GET', 'POST'])
def display_text():
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
