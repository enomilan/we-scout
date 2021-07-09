import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as  commentReducer from '../../store/comment'
import Commentbody from './commentbody'

const Comment = () => {

    const dispatch = useDispatch()    
    const user = useSelector(state => state.session.user)
    const userId = user.id
    const comments = useSelector(state => state.comment.currentComments) 
    const {playerId} = useParams()
    
    
    
    const [postNewComment, setPostNewComment] = useState("")
    


    useEffect (() => {
         dispatch(commentReducer.getComments(playerId))

    }, [dispatch, playerId])

    



    //console.log({comments.player_id})

    const postIt = (e) => {
        setPostNewComment(e.target.value)
    }




    const onPost = (e) => {
        e.preventDefault()
        setPostNewComment('')
        dispatch(commentReducer.postComment( {playerId, postNewComment}))
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
                        value={postNewComment}
                        />
                        
                    </label>

                </form>
            </div>
            <div>
                {Object.values(comments).map((comment, idx) => {
                    return (
                        <Commentbody key={idx} comment={comment} />
                    )


                 })}
            </div>

        </div>
        


    )

}

export default Comment