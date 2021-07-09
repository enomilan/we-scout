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
const deleteComms = (comment) => {
    return{
        type: DELETE_COMMENT,
        payload: comment
    }
}




//thunk it
//GET THUNK
export const getComments = () => async (dispatch) => {
    const response = await fetch(`/api/comment/`)

    if (response.ok) {
        const data = await response.json()
        dispatch(getComms(data))
        return data
    } 
}
//POST THUNK
export const postComment = (load) => async (dispatch) => {
    const { userId, playerId, message} = load
    
    const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({
            user_id: userId,
            player_id: playerId,
            comment: message,
            
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(postComms(data))
        return data
    }
}
//PUT THUNK
export const editComment = (load) => async (dispatch) => {
    const { id, user_id, player_id, comment} = load

    const response = await fetch(`/api/comment/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            id,
            user_id,
            player_id,
            comment,
            
        })
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(editComms(data))
        return data
    }
}
//DELETE THUNK
export const deleteComment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comment/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(deleteComms(data))
        return data
    } 
}
//reducer
const initialState = {}
let newState
const commentReducer  = (state = initialState, action) => {

    switch (action.type){
        case GET_COMMENTS:
            action.comment.forEach((id)=>{
                newState[id]=id
            })
            return {... newState}
        case POST_COMMENT:


        case EDIT_COMMENT:


        case DELETE_COMMENT:

        
        default:
            return state
    }
}

export default commentReducer 