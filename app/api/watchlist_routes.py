from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Watchlist
from app import db

watchlist_routes = Blueprint("watchlists", __name__)


@watchlist_routes.route('/<int:id>')
# @login_required
def get_watchlist(id):
    watchlist = Watchlist.query.filter(Watchlist.id == id).one()
    return watchlist.to_dict()


@watchlist_routes.route('/', methods=['post'])
# @login_required
def add_watchlist():

    data = request.json
    watchlist = Watchlist(**data)
    db.session.add(watchlist)
    db.session.commit()
    return watchlist.to_dict()

@watchlist_routes.route('/<int:id>', methods=['delete'])
# @login_required
def delete_watchlist(id,):
    watchlist = Watchlist.query.get(id)
    db.session.delete(watchlist)
    db.session.commit()
    return watchlist.to_dict()