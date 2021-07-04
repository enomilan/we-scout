import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'





const Splash = () => {

const [players, setPlayers] = useState([])

    useEffect(() => {

        async function fetchData () {
            const res = await fetch('http://localhost:5000/api/player/')
            const player = await res.json()
            console.log(player)
                          
            setPlayers(player)
                
            
        }
         
        fetchData()
    }, [])

    return (
    
        <div className='container'>
            <h2>{players.id}</h2>
            {players.map(player =>{
                return (
                
                <div key = {player.id}>
                <h3>{player.first_name} {player.last_name}</h3>
                    

                </div>)
            })}
        </div>
    )
}

export default Splash