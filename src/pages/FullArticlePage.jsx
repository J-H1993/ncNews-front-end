import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getArticleById} from '../utils/api'
import CommentsPopUp from '../components/CommentsPopUp'
import Popup from '../components/Popup'


const FullArticlePage = () =>{
    const [PopupComments, setPopupComments]= useState(false)
    const [article, setArticle] = useState("")
    const {article_id} =useParams()

    const handleCommentsPopup = () =>{
        setPopupComments(true)
    }
    const handleClosePopup = () =>{
        setPopupComments(false)
    }

    useEffect(()=>{
        getArticleById(article_id)
        .then((articleData)=>{
            setArticle(articleData)
        })
        .catch((err)=>{
            console.error(err)
        })
    }, [article_id])

    return(
        <div>
            <h1>{article.title}</h1>
            <h2>Author: {article.author}</h2>
            <img src={article.article_img_url}/>
            <p>{article.body}</p>
            <p>{Number(article.votes)}<button>Up vote</button></p>
            <button onClick={handleCommentsPopup}>View comments</button>
            {PopupComments ? 
            (<Popup onClose={handleClosePopup}>
            <CommentsPopUp article_id={article_id} />
            </Popup>
            ): null}
        </div>
    )
}




export default FullArticlePage