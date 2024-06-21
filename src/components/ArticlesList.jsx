import {useSearchParams} from 'react-router-dom'
import { getAllArticles } from "../utils/api"
import {useState, useEffect} from "react"
import ArticleCard from "./ArticleCard"



const ArticlesList = ({sort}) =>{
const [searchParams] = useSearchParams()
const selectedTopic = searchParams.get('topic')
const [articles, setArticles]=useState([])


useEffect(()=>{
getAllArticles(selectedTopic)
.then((articleData)=>{
setArticles(articleData)
})
.catch((err)=>{
 console.error(err)
})
},[selectedTopic])


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
    {sortedArticles.map((article)=>{
        return <ArticleCard key={article.article_id} article={article} />
    })}
    </>
)
}

export default ArticlesList