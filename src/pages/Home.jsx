import {useState} from 'react'
import ArticlesList from '../components/ArticlesList';
import ArticlesFilter from '../components/ArticlesFilter';
import SortBy from '../components/SortBy';
import '../App.css'

const Home = () =>{
    const [selectedTopic, setSelectedTopic] = useState('')
    const [sort, setSort] = useState('')
    return(
        <div className='homepage-container'>
        <div className='dropdown-container'>
            <ArticlesFilter selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
            <SortBy setSort={setSort}/>
         </div>
            <ArticlesList selectedTopic={selectedTopic} sort={sort}/>
            
        </div>
    )
}

export default Home;