import React, { useEffect, useState } from 'react'
import './splash.css'





const Splash = () => {

const [players, setPlayers] = useState([])

    useEffect(() => {

        async function fetchData () {
            const res = await fetch('/api/player/')
            const player = await res.json()
                                      
            setPlayers(player)
                
            
        }
         
        fetchData()
    }, [])
        
    return (
    
        <div className='players'>
            {/* <h2>{players.id}</h2> */}
            {players.map(player =>{
                return (
                
                <div key = {player.id}>
                <div className='name'><h3><a href={`/player/${player.id}`}>{player.first_name} {player.last_name}</a></h3> </div>
                
                <div className='photo'> <img src={player.photo} />   </div>
                 
                 <div> </div>       
                </div>)
            })}
        </div>
    )
}

export default Splash