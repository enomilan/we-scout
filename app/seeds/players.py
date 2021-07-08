from app.models import db, Player

def seed_player():

    player1 = Player(
        first_name='Ismael',
        last_name='Bennacer',
        team='AC Milan',
        age='23',
        position='midfielder',
        front_photo = "https://img.a.transfermarkt.technology/portrait/big/351816-1594276829.jpg",
        photo="https://weallfollowunited.com/wp-content/uploads/2020/06/Bennacer-1536x1104.jpg",
        video1= 'https://www.youtube.com/watch?v=eHYvzoeIQPE',
        video2= 'https://www.youtube.com/watch?v=3_evx_qstRw',
        video3= 'https://www.youtube.com/watch?v=5hbrL9pYW2A',
        video4= 'https://www.youtube.com/watch?v=j7_3o6DQR_8',
    )


    player2 = Player(
        first_name='Kevin',
        last_name='De Bruyne',
        team='Manchester City',
        age='30',
        position='midfielder',
        front_photo = "https://img.a.transfermarkt.technology/portrait/big/88755-1515761259.jpg",
        photo="https://i.guim.co.uk/img/media/2f8843558cff27f98219c2d21803b4d7ac93c2e8/0_138_4260_2556/master/4260.jpg?width=620&quality=85&auto=format&fit=max&s=2cb0d696a2387bdb0c2e872f804541c2",
        video1= 'https://www.youtube.com/watch?v=aF4hbJTnxP8',
        video2= 'https://www.youtube.com/watch?v=LvNzqVj4fEY',
        video3= 'https://www.youtube.com/watch?v=bxUrexL8jdA',
        video4= 'https://www.youtube.com/watch?v=sE8tlVhaPgE',
    )


    player3 = Player(
        first_name='Zlatan',
        last_name='Ibrahimovic',
        team='AC Milan',
        age='39',
        position='forward',
        front_photo = "https://img.a.transfermarkt.technology/portrait/big/3455-1579506060.jpg",
        photo="https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1317341678_469634_h5wali.jpg",
        video1= 'https://www.youtube.com/watch?v=Gnyk38xxS5Y',
        video2= 'https://www.youtube.com/watch?v=ntohaMEcPL0',
        video3= 'https://www.youtube.com/watch?v=JNMXtAvJuV4',
        video4= 'https://www.youtube.com/watch?v=8gcISEkOYmk',
    )


    player4 = Player(
        first_name='Pedri',
        last_name='Gonzalez',
        team='FC Barcelona',
        age='18',
        position='midfielder',
        front_photo = "https://img.a.transfermarkt.technology/portrait/big/683840-1620304992.jpg",
        photo="https://ballgist.com/wp-content/uploads/2021/03/pedri-barca-match.jpeg",
        video1= 'https://www.youtube.com/watch?v=sxGDfuVuP6I&',
        video2= 'https://www.youtube.com/watch?v=POApW1otM4s',
        video3= 'https://www.youtube.com/watch?v=_4kJtzddk7U',
        video4= 'https://www.youtube.com/watch?v=8uV8TSqRTSk',
    )



    player5 = Player(
        first_name='Jadon',
        last_name='Sancho',
        team='Manchester United',
        age='21',
        position='forward',
        front_photo = "https://img.a.transfermarkt.technology/portrait/big/401173-1623778009.jpg",
        photo="https://www.thesportsbank.net/wp-content/uploads/2021/06/jadon-sancho-borussia.jpg",
        video1= 'https://www.youtube.com/watch?v=1RgTO89udnI',
        video2= 'https://www.youtube.com/watch?v=--0bCF-iK2E',
        video3= 'https://www.youtube.com/watch?v=fpwF0RUQCe4',
        video4= 'https://www.youtube.com/watch?v=9fJebQIySik',
    )


    player6 = Player(
            first_name='Simon',
            last_name='Kjaer',
            team='AC Milan',
            age='32',
            position='defender',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/48859-1578912922.jpg",
            photo="https://cdn.mos.cms.futurecdn.net/txVSAZZDo3Fwz9qpSYSupU-1200-80.jpg",
            video1= 'https://www.youtube.com/watch?v=_hCTTrkA7Lg',
            video2= 'https://www.youtube.com/watch?v=VZ2DR0dcZmE',
            video3= 'https://www.youtube.com/watch?v=BdobiNOka-E',
            video4= 'https://www.youtube.com/watch?v=c8gpHvKwVF8',
        )

    player7 = Player(
            first_name='Kylian',
            last_name='Mbappe',
            team='Paris Saint Germain',
            age='22',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/342229-1602849394.jpg",
            photo="https://statsports.com/wp-content/uploads/2019/08/Mbappe.jpg",
            video1= 'https://www.youtube.com/watch?v=tWj_Y4QBMk8',
            video2= 'https://www.youtube.com/watch?v=oDxb9YnT5lk',
            video3= 'https://www.youtube.com/watch?v=jvksPgJXtYM',
            video4= 'https://www.youtube.com/watch?v=De5zXoiHVkg',
        )

    player8 = Player(
            first_name='Neymar',
            last_name='Santos',
            team='Paris Saint Germain',
            age='29',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/68290-1602849593.jpg",
            photo="https://images.wsj.net/im-344997",
            video1= 'https://www.youtube.com/watch?v=rjvpX-EJTV4',
            video2= 'https://www.youtube.com/watch?v=6Jtn-H2mX4g',
            video3= 'https://www.youtube.com/watch?v=6c4bzF1_-Ms',
            video4= 'https://www.youtube.com/watch?v=nDXYDF-s62s',
        )


    player9 = Player(
            first_name='Robert',
            last_name='Lewandowski',
            team='Bayern Munchen',
            age='32',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/38253-1540568609.jpg",
            photo="https://img.fcbayern.com/image/upload/t_cms-9x12/f_auto/w_660,h_880,c_fill/v1615064858/cms/public/images/fcbayern-com/homepage/saison-20-21/galerien/spiele/FCB-Dortmund/FCBBVB_35_don_060321.jpg",
            video1= 'https://www.youtube.com/watch?v=ImWdyZZV2-0',
            video2= 'https://www.youtube.com/watch?v=RMQdjlUx5sM',
            video3= 'https://www.youtube.com/watch?v=r4tJZOpj3f0',
            video4= 'https://www.youtube.com/watch?v=TthnLjCrMTg',
        )

    player10 = Player(
            first_name='Lionel',
            last_name='Messi',
            team='FC Barcelona',
            age='34',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/28003-1604164452.png",
            photo="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ifYHJAghgK9s/v1/1000x-1.jpg",
            video1= 'https://www.youtube.com/watch?v=G4wTERfoPfA',
            video2= 'https://www.youtube.com/watch?v=tmxfp3uPgNs',
            video3= 'https://www.youtube.com/watch?v=vmQAdQX-7ns',
            video4= 'https://www.youtube.com/watch?v=8V2NX7Kpd2Y',
        )


    player11 = Player(
            first_name='Harry',
            last_name='Kane',
            team='Tottenham Hotspurs',
            age='28',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/132098-1623778520.jpg",
            photo="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(webp):focal(1270x390:1272x388)/origin-imgresizer.eurosport.com/2021/03/11/3010113-61757988-2560-1440.jpg",
            video1= 'https://www.youtube.com/watch?v=ln6WBPwHe9E',
            video2= 'https://www.youtube.com/watch?v=d5vvT1MWx9g',
            video3= 'https://www.youtube.com/watch?v=TpoE3tYDneQ',
            video4= 'https://www.youtube.com/watch?v=3WLq4Tzxz5Y',
        )


    player12 = Player(
            first_name='Karim',
            last_name='Benzema',
            team='Real Madrid',
            age='33',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/18922-1544774342.jpg",
            photo="https://cdn.cnn.com/cnnnext/dam/assets/210519100554-benzema-exlarge-169.jpg",
            video1= 'https://www.youtube.com/watch?v=JyUlzwOKtNY',
            video2= 'https://www.youtube.com/watch?v=imh1tFWlXck',
            video3= 'https://www.youtube.com/watch?v=X1oGxJGS3qY',
            video4= 'https://www.youtube.com/watch?v=qvizO47-MjE',
        )


    player13 = Player(
            first_name='Antoine',
            last_name='Griezmann',
            team='FC Barcelona',
            age='30',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/125781-1564143733.jpg",
            photo="https://i.guim.co.uk/img/media/180e6272b0c0450e34aae0f437780cf946d0ec01/0_275_4434_2660/master/4434.jpg?width=620&quality=85&auto=format&fit=max&s=07ff60240fc4bfbfdaf6ac8cd1cdf6e5",
            video1= 'https://www.youtube.com/watch?v=t-oCq6SRNuw',
            video2= 'https://www.youtube.com/watch?v=jc5KNrNLI0Q',
            video3= 'https://www.youtube.com/watch?v=K5goymI6zpA',
            video4= 'https://www.youtube.com/watch?v=rdr5kBkQkxM',
        )


    player14 = Player(
            first_name='Ruben',
            last_name='Dias',
            team='Manchester City',
            age='24',
            position='defender',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/258004-1572340728.jpg",
            photo="https://cdn.vox-cdn.com/thumbor/mERZqTW2uXnc-Ge3RwdpcSS5LgI=/0x0:3813x2530/920x613/filters:focal(1454x252:2064x862):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68891095/1304401273.0.jpg",
            video1= 'https://www.youtube.com/watch?v=RUmcjd_ttHo',
            video2= 'https://www.youtube.com/watch?v=11tY2NSwthE',
            video3= 'https://www.youtube.com/watch?v=1GzWjpi-3ss',
            video4= 'https://www.youtube.com/watch?v=VFNl6k_u1no',
        )


    player15 = Player(
            first_name='Nicolo',
            last_name='Barella',
            team='FC Internazionale',
            age='24',
            position='midfielder',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/255942-1582023619.jpg",
            photo="https://d3nfwcxd527z59.cloudfront.net/content/uploads/2020/11/04100134/nicolo-barella-inter-milan.jpg",
            video1= 'https://www.youtube.com/watch?v=ob31XkfaTY8',
            video2= 'https://www.youtube.com/watch?v=Tmrfr9x-IGM',
            video3= 'https://www.youtube.com/watch?v=MIuHb3rPZbs',
            video4= 'https://www.youtube.com/watch?v=hSKTa3SKbl0',
        )

    player16 = Player(
            first_name='Federico',
            last_name='Chiesa',
            team='Juventus',
            age='23',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/341092-1596098386.jpg",
            photo="https://static.independent.co.uk/2021/06/26/22/newFile.jpg",
            video1= 'https://www.youtube.com/watch?v=_hj-ju5ybF4',
            video2= 'https://www.youtube.com/watch?v=iAX1Yt2ouqY',
            video3= 'https://www.youtube.com/watch?v=GKmkL9uoRXs',
            video4= 'https://www.youtube.com/watch?v=tQ-k5kbBRYU',
        )


    player17 = Player(
            first_name='Phil',
            last_name='Foden',
            team='Manchester City',
            age='21',
            position='midfielder',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/406635-1594986905.jpg",
            photo="https://storage.googleapis.com/afs-prod/media/d7847f50e0674a789263c19f1d3a663a/800.jpeg",
            video1= 'https://www.youtube.com/watch?v=fBNua3K6pHo',
            video2= 'https://www.youtube.com/watch?v=tQsx_nfePTQ',
            video3= 'https://www.youtube.com/watch?v=TI5e6Mu4qjU',
            video4= 'https://www.youtube.com/watch?v=5up_o7mQpk4',
        )


    player18 = Player(
            first_name='Manuel',
            last_name='Locatelli',
            team='Sassuolo',
            age='23',
            position='midfielder',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/265088-1594639764.jpg",
            photo="https://cdn-media.theathletic.com/cdn-cgi/image/fit=cover,width=700,height=466/7SXbt6kDx1Yl_7SXbt6kDx1Yl_lqFQwYJ1yStO_original_1440x960.png",
            video1= 'https://www.youtube.com/watch?v=TaxT6cftMHY',
            video2= 'https://www.youtube.com/watch?v=d5hd4Qo3hN8',
            video3= 'https://www.youtube.com/watch?v=I2zGo76VxDs',
            video4= 'https://www.youtube.com/watch?v=KlfRCY6TJO8',
        )



    player19 = Player(
            first_name='Theo',
            last_name='Hernandez',
            team='AC Milan',
            age='23',
            position='defender',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/339808-1595938750.jpg",
            photo="https://i0.wp.com/sportsandworld.com/wp-content/uploads/2021/03/theo-hernandez-may-be-disqualified-for-criticizing-the-judge.jpg",
            video1= 'https://www.youtube.com/watch?v=Gd0AiEi_T68',
            video2= 'https://www.youtube.com/watch?v=Zu2_tFQnmPE',
            video3= 'https://www.youtube.com/watch?v=j9Z2YccpNfw',
            video4= 'https://www.youtube.com/watch?v=7cSvTKc82FU',
        )



    player20 = Player(
            first_name='Cristiano',
            last_name='Ronaldo',
            team='Juventus',
            age='37',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/8198-1568120625.jpg",
            photo="https://www.theportugalnews.com/uploads/news/medium/ronaldo1.webp",
            video1= 'https://www.youtube.com/watch?v=f3Ori8w8zQ0',
            video2= 'https://www.youtube.com/watch?v=2tfsoV0OISs',
            video3= 'https://www.youtube.com/watch?v=FLV1z9BWvyc',
            video4= 'https://www.youtube.com/watch?v=EE_flMRqg00',
        )


    player21 = Player(
            first_name='Franck',
            last_name='Kessie',
            team='AC Milan',
            age='24',
            position='midfielder',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/294808-1594276547.jpg",
            photo="https://tbrfootball.com/static/uploads/27/2020/03/GettyImages-1201596329.jpg",
            video1= 'https://www.youtube.com/watch?v=z8RGwHyUsGI',
            video2= 'https://www.youtube.com/watch?v=L0iTKeWnmH4',
            video3= 'https://www.youtube.com/watch?v=iP9GpVSov2s',
            video4= 'https://www.youtube.com/watch?v=qAMAnTFTaCc',
        )   
      
    player22 = Player(
            first_name='Heung-min',
            last_name='Son',
            team='Tottenham Hotspur',
            age='28',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/91845-1599987413.jpg",
            photo="https://static01.nyt.com/images/2019/05/31/sports/30onsoccer-sonbig/merlin_150648111_d176eede-676a-4459-9d0e-66ef7ebf6d10-superJumbo.jpg",
            video1= 'https://www.youtube.com/watch?v=BKInZGOqcZ4',
            video2= 'https://www.youtube.com/watch?v=nGrMoKKfu5I',
            video3= 'https://www.youtube.com/watch?v=j1ErELFiju4',
            video4= 'https://www.youtube.com/watch?v=7rxtNm-oJbQ',
        )

    player23 = Player(
            first_name='Stefan',
            last_name='De Vrij',
            team='FC Internazionale',
            age='29',
            position='defender',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/111196-1593165111.jpg",
            photo="https://sempreinter.com/wp-content/uploads/2021/04/Stefan-de-Vrij-3-e1618148438143.jpg",
            video1= 'https://www.youtube.com/watch?v=8AOoahTJ89g',
            video2= 'https://www.youtube.com/watch?v=nO2YPFWpc7I',
            video3= 'https://www.youtube.com/watch?v=Qhd74wMqbsA',
            video4= 'https://www.youtube.com/watch?v=AkZT2QbV3CI',
        )

    player24 = Player(
            first_name='Matthijs',
            last_name='De Ligt',
            team='FC Juventus',
            age='22',
            position='defender',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/326031-1568111537.jpg",
            photo="https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Foldjuve.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1315921672-850x560.jpeg",
            video1= 'https://www.youtube.com/watch?v=8T3QHCzlQyY',
            video2= 'https://www.youtube.com/watch?v=U_f2AqQO-ug',
            video3= 'https://www.youtube.com/watch?v=bT01DVFCm30',
            video4= 'https://www.youtube.com/watch?v=jIHHWyS6Pzs',
        )


    player25 = Player(
            first_name='Frenkie',
            last_name='De Jong',
            team='FC Barcelona',
            age='24',
            position='midfielder',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/326330-1599987876.jpg",
            photo="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat(jpg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1186410342%2F0x0.jpg",
            video1= 'https://www.youtube.com/watch?v=Ibn5STF9gjM',
            video2= 'https://www.youtube.com/watch?v=g6nh5VhTlMA',
            video3= 'https://www.youtube.com/watch?v=GVfvNh_fTIk',
            video4= 'https://www.youtube.com/watch?v=VyQd4umN3KQ',
        )


    player26 = Player(
            first_name='Luis',
            last_name='Suarez',
            team='Atletico Madrid',
            age='34',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/44352-1453896733.jpg",
            photo="https://i.cbc.ca/1.6037800.1621720414!/fileImage/httpImage/1319486509.jpg",
            video1= '',
            video2= '',
            video3= '',
            video4= '',
        )    


    player27 = Player(
            first_name='Erling',
            last_name='Haaland',
            team='Borussia Dortmund',
            age='20',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/418560-1607454139.jpg",
            photo="https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https%3A%2F%2Ftheprideoflondon.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1231288974-850x560.jpeg",
            video1= 'https://www.youtube.com/watch?v=BNVK-b9GcoQ',
            video2= 'https://www.youtube.com/watch?v=NLFKcTxp8xY',
            video3= 'https://www.youtube.com/watch?v=LP9_Bj78osM',
            video4= 'https://www.youtube.com/watch?v=Quy2oo9eyvk',
        )  

    player28 = Player(
            first_name='Romelu',
            last_name='Lukaku',
            team='FC Internazionale',
            age='28',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/96341-1596033546.jpg",
            photo="https://sempreinter.com/wp-content/uploads/2021/05/Inter-Romelu-Lukaku-1-scaled-e1620379890530.jpg",
            video1= 'https://www.youtube.com/watch?v=wXWWpErJTpM',
            video2= 'https://www.youtube.com/watch?v=MhdGNSlTzz8',
            video3= 'https://www.youtube.com/watch?v=X6IVSyvnr4I',
            video4= 'https://www.youtube.com/watch?v=WTZpDaEZ7eo',
        )   

    player29 = Player(
            first_name='Kai',
            last_name='Havertz',
            team='FC Chelsea',
            age='22',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/309400-1620646226.jpg",
            photo="https://c.ndtvimg.com/2020-09/s2n13d1g_kai-havertz-twitter_625x300_17_September_20.jpg",
            video1= 'https://www.youtube.com/watch?v=uTyJRcOFeco',
            video2= 'https://www.youtube.com/watch?v=QZIRiEPtVm0',
            video3= 'https://www.youtube.com/watch?v=ks3l4OkpCGA',
            video4= 'https://www.youtube.com/watch?v=XkrnjGLOra8',
        )  

    player30 = Player(
            first_name='Christian',
            last_name='Pulisic',
            team='FC Chelsea',
            age='22',
            position='forward',
            front_photo = "https://img.a.transfermarkt.technology/portrait/big/315779-1534236289.jpg",
            photo="https://sbisoccer.com/wp-content/uploads/sites/89/2021/05/Christian-Pulisic-05102021.jpg",
            video1= 'https://www.youtube.com/watch?v=3JkNOILPyAE',
            video2= 'https://www.youtube.com/watch?v=R4RXYvdgID8',
            video3= 'https://www.youtube.com/watch?v=z365m24pKYs',
            video4= 'https://www.youtube.com/watch?v=G54MhG6XY5c',
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
    db.session.add(player6)
    db.session.add(player7)
    db.session.add(player8)
    db.session.add(player9)
    db.session.add(player10)
    db.session.add(player11)
    db.session.add(player12)
    db.session.add(player13)
    db.session.add(player14)
    db.session.add(player15)
    db.session.add(player16)
    db.session.add(player17)
    db.session.add(player18)
    db.session.add(player19)
    db.session.add(player20)
    db.session.add(player21)
    db.session.add(player22)
    db.session.add(player23)
    db.session.add(player24)
    db.session.add(player25)
    db.session.add(player26)
    db.session.add(player27)
    db.session.add(player28)
    db.session.add(player29)
    db.session.add(player30)

    db.session.commit()


def undo_player(

):
    db.session.execute('TRUNCATE players RESTART IDENTITY CASCADE;')
    db.session.commit()