import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { getCommentByArticleId } from '../utils/api'
import CommentCard from '../components/CommentCard'


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

return(
    <div>
      <h2>Comments</h2>
      {comments.map((comment)=>{
        return <CommentCard key ={comment.comment_id} comment={comment} />}
      )}

    </div>
)
}



export default CommentsPopUp