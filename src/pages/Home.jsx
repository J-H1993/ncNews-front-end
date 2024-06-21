import {useState} from 'react'
import ArticlesList from '../components/ArticlesList';
import ArticlesFilter from '../components/ArticlesFilter';
import SortBy from '../components/SortBy';

const Home = () =>{
    const [selectedTopic, setSelectedTopic] = useState('')
    const [sort, setSort] = useState('')
    return(
        <div>
            <ArticlesFilter selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
            <SortBy setSort={setSort}/>
            <ArticlesList selectedTopic={selectedTopic} sort={sort}/>
            
        </div>
    )
}

export default Home;