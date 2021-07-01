from app.models.db import db, Watchlist 

def seed_watchlist():

    watchlist1= Comment(
        user_id='1',
        player_id='1',
        )

    

    db.session.add(watchlist1)
    db.session.commit()


def undo_watchlist(

):
    db.session.execute('TRUNCATE watchlists RESTART IDENTITY CASCADE;')
    db.session.commit()