import {Link} from 'react-router-dom'
import '../App.css'

const ArticleCard = ({article}) =>{
    return( 
    <div className='article-card'>
        <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
        <h4>{article.topic}</h4>
        <p>Author: {article.author}</p>
        <p>Up votes: {Number(article.votes)}</p>
        <img src={article.article_img_url}/>
        </Link>
    </div>)
}

export default ArticleCard