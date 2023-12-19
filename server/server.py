from flask import Flask
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

@app.route("/hello")
def hello():
    return "Hello Sameer"


if __name__=="__main__":
    app.run(debug=True)