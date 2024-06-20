import {useState} from 'react'
import ArticlesList from '../components/ArticlesList';
import ArticlesFilter from '../components/ArticlesFilter';

const Home = () =>{
    const [selectedTopic, setSelectedTopic] = useState('')
    return(
        <div>
            <ArticlesFilter selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
            <ArticlesList selectedTopic={selectedTopic} />
        </div>
    )
}

export default Home;