import { getAllUsers } from "../utils/api"
import {useState, useEffect, useContext} from 'react'
import UserCard from "./UserCard";
import { UserContext } from "../components/UserProvider"
import ErrorMessage from '../components/ErrorMessage'


const UserList = () =>{
const {setChosenUser} = useContext(UserContext)
const [users, setUsers] = useState([])
const [error, setError] = useState(null)

const handleChosenUser = (user) =>{
    setChosenUser(user)
}

const handleCloseError = () => {
    setError(null)
}

useEffect(()=>{
    getAllUsers()
    .then((userData)=>{
    setUsers(userData)
    })
    .catch((err)=>{
        setError({
            message:err.message,
            code:err.code
        })
    })
}, [])

return(
    <>
    User Select
    {error && <ErrorMessage message={error.message} code={error.code} onClose={handleCloseError}/>}
    {users.map((user)=>{
        return <UserCard key={user.username} user={user} onClick={()=>handleChosenUser(user)} />
    })}
    </>
)
}

export default UserList