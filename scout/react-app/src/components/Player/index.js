import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, useParams } from 'react-router-dom'
import Splash from '../Splash'


const Player = (  ) => {

    const [player, setPlayer] = useState([])

    const { id } = useParams
    
    console.log(id)
    

    // useEffect(() => {

    //     async function fetchData (id) {
    //         const res = await fetch(`http://localhost:5000/api/player/${id}`)
    //         const data = await res.json()
    //         console.log(data)
                          
    //         setPlayer(data)
                
            
    //     }
         
    //     fetchData()
    // }, [])



    return(
    <div className='player container'><h2>PLAYER {player.first_name} {player.last_name}</h2>
        <h4>Team {player.team} </h4>
        <h4>position: {player.position}</h4>
        <h4>games: {player.games}</h4>
        <h4>goals: {player.goals}</h4>
        <h4>assists: {player.assists}</h4>
    </div>

    
    )
}

export default Player