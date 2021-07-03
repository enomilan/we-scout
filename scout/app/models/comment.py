from .db import db

class Comment(db.Model):
    __tablename__='comments'

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    player_id = db.Column(db.Integer, db.ForeignKey('players.id'), nullable=False)
    comment = db.Column(db.Text)
    rating = db.Column(db.Integer)

    user = db.relationship('User')
    player = db.relationship('Player')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "player_id": self.player_id,
            "comment": self.comment,
            "rating": self.rating
      
    }