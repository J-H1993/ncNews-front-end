import {Link} from 'react-router-dom'
import '../App.css'
import { UserContext } from './UserProvider'
import { useContext } from 'react'

const Header = () =>{
    const {chosenUser} = useContext(UserContext)
    return (
        <header className='header'>
            <h1 className='logo'>Nc-News</h1>
            <nav>
            <Link to ="/" className='nav-link'>Home</Link>
            </nav>
            <div className='user-info'>
            {chosenUser ? (
                <Link to='/users'>
                    <button className='user-button'>
                        <img src={chosenUser.avatar_url} alt={`${chosenUser.username}'s profile`} className='user-profile-pic' />
                        <span>{chosenUser.username}</span>
                        </button>
                    </Link>
            ):(
                <Link to='/users'><button className='login-button'>login</button></Link>
            )}
        </div>
    </header>
    )

}

export default Header