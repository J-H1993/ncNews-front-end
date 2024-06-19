import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { getCommentByArticleId } from '../utils/api'
import CommentCard from '../components/CommentCard'
import { removeCommentByCommentId } from '../utils/api'


const CommentsPopUp = () =>{
const [comments, setComments] = useState([])
const {article_id} = useParams()


useEffect (()=>{
    getCommentByArticleId(article_id)
    .then((commentsData)=>{
        setComments(commentsData)
    })
    .catch((err)=>{
        console.error(err)
    })
}, [article_id])

const deleteComment = (comment_id) =>{
  removeCommentByCommentId(comment_id)
  .then(() =>{
    setComments(comments.filter((comment)=>{
      return comment.comment_id !== comment_id
    }))
  })
  .catch((err)=>{
    console.error(err)
  })
  
}

return(
    <div>
      <h2>Comments</h2>
      {comments.map((comment)=>{
        return <CommentCard key ={comment.comment_id} comment={comment} onDelete={deleteComment}/>}
      )}

    </div>
)
}



export default CommentsPopUp