import {useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import {getArticleById} from '../utils/api'
import CommentsPopUp from '../components/CommentsPopUp'
import Popup from '../components/Popup'
import { voteByArticleId } from '../utils/api'
import AddCommentsPopup from '../components/AddCommentPopup'
import ErrorMessage from '../components/ErrorMessage'
import '../App.css'


const FullArticlePage = () =>{
    const [article, setArticle] = useState({})
    const [votes, setVotes] = useState(0)
    const [PopupComments, setPopupComments]= useState(false)
    const [addCommentPopup, setAddCommentPopup] = useState(false)
    const {article_id} =useParams()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const handleVote = (change) =>{
        if(change === +1){
        let voteData = {inc_votes:1}
        setVotes((currentVotes)=>{return currentVotes+1})
        voteByArticleId(article_id, voteData)
        .then(()=>{
            console.log('Upvote successful')
        })
        .catch((err)=>{
            setError({
                message:err.message,
                code:err.code
            })
        })}else{ 
            let voteData = {inc_votes:-1}
        setVotes((currentVotes)=>{return currentVotes-1})
        voteByArticleId(article_id,voteData)
        .then(()=>{
            console.log('Downvote successful')
        })
        .catch((err)=>{
            setError({
                message:err.message,
                code:err.code
            })
        })
        }
    }

    const handleCommentsPopup = () =>{
        setPopupComments(true)
    }
    const handleClosePopup = () =>{
        setPopupComments(false)
    }

    const handleAddCommentPopup =() =>{
        setAddCommentPopup(true)
    }
    const handleCloseAddComentPopup =() =>{
        setAddCommentPopup(false)
    }

    const handleCloseError = () => {
        setError(null)
        Navigate('/')
    }


    useEffect(()=>{
        setIsLoading(true)
        getArticleById(article_id)
        .then((articleData)=>{
            setArticle(articleData)
            setVotes(articleData.votes)
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

    if(isLoading) return <p>Loading....</p>

    return(
        <div>
            <h1>{article.title}</h1>
            {error && <ErrorMessage message={error.message} code={error.code} onClose={handleCloseError}/>}
            <h2>Author: {article.author}</h2>
            <img src={article.article_img_url}/>
            <p>{article.body}</p>
            <p>Current Upvotes:{votes}<button className='button' onClick={(()=>{handleVote(+1)})}>Up vote</button><button className='button' onClick={(()=>{handleVote(-1)})}>Down vote</button></p>
            <button className='button' onClick={handleCommentsPopup}>View comments</button>
            {PopupComments ? 
            (<Popup onClose={handleClosePopup}>
            <CommentsPopUp article_id={article_id} />
            </Popup>
            ): null}

            <button className='button' onClick={handleAddCommentPopup}>Add comment</button>
            {addCommentPopup ? 
            (<Popup onClose={handleCloseAddComentPopup}>
            <AddCommentsPopup />
            </Popup>):null}
        </div>
    )
}




export default FullArticlePage