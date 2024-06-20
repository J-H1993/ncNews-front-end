import { useSearchParams} from 'react-router-dom';
import { getTopics} from '../utils/api';
import {useState, useEffect} from 'react'


const ArticlesFilter = ({setSelectedTopic, selectedTopic}) =>{
const [topics, setTopic] = useState([])
const [searchParams, setSearchParams] = useSearchParams()

useEffect(()=>{
    getTopics()
    .then((topicData)=>{
        setTopic(topicData)
    })
    .catch((err)=>{
        console.log(err)
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

return (
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
)
}
export default ArticlesFilter