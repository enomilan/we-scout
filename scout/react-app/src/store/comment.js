//constant
const GET_COMMENT = "comments/GET_COMMENT";
const POST_COMMENT = "comments/POST_COMMENT";
const EDIT_COMMENT = "comments/EDIT_COMMENT";
const DELETE_COMMENT = "comments/DELETE_COMMENT";



//action

const getComms = (comment) => {
    return{
        type: GET_COMMENT,
        payload: comment
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
const deletedComms = (comment) => {
    return{
        type: DELETE_COMMENT,
        payload: comment
    }
}




//thunk it
//GET THUNK
export const getComment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comment/${id}`)

    if (response.ok) {
        const data = await response.json();data
        dispatch(getComms(data))
        return data
    } 
}
//POST THUNK
export const postComment = (load) => async (dispatch) => {
    const { userId, playerId, message, rate } = load
    
    const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({
            user_id: userId,
            player_id: playerId,
            comment: message,
            rating: rate
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
    const { id, userId, playerId, comment, rating } = load

    const response = await fetch(`/api/comment/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            id,
            user_id: userId,
            player_id: playerId,
            comment: comment,
            rating: rating,
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
        dispatch(deletedComms(data))
        return data
    } 
}
//reducer
const initialState = {}

 export default commentReducer = (state = initialState, action) => {
    


}