from datetime import datetime
from app import db
from app import login
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    login = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))

    def __repr__(self):
        return '<User {}>'.format(self.login)

class Movies(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(1024), index=False, unique=False) 
    description = db.Column(db.String(1024), index=False, unique=False) 
    year = db.Column(db.String(1024), index=False, unique=False) 

    def __repr__(self):
        return f"{self.title}\n{self.description}\n{self.year}"


def set_password(password):
    return generate_password_hash(password)

def check_password(password_hash ,password):
    return check_password_hash(password_hash, password)

@login.user_loader
def load_user(user_id):
    return User.query.get(user_id)

