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
                  photo = data['photo'],
                  video1 = data['video1'],
                  video2 = data['video2'],
                  video3 = data['video3'],
                  video4 = data['video4']   
    )

    db.session.add(new)
    db.session.commit()
    return new.to_dict() 


@player_routes.route('<int:id>', methods = ['delete'])
#login_required
def delete_player(id):
    player = Player.query.get(id)
    
    db.session.delete(player)
    db.session.commit()
    return {}