//Don't you hate it when you switch from Python straight to JS?
// _____________ <-- your answer here

const GET_STAT = "stat/GET_STAT"
const POST_STAT = 'stat/POST_STAT'
const EDIT_STAT = "stat/EDIT_STAT"

//action

const getSt = (stat) => {
    return {
        type: GET_STAT,
        payload: stat
    }
}

const postSt = (stat) => {
    return {
        type: POST_STAT,
        payload: stat
    }
}

const editSt = (stat) => {
    return {
        type: EDIT_STAT,
        payload: stat
    }
}

//thunks

export const getStat = (id) => async (dispatch) => {
    const response = await fetch(`/api/stat/${id}`)

    if (response.ok) {
        const data = await response.json()
        dispatch(getSt(data))
        return data
    } 

}

export const postStat = (stats) => async (dispatch) => {
    const { playerId, game, goal, assists, exG} = stats

    const response = await fetch('/api/stat/', {
        method: 'POST',
        body: JSON.stringify({
            player_id: playerId,
            games: game,
            goals: goal,
            assist: assists,
            xG: exG
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(postSt(data))
        return data
    }

}

export const editStat = (stat, id) =>  {
    const { games, goals, assists} = stat

        fetch(`/api/player/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({

            games,
            goals,
            assists,
            
        })
    })

    // if (response.ok) {
    //     const data = await response.json()
    //     dispatch(editSt(data))
    //     return data
    // }
}


//reducer
const initialState = {}
let newState
const statReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_STAT:
            newState = {...state}
            newState.id = action.id
            return newState
        // case POST_STAT:
        //     newState = {... state}
        //     newState.goals = [action.goals, ...state.goals] 
        //     return
        case EDIT_STAT:


        default:
            return state 

    
    }

}

export default statReducer