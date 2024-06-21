import { useSearchParams} from 'react-router-dom';
import { getTopics} from '../utils/api';
import {useState, useEffect} from 'react'
import ErrorMessage from '../components/ErrorMessage'


const ArticlesFilter = ({setSelectedTopic, selectedTopic}) =>{
const [topics, setTopic] = useState([])
const [searchParams, setSearchParams] = useSearchParams()
const [error, setError] = useState(null)

useEffect(()=>{
    getTopics()
    .then((topicData)=>{
        setTopic(topicData)
    })
    .catch((err)=>{
        setError({
            message:err.message,
            code:err.code
        })
    })
},[])

useEffect(()=>{
    const topicSearchParam = searchParams.get('topic')
    if(topicSearchParam){
        setSelectedTopic(topicSearchParam)
    }else{
        setSelectedTopic('')
    }
}, [searchParams, setSelectedTopic])

const handleTopicChange = (event) => {
    const newTopic = event.target.value
    


!newTopic ? setSearchParams({}):setSearchParams({topic:newTopic})


}

const handleClearTopic = () =>{
    setSelectedTopic("")
    setSearchParams({})
}

const handleCloseError = () => {
    setError(null)
}

return (
    <div>
    {error && <ErrorMessage message={error.message} code={error.code} onClose={handleCloseError}/>}
    <form>
        <label htmlFor='select topic'>Topics</label>
        <select
        id='select-topic'
        value={selectedTopic}
        onChange={handleTopicChange}
        >
            <option value= "">All</option>
            {topics.map((topic)=>{
                return(
                    <option key={topic.slug} value={topic.slug}>
                        {topic.slug}
                    </option>
                )
            })}
        </select>
        <button type ='button' onClick={handleClearTopic}>Clear filter</button>
    </form>
    </div>
)
}
export default ArticlesFilter