from .db import db

class Stat(db.Model):
    __tablename__='stats'

    id = db.Column(db.Integer, primary_key = True)
    player_id = db.Column(db.Integer, db.ForeignKey('players.id'), nullable=False)
    games = db.Column(db.Text)
    goals = db.Column(db.Integer)
    xga = db.Column(db.Integer)

    player = db.relationship('Player')

    def to_dict(self):
        return {
            "id": self.id,
            "player_id": self.player_id,
            "games": self.games,
            "goals": self.goals,
             "xga" : self.xga
      
    }