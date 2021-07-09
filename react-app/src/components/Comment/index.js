import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as  commentReducer from '../../store/comment'

const Comment = () => {

    const dispatch = useDispatch()    
    const user = useSelector(state => state.session.user)
    const userId = user.id
    let comments = useSelector(state => state.comment.comment)
    const {playerId} = useParams()

    const [editComments, setEditComments] = useState(false)
    const [postComment, setPostComment] = useState("")
    const [editedComment, setEditedComment] = useState('')

    const postIt = (e) => {
        setPostComment(e.target.value)
    }

    const onPost = (e) => {
        e.preventDefault()

        //commentReducer.postComment( {userId, playerId, comments})
    }


    return (
        <div> 
            <div>
                <form onSubmit={onPost}>
                    <button type='submit'>Post</button>
                    <label>
                        Comment
                        <input
                        type='textbox'
                        name='comment'
                        onChange={postIt}
                        value={postComment}
                        />
                        
                    </label>

                </form>
            </div>
            <div>
                
            </div>

        </div>
        


    )

}

export default Comment