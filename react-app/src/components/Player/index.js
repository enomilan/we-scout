import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'
import * as statReducer from '../../store/stat'

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
            const res = await fetch(`http://localhost:5000/api/player/${playerId}`)
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
    <div className='player container'>
        
                
                    <div key = {player.id}>            
                        <h2>Name: {player.first_name} {player.last_name}</h2> 
                        <img src= {player.front_photo}/>
                        <h4>Team: {player.team} </h4>
                        <h4>position: {player.position}</h4>
                        {!editStats && <button onClick={toggleEditStats}>Edit Stats</button>}

                        {editStats ? (
                            <form onSubmit={onEdit}>
                                <button type='submit'>Done</button>
                                <label>
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

                                <label>
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
                                <label>
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
                            <h4>games: {games}</h4>
                            <h4>goals: {goals}</h4>
                            <h4>assists: {assists}</h4>
                            </>
                        )}
                        
                        <ReactPlayer url = {player.video1}/>
                        <ReactPlayer url = {player.video2}/>
                        <ReactPlayer url = {player.video3}/>
                        <ReactPlayer url = {player.video4}/>
                    </div>
                    
               
    </div>

    
    )
}

export default Player