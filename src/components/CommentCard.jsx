import { UserContext } from './UserProvider'
import {useContext} from 'react'

const CommentCard = ({comment, onDelete}) =>{
    const {chosenUser} = useContext(UserContext)
 

    const handleDelete = () =>{
        onDelete(comment.comment_id)
    }

    return(
        <div className='comment-card'>
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            <p>{comment.created_at}</p>
            <p>{Number(comment.votes)}</p>
            {chosenUser ?
            (chosenUser.username===comment.author ? (
                <button onClick={handleDelete}>Remove comment</button>
            ):null):null}
            
        </div>
    )
}

export default CommentCard