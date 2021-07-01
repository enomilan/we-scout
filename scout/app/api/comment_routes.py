from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Comment
from app import db

comment_routes = Blueprint("comments", __name__)


@comment_routes.route('<int:id>')
#@login_required
def get_comment(id):
    comment = Comment.query.get(id)
    return comment.to_dict()


@comment_routes.route('/', methods=['post'])
#@login_required
def post_comment():
    new= Comment(
        user_id=current_user.id,
        player_id=form.data['player_id'],
        comment=form.data['comment'], 
    )

    db.session.add(new)
    db.session.commit()
    return new.to_dict()

@comment_routes.route("/<int:id>", methods=['put'])
#@login_required
def edit_comment(id):
    comment = Comment.query.get(id)
    #get comment = request.json['new']
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()

@comment_routes.route('/<int:id', methods=['delete'])
#@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return comment.to_dict()