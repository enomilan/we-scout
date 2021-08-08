import React, { useEffect, useState } from 'react'
import './players.css'





const Players = () => {

//Get players
const [players, setPlayers] = useState([])

    useEffect(() => {

        async function fetchData () {
            const res = await fetch('/api/player/')
            const player = await res.json()
                                      
            setPlayers(player)
                
            
        }
         
        fetchData()
    }, [])


 //Add new player
const [addPlayer, setAddPlayer] = useState(false)
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [team, setTeam] = useState("")
const [position, setPosition] = useState("")
const [age, setAge] = useState("")
const [mainPhoto, setMainPhoto] = useState("")
const [frontPhoto, setFrontPhoto] = useState("")
const [video1, setVideo1] = useState("")
const [video2, setVideo2] = useState("")
const [video3, setVideo3] = useState("")
const [video4, setVideo4] = useState("")

const toggleAddPlayer = () => {
    setAddPlayer(true)
}

const submitNewPlayer = (e) => {
    e.preventDefault()


    setAddPlayer(false)
}


    return (
    
        <div className='players'>
            <div className='newPlayer'> 
                {!addPlayer && <button onClick={toggleAddPlayer} id='stats_button'>Create New Player</button>}    

                {addPlayer ? (
                    <form onSubmit={submitNewPlayer}>
                        <label><input/> 
                            First Name
                               
                        </label>
                        <label><input/>
                            Last Name
                            
                        </label>
                        <label><input/>
                            Team
                            
                        </label>
                        <label><input/>
                            Position
                            
                        </label>
                        <label><input/>
                            Age
                            
                        </label>
                        <label><input/>
                            Main Photo url
                            
                        </label>
                        <label><input/>
                            Front Photo url
                            
                        </label>
                        <label><input/>
                            Video 1 url
                            
                        </label>
                        <label><input/>
                            Video 2 url
                            
                        </label>
                        <label><input/>
                            Video 3 url
                            
                        </label>
                        <label><input/>
                            Video 4 url
                            
                        </label>

                        <button type='submit' id='stats_button'>Add Player</button>
                    </form>

                ):(
                
                <>Click to add new player</>
                                               
                )}
            </div>

            {players.map(player =>{
                return (
                
                <div key = {player.id}>
                <div className='name'><h3><a href={`/player/${player.id}`}>{player.first_name} {player.last_name}</a></h3> </div>
                
                <div className='photo'> <img src={player.photo} />   </div>
                 
                      
                </div>)
            })}
        </div>
    )
}

export default Players