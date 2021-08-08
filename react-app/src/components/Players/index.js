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
    
    setFirstName('')
    setLastName('')
    setTeam('')
    setPosition('')
    setAge('')
    setMainPhoto('')
    setFrontPhoto('')
    setVideo1('')
    setVideo2('')
    setVideo3('')
    setVideo4('')
    setAddPlayer(false)
}


    return (
    
        <div className='players'>
            <div className='newPlayer'> 
                {!addPlayer && <button onClick={toggleAddPlayer} id='stats_button'>Create New Player</button>}    

                {addPlayer ? (
                    <form onSubmit={submitNewPlayer}>
                        <label>
                            <input
                            type="text"
                            name='first_name'
                            onChange={(e)=> setFirstName(e.target.value)}
                            value={firstName}
                            /> 
                            First Name
                               
                        </label>
                        <label>
                            <input
                            type="text"
                            name='last_name'
                            onChange={(e)=> setLastName(e.target.value)}
                            value={lastName}
                            />
                            Last Name
                            
                        </label>
                        <label>
                            <input
                            type="text"
                            name='team'
                            onChange={(e)=> setTeam(e.target.value)}
                            value={team}
                            />
                            Team
                            
                        </label>
                        <label>
                            <input
                            type="text"
                            name='position'
                            onChange={(e)=> setPosition(e.target.value)}
                            value={position}
                            />
                            Position
                            
                        </label>
                        <label>
                            <input
                            type="number"
                            min='14'
                            max='60'
                            name='age'
                            onChange={(e)=> setAge(e.target.value)}
                            value={age}
                            />
                            Age
                            
                        </label>
                        <label>
                            <input
                            type="text"
                            name='mainphoto'
                            onChange={(e)=> setMainPhoto(e.target.value)}
                            value={mainPhoto}
                            />
                            Main Photo url
                            
                        </label>
                        <label>
                            <input
                            type="text"
                            name='frontphoto'
                            onChange={(e)=> setFrontPhoto(e.target.value)}
                            value={frontPhoto}
                            />
                            Front Photo url
                            
                        </label>
                        <label>
                            <input
                            type="text"
                            name='video1'
                            onChange={(e)=> setVideo1(e.target.value)}
                            value={video1}
                            />
                            Video 1 url
                            
                        </label>
                        <label>
                            <input
                            type="text"
                            name='video2'
                            onChange={(e)=> setVideo2(e.target.value)}
                            value={video2}
                            />
                            Video 2 url
                            
                        </label>
                        <label>
                            <input
                            type="text"
                            name='video3'
                            onChange={(e)=> setVideo3(e.target.value)}
                            value={video3}
                            />
                            Video 3 url
                            
                        </label>
                        <label>
                            <input
                            type="text"
                            name='video4'
                            onChange={(e)=> setVideo4(e.target.value)}
                            value={video4}
                            />
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