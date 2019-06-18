from flask import url_for, render_template

from app import app

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    pass

@app.route('/registration', methods=['POST'])
def registration():
    pass



# @app.route('/login', methods=['POST'])
# def login():
#     pass

# @app.route('/registration', methods=['POST'])
# def registration():
#     pass