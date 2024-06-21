import {useState} from 'react'


const SortBy = ({setSort}) =>{
const[sortChoice, setSortChoice] = useState('')

const handleSortChoice = (event) => {
    const choice = event.target.value
    setSort(choice)
    setSortChoice(choice)
}

const handleClear = (event) =>{
    event.preventDefault()
    setSort('')
    setSortChoice('')
    
}

    return(
        <form>
            <label htmlFor='sort by'>Sort by...</label>
            <select
            id='sort-by'
            value={sortChoice}
            onChange={handleSortChoice}>
            <option value=''>default</option>
            <option value='date'>date</option>
            <option value='votes'>votes</option>
            <option value='asc'>ascending</option>
            <option value='desc'>desending</option>
            </select>
            <button onClick={handleClear}>clear</button>
        </form>
    )
}


export default SortBy