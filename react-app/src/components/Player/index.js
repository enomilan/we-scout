import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/lazy'
import { useDispatch } from 'react-redux'
import * as statReducer from '../../store/stat'
import './player.css'

const Player = ( ) => {

    const [player, setPlayer] = useState(null)
    const dispatch = useDispatch()
    const {playerId}  = useParams()
    // Edit Stats
    const [editStats, setEditStats] = useState(false)
    const [games, editGames] = useState(0)
    const [goals, editGoals] = useState(0)
    const [assists, editAssists] = useState(0)

    const toggleEditStats = () => {
        setEditStats(true)

    } 

         
        

    useEffect(() => {

        async function fetchData () {
            const res = await fetch(`/api/player/${playerId}`)
            const data = await res.json()
            console.log(data)                          
            setPlayer(data)
            editGames(data.games || 0)
            editGoals(data.goals || 0)
            editAssists(data.assists || 0)
            
        }
         
        fetchData()
    }, [playerId])

    const updateGames = (e) => {
        editGames(e.target.value)
    }

    const updateGoals = (e) => {
        editGoals(e.target.value)
    }

    const updateAssists = (e) => {
        editAssists(e.target.value)
    }
   

    const onEdit = (e) => {
        e.preventDefault();
        
        statReducer.editStat({games, goals, assists} , playerId);
        setEditStats(false)
      };


    return player && (
    <div className='player_container'>
        
                
                    <div key = {player.id} >   
                        <div className='player_info'>      
                            <h3>Name: {player.first_name} {player.last_name}</h3> 
                            <h4>Team: {player.team} </h4>
                            <h4>position: {player.position}</h4>
                            <img src= {player.front_photo} id='front_photo'/>
                            
                        </div>   
                        {!editStats && <button onClick={toggleEditStats} id='stats_button'>Edit Stats</button>}

                        {editStats ? (
                            <form onSubmit={onEdit}>
                                <button type='submit' id='stats_button'>Done</button>
                                <label className='stats'>
                                    Games
                                        <input
                                        type="number"
                                        name='games'
                                        min='0'
                                        max='99'
                                        onChange={updateGames}
                                        value={games}
                                        />
                                </label>

                                <label className='stats'>
                                    Goals
                                    <input
                                    type="number"
                                    name='goals'
                                    min='0'
                                    max='99'
                                    onChange={updateGoals}
                                    value={goals}
                                    />
                                </label>
                                <label className='stats'>
                                    Assists
                                    <input
                                    type="number"
                                    name='assists'
                                    min='0'
                                    max='99'
                                    onChange={updateAssists}
                                    value={assists}
                                    />
                                    </label>
                            </form>
                        ):( 
                            <>
                            <div className='stats'>Games: {games}</div>     
                            <div className='stats'>Goals: {goals}</div>      
                            <div className='stats'>Assists: {assists}</div>   
                            </>
                        )}
                            <div className='video'>
                                <ReactPlayer url = {player.video1}/>
                                <ReactPlayer url = {player.video2}/>
                                <ReactPlayer url = {player.video3}/>
                                <ReactPlayer url = {player.video4}/>
                            </div>
                    </div>
                    
               
    </div>

    
    )
}

export default Player