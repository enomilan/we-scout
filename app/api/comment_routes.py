from flask import Blueprint, jsonify
from flask.globals import request
from flask_login import login_required, current_user
from app.models import Comment, Player
from app import db

comment_routes = Blueprint("comments", __name__)



@comment_routes.route('/<int:player_id>')
#@login_required
def get_comment(player_id):

    player = Player.query.get(player_id)
    return {comment.id:comment.to_dict() for comment in player.comments}
    

@comment_routes.route('/', methods=['post'])
@login_required
def post_comment():


    data = request.json
    new = Comment(user = current_user,
                  player_id  = data['playerId'],
                  comment = data['postNewComment']   
    )

    db.session.add(new)
    db.session.commit()
    return new.to_dict()

@comment_routes.route("/<int:id>", methods=['put'])
@login_required
def edit_comment(id):
    new = Comment.query.get(id)
    if new.user_id != current_user.id:
        return {}
    comment = request.json['comment']
    new.comment = comment
    
    db.session.commit()
    return new.to_dict()

@comment_routes.route('/<int:id>', methods=['delete'])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    if comment.user_id != current_user.id:
        return {}
    db.session.delete(comment)
    db.session.commit()
    return {}