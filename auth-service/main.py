from flask import Flask
from flask import request
import jwt
import time

app = Flask(__name__)

users = [
    {
        'username': 'james',
        'password': 'whatever'
    },
    {
        'username': 'person1',
        'password': 'password1'
    }
]

@app.route('/')
def hello_world():
    return '<p>Hello, World!</p>'

@app.route('/jwt-token') #/jwt-token?username=james?password=whatever
def jwt_issuer():
    username = request.args.get('username')
    password = request.args.get('password')
    # match the username and password to users
    for user in users:
        if(user['username'] == username and user['password'] == password):
            #return (username + " " + password)
            now = int(time.time())
            return jwt.encode({"application": "jst-issuer"}, 'my-super-super-secret', algorithm='HS256', headers = {"iss": username, "iat": now, "exp": now + 300})

    # generate JWT token

    # return the JWT token
    return {'status': 'Unauthorized'}, 401


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)