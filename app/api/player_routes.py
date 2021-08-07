from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Player, User
from app import db

player_routes = Blueprint("players", __name__)


@player_routes.route('/<int:id>')
# @login_required
def get_player(id):
    player = Player.query.get(id)
    return player.to_dict() 



@player_routes.route('/')
# @login_required
def get_all():
    players = Player.query.all()
    return jsonify([player.to_dict() for player in players]) 


@player_routes.route('/<int:id>', methods =['put'])
# @login_required
def edit_player(id):

    player = Player.query.get(id)

    games = request.json['games']
    goals = request.json['goals']
    assists = request.json['assists']
    
    player.games = games
    player.goals = goals
    player.assists = assists
    
       
    db.session.commit()
    return player.to_dict()


@player_routes.route('/', methods = ['post'])
#login_required
def new_player():
    
    data = request.json
    new = Player(
                  first_name  = data['first_name'],
                  last_name = data['last_name'],
                  team = data['team'],
                  age = data['age'],
                  position = data['position'],
                  front_photo = data['front_photo'],
                  photo = data['photo']   
    )

    db.session.add(new)
    db.session.commit()
    return new.to_dict() 