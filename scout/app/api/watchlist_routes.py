from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Watchlist
from app import db

watchlist_routes = Blueprint("watchlists", __name__)


@watchlist_routes.route('/<int:id>')
# @login_required
def get_watchlist(id):
    watchlist = Watchlist.query.filter(Watchlist.user_id == id).all()
    return watchlist.to_dict()


@watchlist_routes.route('/add', methods=['post'])
# @login_required
def add_watchlist():

    watchlist = Watchlist(**request.json)
    db.session.add(watchlist)
    db.session.commit()
    return watchlist.to_dict()

@watchlist_routes.route('/delete/<int:id>', methods=['post'])
# @login_required
def delete_watchlist(id,):
    watchlist = Watchlist.query.get(id)
    db.session.delete(watchlist)
    db.session.commit()
    return watchlist.to_dict()