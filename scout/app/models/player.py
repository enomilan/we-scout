from .db import db


class Player(db.Model):
    __tablename__='players'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    team = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    position = db.Column(db.String, nullable=False)
    value = db.Column(db.Integer, nullable=False)
    photo = db.Column(db.Text)


    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "team": self.team,
            "age": self.age,
            "position": self.position,
            "value": self.value,
            "photo":self.photo
        }