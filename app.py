from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def simple_api():
    return jsonify({"message": "Hello from Flask API!"})

if __name__ == '_main_':
    app.run(debug=True)