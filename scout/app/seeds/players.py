from app.models import db, Player

def seed_player():

    player1 = Player(
        first_name='Ismael',
        last_name='Bennacer',
        team='Ac Milan',
        age='23',
        position='midfielder',
        value = "30000000",
        photo="https://weallfollowunited.com/wp-content/uploads/2020/06/Bennacer-1536x1104.jpg",
        video1= 'https://www.youtube.com/watch?v=eHYvzoeIQPE',
        video2= '',
        video3= '',
        video4= '',
    )


    player2 = Player(
        first_name='Kevin',
        last_name='De Bruyne',
        team='Manchester City',
        age='30',
        position='midfielder',
        value = "100000000",
        photo="https://i.guim.co.uk/img/media/2f8843558cff27f98219c2d21803b4d7ac93c2e8/0_138_4260_2556/master/4260.jpg?width=620&quality=85&auto=format&fit=max&s=2cb0d696a2387bdb0c2e872f804541c2",
        video1= 'https://www.youtube.com/watch?v=C9wDzdRKxQc&t=118s',
        video2= '',
        video3= '',
        video4= '',
    )


    player3 = Player(
        first_name='Zlatan',
        last_name='Ibrahimovic',
        team='Ac Milan',
        age='39',
        position='forward',
        value = "5000000",
        photo="https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1317341678_469634_h5wali.jpg",
        video1= 'https://www.youtube.com/watch?v=Gnyk38xxS5Y',
        video2= '',
        video3= '',
        video4= '',
    )


    player4 = Player(
        first_name='Pedri',
        last_name='Gonzalez',
        team='Barcelona',
        age='18',
        position='midfielder',
        value = "80000000",
        photo="https://ballgist.com/wp-content/uploads/2021/03/pedri-barca-match.jpeg",
        video1= 'https://www.youtube.com/watch?v=sxGDfuVuP6I&t=103s',
        video2= '',
        video3= '',
        video4= '',
    )



    player5 = Player(
        first_name='Jadon',
        last_name='Sancho',
        team='Manchester United',
        age='21',
        position='forward',
        value = "90000000",
        photo="https://www.thesportsbank.net/wp-content/uploads/2021/06/jadon-sancho-borussia.jpg",
        video1= 'https://www.youtube.com/watch?v=1RgTO89udnI',
        video2= '',
        video3= '',
        video4= '',
    )


# Player placeholder
# player = Player(
#         first_name='',
#         last_name='',
#         team='',
#         age='',
#         position='',
#         value = "",
#         photo="",
#         video1= '',
#         video2= '',
#         video3= '',
#         video4= '',
#     )



    db.session.add(player1)
    db.session.add(player2)
    db.session.add(player3)
    db.session.add(player4)
    db.session.add(player5)


    db.session.commit()


def undo_player(

):
    db.session.execute('TRUNCATE players RESTART IDENTITY CASCADE;')
    db.session.commit()