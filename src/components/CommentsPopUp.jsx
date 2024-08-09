import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { getCommentByArticleId } from '../utils/api'
import CommentCard from '../components/CommentCard'
import { removeCommentByCommentId } from '../utils/api'
import ErrorMessage from '../components/ErrorMessage'


const CommentsPopUp = () =>{
const [comments, setComments] = useState([])
const {article_id} = useParams()
const [error, setError] = useState(null)
const [isLoading, setIsLoading] = useState(false)


useEffect (()=>{
    setIsLoading(true)
    getCommentByArticleId(article_id)
    .then((commentsData)=>{
        setComments(commentsData)
        setIsLoading(false)
    })
    .catch((err)=>{
      setError({
        message:err.message,
        code:err.code
    })
    setIsLoading(false)
    })
}, [article_id])

const deleteComment = (comment_id) =>{
  removeCommentByCommentId(comment_id)
  .then(() =>{
    setComments(comments.filter((comment)=>{
      return comment.comment_id !== comment_id
    }))
    alert('Comment deleted')
  })
  .catch((err)=>{
    setError({
      message:err.message,
      code:err.code
  })
  })
  
}

const handleCloseError = () => {
  setError(null)
}

return(
    <div>
      <h2>Comments</h2>
      {error && <ErrorMessage message={error.message} code={error.code} onClose={handleCloseError}/>}
      {isLoading ? (
        <p>Loading comments...</p>
      ):(
        comments.map((comment)=>{
          return <CommentCard key ={comment.comment_id} comment={comment} onDelete={deleteComment}/>}
      )
      
      )}

    </div>
)
}



export default CommentsPopUp