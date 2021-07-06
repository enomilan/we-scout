from flask.globals import request
from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Stat
from app import db

stat_routes = Blueprint("stats", __name__)


@stat_routes.route('/<int:id>')
#@login_required
def get_stat(id):
    stat = Stat.query.get(id)
    return stat.to_dict()


@stat_routes.route('/', methods=['POST'])
#@login_required
def post_stat():

    player_id = request.json['player_id']
    games = request.json['games']
    goals = request.json['goals']
    assist = request.json['assist']
    xG = request.json['xG']

    # player_id = request.get_json('id')
    # games = request.get_json('games')
    # goals = request.get_json('goals')
    # assist = request.get_json('assist')
    # xG = request.get_json('xG')

    stats = Stat(player_id, games, goals, assist, xG)

    # stats = Stat(**request.json)

    db.session.add(stats)
    db.session.commit
    return jsonify(stats)


@stat_routes.route('/<int:id>', methods=['put'])
#@login_required
def edit_stat():

    return