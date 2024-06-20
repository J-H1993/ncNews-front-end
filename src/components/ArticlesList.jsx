import {useSearchParams} from 'react-router-dom'
import { getAllArticles } from "../utils/api"
import {useState, useEffect} from "react"
import ArticleCard from "./ArticleCard"


const ArticlesList = () =>{
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


return(
    <>
    <h2>Available Articles</h2>
    {articles.map((article)=>{
        return <ArticleCard key={article.article_id} article={article} />
    })}
    </>
)
}

export default ArticlesList