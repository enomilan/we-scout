import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as commentReducer from '../../store/comment'


export default function Commentbody({comment}) {

    const dispatch = useDispatch()
    const [editComments, setEditComments] = useState(false)
    const [editedComment, setEditedComment] = useState(comment.comment)
    const user = useSelector(state => state.session.user)




 
    const editIt = (e) => {
        setEditComments(true)
    }

    const edited = (e) => {
        setEditedComment(e.target.value)
    }

    const deleted = (e) => {
        dispatch(commentReducer.deleteComment(comment.id))
    }     

    const submitEdit = (e) => {
        e.preventDefault()
        setEditComments(false)
        const {id} = comment
        dispatch(commentReducer.editComment({id, comment: editedComment}))

    }

    

    return (
        <div > 
            

        {editComments ? (
            
            
            
            <form onSubmit={submitEdit}>
                <button type='submit' id='comments_button'>Done</button>
                <textarea 
                    name='edit'
                    onChange={edited}
                    value={editedComment}
                />
                
            </form>
            ):( <>
            <span id='user_comments'>{comment.comment}</span> <span id='users'>by {comment.username}</span>
            
            {user && comment.user_id === user.id && 
                <>
                <button onClick={editIt}id='comments_button'>Edit</button>
                <button onClick={deleted}id='comments_button'>Delete</button> </> } </> )}
        </div> 
    )
}
