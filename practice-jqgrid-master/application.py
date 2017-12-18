from flask import Flask, request, send_from_directory

app = Flask(__name__, static_url_path='')

@app.route('/static/<path:path>')
def send_js(path):
    return send_from_directory('static', path)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
