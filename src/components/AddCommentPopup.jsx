import {useState, useContext} from 'react'
import { addCommentByArticleId } from '../utils/api'
import { useParams } from 'react-router-dom' 
import {UserContext} from './UserProvider'
import ErrorMessage from '../components/ErrorMessage'


const AddCommentsPopup = () =>{
const {chosenUser} = useContext(UserContext)
const {article_id} = useParams()
const [commentInputs, setCommentInputs] = useState({
   username:'',
   body:''
})
const [error, setError] = useState(null)

const handleChange = (event) =>{
    const{name, value} = event.target
    setCommentInputs((currentState)=>({...currentState, [name]:value}))
}

const handleSubmit = (event) => {
    event.preventDefault()
    addCommentByArticleId(article_id, commentInputs, chosenUser.username)
    .then(()=>{
    alert("Comment added successfully")
    setCommentInputs({
    username:{username},
    body:''
    })
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
    <>
    {error && <ErrorMessage message={error.message} code={error.code} onClose={handleCloseError}/>}
    {chosenUser ? (
<form onSubmit={handleSubmit}>
<p>add comment as {chosenUser.username}</p>
<label>
    <input
    type='text'
    name="body"
    value={commentInputs.body}
    onChange={handleChange}
    />
</label>
<button type='submit'>Submit comment</button>
</form>
    ):(<p>Please log in to leave a comment</p>)}
</>
    )

}


export default AddCommentsPopup