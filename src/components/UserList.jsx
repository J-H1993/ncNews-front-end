import { getAllUsers } from "../utils/api";
import {useState, useEffect, useContext} from 'react'
import UserCard from "./UserCard";
import { UserContext } from "../components/UserProvider";


const UserList = () =>{
const {setChosenUser} = useContext(UserContext)
const [users, setUsers] = useState([])
console.log(users)

const handleChosenUser = (user) =>{
    setChosenUser(user)
}

useEffect(()=>{
    getAllUsers()
    .then((userData)=>{
    setUsers(userData)
    })
    .catch((err)=>{
        console.log(err)
    })
}, [])

return(
    <>
    User Select
    {users.map((user)=>{
        return <UserCard key={user.username} user={user} onClick={()=>handleChosenUser(user)} />
    })}
    </>
)
}

export default UserList