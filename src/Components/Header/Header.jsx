import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
    return(
        <header className='header'>           
            <Link className='header__menu-item' to='/'><p>JSP homework</p></Link>
            <Link className='header__menu-item' to='/todolist'>TodoList</Link>
            <Link className='header__menu-item' to='/users'>Users</Link>
            <Link className='header__menu-item' to='/weather'>Weather</Link>
        </header>
    )
}
export default Header