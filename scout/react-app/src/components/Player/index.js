import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'


const Player = ( ) => {

    const [player, setPlayer] = useState([])


         const playerId  = useParams()
         const id = playerId.playerId

    useEffect(() => {


        async function fetchData () {
            const res = await fetch(`http://localhost:5000/api/player/${id}`)
            const data = await res.json()
            console.log(data)
                          
            setPlayer(data)
                
            
        }
         
        fetchData()
    }, [])

    console.log( player.last_name )

    return(
    <div className='player container'>
        {player.map(player => {
                return (
                    <div key = {player.id}>            
                        <h2>Player Name: {player.first_name} {player.last_name}</h2>
                        <h4>Team: {player.team} </h4>
                        <h4>position: {player.position}</h4>
                        <h4>games: {player.games}</h4>
                        <h4>goals: {player.goals}</h4>
                        <h4>assists: {player.assists}</h4>
                        <ReactPlayer url = {player.video1} />
                    </div>
                    
                )})}
    </div>

    
    )
}

export default Player