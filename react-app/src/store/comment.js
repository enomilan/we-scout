//constant
const GET_COMMENTS = "comments/GET_COMMENTS";
const POST_COMMENT = "comments/POST_COMMENT";
const EDIT_COMMENT = "comments/EDIT_COMMENT";
const DELETE_COMMENT = "comments/DELETE_COMMENT";



//action

const getComms = (comments) => {
    return{
        type: GET_COMMENTS,
        payload: comments
    }
}

const postComms = (comment) => {
    return{
        type: POST_COMMENT,
        payload: comment
    }
}
const editComms = (comment) => {
    return{
        type: EDIT_COMMENT,
        payload: comment
    }
}
const deleteComms = (id) => {
    return{
        type: DELETE_COMMENT,
        payload: id
    }
}




//thunk it
//GET THUNK
export const getComments = (id) => async (dispatch) => {
    const response = await fetch(`/api/comment/${id}`)

    if (response.ok) {
        const data = await response.json()
        dispatch(getComms(data))
        
    } 
}
//POST THUNK
export const postComment = (load) => async (dispatch) => {
    const { playerId, postNewComment} = load
    
    const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({
            
            playerId,
            postNewComment,
            
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(postComms(data))
        
    }
}
//PUT THUNK
export const editComment = (load) => async (dispatch) => {
    const { id, user_id, player_id, comment} = load

    const response = await fetch(`/api/comment/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
                                   
            comment,
            
        })

    })

    if (response.ok) {
        const data = await response.json()
        console.log(data)
        dispatch(editComms(data))
        
    }
}
//DELETE THUNK
export const deleteComment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comment/${id}`, {
        method: 'DELETE',
        
    })

    if (response.ok) {
        dispatch(deleteComms(id))
        
    } 
}
//reducer
const initialState = {currentComments: {} }
let newState
const commentReducer  = (state = initialState, action) => {

    switch (action.type){
        case GET_COMMENTS:
            newState = {...state}
            newState.currentComments = action.payload
            return {... newState}
        case POST_COMMENT:
            newState = {...state}
            newState.currentComments = {...newState.currentComments}
            newState.currentComments[action.payload.id] = action.payload
            return newState
        case EDIT_COMMENT:
            newState = {...state}
            newState.currentComments = {...newState.currentComments}
            newState.currentComments[action.payload.id] = action.payload
            return newState
        case DELETE_COMMENT:
            newState = {...state}
            delete newState.currentComments[action.payload]
            newState.currentComments = {...newState.currentComments}
            return newState
        default:
            return state
    }
}

export default commentReducer 