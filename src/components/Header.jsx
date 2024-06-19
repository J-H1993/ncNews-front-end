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
            {chosenUser ? (
                <Link to='/users'><button>{chosenUser.username}</button></Link>
            ):(
                <Link to='/users'><button>login</button></Link>
            )}
            
        </header>
    )

}

export default Header