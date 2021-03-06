from .db import db


class Player(db.Model):
    __tablename__='players'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    team = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    position = db.Column(db.String, nullable=False)
    front_photo = db.Column(db.Text)
    photo = db.Column(db.Text)
    video1 = db.Column(db.Text)
    video2 = db.Column(db.Text)
    video3 = db.Column(db.Text)
    video4 = db.Column(db.Text)
    games = db.Column(db.Integer)
    goals = db.Column(db.Integer)
    assists = db.Column(db.Integer)
   
    comments = db.relationship('Comment')

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "team": self.team,
            "age": self.age,
            "position": self.position,
            "front_photo": self.front_photo,
            "photo":self.photo,
            "video1":self.video1,
            "video2":self.video2,
            "video3":self.video3,
            "video4":self.video4,
            "games": self.games,
            "goals": self.goals,
            "assists": self.assists
             
        }