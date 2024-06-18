const CommentCard = ({comment}) =>{
    return(
        <div className='comment-card'>
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            <p>{comment.created_at}</p>
            <p>{Number(comment.votes)}</p>
        </div>
    )
}

export default CommentCard