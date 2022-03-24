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

//Search Player
const [searchPlayer, setSearchPlayer] = useState('')

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
           backgroundColor: 'mintcream',
           padding: '5px',
           
           height: '35px',
           

        }
    })
    const classes = useStyles()

    return (
        //create new player
        <div className='players'>
            <div className='newPlayer'> 
                {!addPlayer && <Button onClick={toggleAddPlayer} id='stats_button'>Create New Player</Button>}    
                
                {addPlayer ? (
                    <form onSubmit={submitNewPlayer}>
                        <TextField 

                            className={classes.field}                                                     
                            variant='outlined'
                            label="First Name"
                            size="small"
                            onChange={(e)=> setFirstName(e.target.value)}
                            value={firstName}                          
                               
                        />
                        <TextField 
                            
                            className={classes.field}
                            variant='outlined'
                            label="Last Name"
                            size="small"
                            onChange={(e)=> setLastName(e.target.value)}
                            value={lastName}
                            
                            
                        />
                        <TextField
                            
                            className={classes.field}
                            variant='outlined'
                            label='Team'
                            size="small"
                            onChange={(e)=> setTeam(e.target.value)}
                            value={team}
                            
                            
                            
                        />
                        <TextField
                            className={classes.field}
                            variant='outlined'
                            label='Position'
                            size="small"
                            onChange={(e)=> setPosition(e.target.value)}
                            value={position}
                            
                            
                            
                        />
                        <TextField
                            className={classes.field}
                            variant='outlined'
                            label='Age'
                            type="number"                            
                            inputProps={{ min: 14, max: 50 }}
                            size="small"
                            onChange={(e)=> setAge(e.target.value)}
                            value={age}
                            
                            
                            
                        />
                        <TextField
                            className={classes.field}
                            variant='outlined'
                            label='Main Photo url'
                            size="small"
                            onChange={(e)=> setMainPhoto(e.target.value)}
                            value={mainPhoto}
                            
                            
                            
                        />
                        <TextField
                            className={classes.field}
                            variant='outlined'
                            label='Front Photo url'
                            size="small"
                            onChange={(e)=> setFrontPhoto(e.target.value)}
                            value={frontPhoto}
                            
                            
                            
                        />
                        <TextField
                            
                            className={classes.field}
                            variant='outlined'
                            label='Video 1 url'
                            size="small"
                            onChange={(e)=> setVideo1(e.target.value)}
                            value={video1}
                            
                            
                            
                        />
                        <TextField
                            
                            className={classes.field}
                            variant='outlined'
                            label='Video 2 url'
                            size="small"
                            onChange={(e)=> setVideo2(e.target.value)}
                            value={video2}
                                                        
                            
                        />
                        <TextField
                            className={classes.field}
                            variant='outlined'
                            label='Video 3 url'
                            size="small"
                            onChange={(e)=> setVideo3(e.target.value)}
                            value={video3}
                            
                            
                            
                        />
                        <TextField
                            className={classes.field}
                            variant='outlined'
                            label='Video 4 url'
                            size="small"
                            onChange={(e)=> setVideo4(e.target.value)}
                            value={video4}
                            
                            
                            
                        />

                        <Button type='submit' id='stats_button'>Add Player</Button>
                        <Button type='submit' id='stats_button'>Cancel</Button>
                    </form>

                ):(
                
                <> Click to add new player</>
                                               
                )}
            </div>
            
            
            <input 
                type='text' 
                placeholder='Search players'
                onChange={(e) => setSearchPlayer(e.target.value)}/>
                        


            {players.filter((player) => {
                if (searchPlayer === '') {
                    return player
                } else if (player.first_name.toLowerCase().includes(searchPlayer.toLowerCase())) {
                    return player
                }

            }).map(player =>{
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