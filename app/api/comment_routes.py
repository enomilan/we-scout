from flask import Blueprint, jsonify
from flask.globals import request
from flask_login import login_required, current_user
from app.models import Comment
from app import db

comment_routes = Blueprint("comments", __name__)


@comment_routes.route('/')
#@login_required
def get_comment():
    comment = Comment.query.all
    return comment.to_dict()


@comment_routes.route('/', methods=['post'])
#@login_required
def post_comment():


    data = request.json
    new = Comment(**data)

    db.session.add(new)
    db.session.commit()
    return new.to_dict()

@comment_routes.route("/<int:id>", methods=['put'])
#@login_required
def edit_comment(id):
    new = Comment.query.get(id)

    comment = request.json['comment']
    new.comment = comment
    
    db.session.commit()
    return new.to_dict()

@comment_routes.route('/<int:id>', methods=['delete'])
#@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return comment.to_dict()