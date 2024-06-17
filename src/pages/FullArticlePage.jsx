import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getArticleById} from '../utils/api'


const FullArticlePage = () =>{
    const [article, setArticle] = useState("")
    const {article_id} =useParams()

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
            <button>View comments</button>
        </div>
    )
}




export default FullArticlePage