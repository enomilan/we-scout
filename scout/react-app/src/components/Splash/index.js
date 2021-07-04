import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'




const Splash = () => {

const [players, setPlayers] = useState([])

    useEffect(() => {

        async function fetchPlayers () {
            const res = await fetch('http://localhost:5000/api/player/')

            if (res.ok) {
                const players = await res.json()
                setPlayers = (players)
                console.log(players.id)
            }
        }
         

    }, [])

    return (
    
        <div className='container'>
            <h2>{players.id}</h2>
            {players.map(player =>{
                return (
                
                <div key = {player.id}>
                <h3>{player.first_name}</h3><h3>{player.last_name}</h3>
                    <img>{player.photo}</img>

                </div>)
            })}
        </div>
    )
}

export default Splash