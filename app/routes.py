from flask import render_template
from app import app
from flask import request, jsonify, make_response
from flask_login import current_user, login_user
from app.models import User, Movies, set_password, check_password, db
import json 


@app.route('/')
def start():
    return render_template('index.html')

@app.route('/login', methods=['POST', "GET"])
def login():
    form = request.data 
    user_data = json.loads(form) # Password, login, mail

    if len(user_data) == 3: 
        login = user_data["login"]
        password = user_data["password"]
        email = user_data["email"]

        if db.session.query(User).filter_by(login=login, email=email).scalar() is None: 

            password_hash = set_password(password)
            new_user = User(login=login, password_hash=password_hash, email=email)
            db.session.add(new_user)
            db.session.commit()

            return "True"

        else: 
            return "User is already registered"

    elif len(user_data) == 2: 
        password = user_data["password"]
        email = user_data["email"]
        user = User.query.filter_by(email=email).first()
        print(user)

        if user is not None: 
            if check_password(user.password_hash, password): 
                login_user(user)

                return "True"

            else: 
                return "Wrong password"
        
        else: 
            return "This login does not exist"


@app.route('/posts', methods=['POST', "GET"])
def print_posts(): 
    argument = request.args.get('id')

    if argument is None: 

        films = []
        film = db.session.query(Movies).all()
        number = 0
        film = list(film)
        for elem in film: 
            number += 1
            elem = str(elem)
            elem = elem.split("\n")
            film = (
                {        
                "id": number,
                "title": elem[0],
                "url": number,
                "description": elem[1], 
                "year": elem[2]
                    }
                )
            films.append(film)

        return json.dumps(films, ensure_ascii=False, indent=2, sort_keys=True).encode('utf8')

    else: 
        film = db.session.query(Movies).filter(Movies.id == argument).all()
        film = list(film)
        for elem in film: 
            elem = str(elem)
            elem = elem.split("\n")
            film = (
                {        
                "id": argument,
                "title": elem[0],
                "url": argument,
                "description": elem[1], 
                "year": elem[2]
                    }
                )
            return json.dumps(film, ensure_ascii=False).encode('utf8')
        