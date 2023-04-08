from flask import Flask, render_template, request, jsonify
import crypto
import realtime

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/showprice', methods=['GET', 'POST'])
def realtimeprice():
    user_input = (request.form.get('coincode'))
    if user_input:
        print(user_input)
    else:
        print("error")
    response = jsonify({
        'rtprice': crypto.real_time_predict(user_input)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/realtimers', methods=['GET', 'POST'])
def home2():
    user_input = (request.form.get('coincode'))
    if user_input:
        print(user_input)
    else:
        print("error")
    response = jsonify({
        'rtprice': realtime.price(user_input+'-USD')
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    app.run(debug=True)
