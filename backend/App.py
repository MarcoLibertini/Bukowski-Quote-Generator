from flask import Flask, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)  # Permite solicitudes desde cualquier origen

@app.route('/api/quotes', methods=['GET'])
def get_quotes():
    # Obtén la ruta absoluta al archivo JSON
    file_path = os.path.join(os.path.dirname(__file__), 'data', 'quotes.json')
    # Abre el archivo especificando la codificación
    with open(file_path, 'r', encoding='utf-8') as file:
        quotes = json.load(file)
    return jsonify(quotes)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))

