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

    #Working method 1
    # player_id = request.json['player_id']
    # games = request.json['games']
    # goals = request.json['goals']
    # assist = request.json['assist']
    # xG = request.json['xG']

    # stats = Stat(player_id = player_id
    # , games = games, goals = goals, assist = assist, xG = xG)


    #Working method 2
    data = request.json
    stats = Stat(**data)


    db.session.add(stats)
    db.session.commit()
    return stats.to_dict()


@stat_routes.route('/<int:id>', methods=['put'])
#@login_required
def edit_stat(id):

    stat = Stat.query.get(id)

    games = request.json['games']
    goals = request.json['goals']
    assist = request.json['assist']
    xG = request.json['xG']

    stat.games = games
    stat.goals = goals
    stat.assist = assist
    stat.xG = xG

       
    db.session.commit()
    return stat.to_dict()


    # HELLO, THERE'S NO DELETING THE STATS.  
    # CAN'T DELETE HISTORY.