import { getAllArticles } from "../utils/api"
import {useState, useEffect} from "react"
import ArticleCard from "./ArticleCard"

const ArticlesList = () =>{
const [articles, setArticles]=useState([])

useEffect(()=>{
getAllArticles()
.then((articleData)=>{
setArticles(articleData)
})
.catch((err)=>{
 console.error(err)
})
},[])


return(
    <>
    <h2>All available Articles</h2>
    {articles.map((article)=>{
        return <ArticleCard key={article.article_id} article={article} />
    })}
    </>
)
}

export default ArticlesList