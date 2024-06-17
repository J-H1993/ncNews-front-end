const ArticleCard = ({article}) =>{
    return( 
    <div>
        <h3>{article.title}</h3>
        <h4>{article.topic}</h4>
        <p>Author: {article.author}</p>
        <p>Post date: {article.created_at}</p>
        <p>Up votes: {Number(article.votes)}</p>
        <img src={article.article_img_url}/>
    </div>)
}

export default ArticleCard