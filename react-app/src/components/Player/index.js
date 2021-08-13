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

    //Edit videos
    const [video1, setVideo1] = useState('e')
    const [video2, setVideo2] = useState('e')
    const [video3, setVideo3] = useState('e')
    const [video4, setVideo4] = useState('e')

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
            setVideo1(data.video1)
            setVideo2(data.video2)
            setVideo3(data.video3)
            setVideo4(data.video4)
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
   
    const deletePlayer = () => {
        
    }

    const onEdit = (e) => {
        e.preventDefault();
        
        statReducer.editStat({games, goals, assists, 
            video1, video2, video3, video4} , playerId);
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
                        {!editStats && <button onClick={toggleEditStats} id='stats_button'>Edit Player</button>}

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

                                    <label>Video 1 url
                                    <input
                                    type="text"
                                    name='video1'
                                    onChange={(e)=> setVideo1(e.target.value)}
                                    value={video1}
                                    />                                  
                                    </label>

                                    <label>Video 2 url
                                    <input
                                    type="text"
                                    name='video2'
                                    onChange={(e)=> setVideo2(e.target.value)}
                                    value={video2}
                                    />                               
                                    </label>

                                    <label>Video 3 url
                                    <input
                                    type="text"
                                    name='video3'
                                    onChange={(e)=> setVideo3(e.target.value)}
                                    value={video3}
                                    />                                    
                                    </label>

                                    <label>Video 4 url
                                    <input
                                    type="text"
                                    name='video4'
                                    onChange={(e)=> setVideo4(e.target.value)}
                                    value={video4}
                                    />                                    
                                    </label>
                            </form>
                        ):( 
                            <>
                            <div className='stats'>Games: {games}</div>     
                            <div className='stats'>Goals: {goals}</div>      
                            <div className='stats'>Assists: {assists}</div> 


                              <div className='video'>
                                <ReactPlayer url = {player.video1}/>
                                <ReactPlayer url = {player.video2}/>
                                <ReactPlayer url = {player.video3}/>
                                <ReactPlayer url = {player.video4}/>
                            </div>
                            </>
                        )}
                            
                    </div>
                    <div><button onClick={deletePlayer} id='stats_button'>Delete Player</button></div>
                    
               
    </div>

    
    )
}

export default Player