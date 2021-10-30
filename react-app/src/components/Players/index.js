import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as statReducer from '../../store/stat'
import './players.css'
import { Button, makeStyles, TextField } from '@material-ui/core'




const Players = () => {

const dispatch = useDispatch()
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
    
  
    
    statReducer.newPlayer({firstName, lastName, team, position, age, mainPhoto,  
        frontPhoto, video1, video2, video3, video4} )    

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

    //CSS Form Styling
    const useStyles = makeStyles({
        field: {
           backgroundColor: 'white' 
        }
    })
    const classes = useStyles()

    return (
    
        <div className='players'>
            <div className='newPlayer'> 
                {!addPlayer && <Button onClick={toggleAddPlayer} id='stats_button'>Create New Player</Button>}    
                
                {addPlayer ? (
                    <form onSubmit={submitNewPlayer}>
                        <TextField id='first_name'

                            className={classes.field}                                                     
                            variant='outlined'
                            label="First Name"

                            onChange={(e)=> setFirstName(e.target.value)}
                            value={firstName}                          
                               
                        />
                        <TextField id='last_name'
                            
                            className={classes.field}
                            variant='outlined'
                            label="Last Name"

                            onChange={(e)=> setLastName(e.target.value)}
                            value={lastName}
                            
                            
                        />
                        <TextField
                            
                            className={classes.field}
                            variant='outlined'
                            label='Team'
                            onChange={(e)=> setTeam(e.target.value)}
                            value={team}
                            
                            
                            
                        />
                        <TextField
                            className={classes.field}
                            variant='outlined'
                            label='Position'
                            onChange={(e)=> setPosition(e.target.value)}
                            value={position}
                            
                            
                            
                        />
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

                        <Button type='submit' id='stats_button'>Add Player</Button>
                        <Button type='submit' id='stats_button'>Cancel</Button>
                    </form>

                ):(
                
                <> Click to add new player</>
                                               
                )}
            </div>

            {players.map(player =>{
                return (
                
                <div className='player_div' key  = {player.id}>
                    <a href={`/player/${player.id}`}> 
                <div className='name'><h3>{player.first_name} {player.last_name}</h3> </div>
                
                <div className='photo'> <img src={player.photo} />   </div>
                 </a>
                      
                </div>)
            })}
        </div>
    )
}

export default Players