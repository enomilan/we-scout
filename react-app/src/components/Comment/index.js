import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as  commentReducer from '../../store/comment'
import Commentbody from './commentbody'
import { Button } from '@material-ui/core'

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
        <div className='comments_container'> 
            <div className="comments">
                <form onSubmit={onPost}>
                    
                    {/* <label>
                        Comment
                        <input
                        type='textbox'
                        name='comment'
                        onChange={postIt}
                        value={postNewComment}
                        />
                        
                    </label> */}

                    <textarea
                        id='comment' 
                        name='comment_box'
                        rows='4'
                        cols='55'
                        onChange={postIt}
                        value={postNewComment}>
                        Comment
                    </textarea>

                    <button type='submit' id='comment_button'>Post</button>

                </form>
            </div>
                <div id='user_comments'>
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