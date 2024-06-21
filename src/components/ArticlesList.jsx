import {useSearchParams} from 'react-router-dom'
import { getAllArticles } from "../utils/api"
import {useState, useEffect} from "react"
import ArticleCard from "./ArticleCard"
import ErrorMessage from '../components/ErrorMessage'
import '../App.css'



const ArticlesList = ({sort}) =>{
const [searchParams] = useSearchParams()
const selectedTopic = searchParams.get('topic')
const [articles, setArticles]=useState([])
const [error, setError] = useState(null)
const [isLoading, setIsLoading] = useState(false)


useEffect(()=>{
setIsLoading(true)
getAllArticles(selectedTopic)
.then((articleData)=>{
setArticles(articleData)
setIsLoading(false)
})
.catch((err)=>{
    setError({
        message:err.message,
        code:err.code
    })
    setIsLoading(false)
})
},[selectedTopic])

const handleCloseError = () => {
    setError(null)
}


const sortArticles = (articles, sortChoice) =>{
    const articlesCopy = [...articles]
    switch(sortChoice){
    case 'date':
        return articlesCopy.sort((a,b)=> new Date(b.created_at) - new Date(a.created_at))
    case'votes':
        return articlesCopy.sort((a, b)=> b.votes - a.votes)
    case 'asc':
        return articlesCopy.sort((a,b)=> a.title.localeCompare(b.title))
    case 'desc':
        return articlesCopy.sort((a,b)=>b.title.localeCompare(a.title))
        default:
            return articles
}}

const sortedArticles = sortArticles(articles, sort)

return(
    <>
    <h2>Available Articles</h2>
    {isLoading && <p>Loading articles...</p>}
    {error && <ErrorMessage message={error.message} code={error.code} onClose={handleCloseError}/>}
    <div className='container'>
    {sortedArticles.map((article)=>{
        return <ArticleCard key={article.article_id} article={article} />
    })}
    </div>
    </>
)
}

export default ArticlesList