import '../App.css'

const UserCard = ({user, onClick}) =>{
    return (
        <div className='user-card' onClick={()=> onClick(user)}>
            <img src={user.avatar_url} />
            <h3>{user.username}</h3>
        </div>
    )
}

export default UserCard
