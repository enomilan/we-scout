from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Player, User
from app import db

player_routes = Blueprint("players", __name__)


@player_routes.route('/<int:id')
@login_required
def get_player(id):
    player = Player.query.filter(Player.id == id).one()
    return jsonify([player.to_dict() for player in players]) 