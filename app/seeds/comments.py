from app.models import db, Comment

def seed_comments():

    comment1= Comment(
        user_id='1',
        player_id='1',
        comment='One of the best holding midfielders',
        rating='5'
    )

    comment2= Comment(
        user_id='1',
        player_id='5',
        comment='Another overpaid player for Man Utd',
        rating='5'
    )

    comment3= Comment(
        user_id='2',
        player_id='2',
        comment='This guy is World Class, best midfielder in the game today',
        rating='1'
    )

    # comment placeholder
    # comment1= Comment(
    #     user_id='',
    #     player_id='',
    #     comment='',
    #     rating=''
    # )


    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.commit()


def undo_comments(

):
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()