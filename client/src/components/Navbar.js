import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaBookOpen } from "react-icons/fa6";


const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Study Sessions {<FaBookOpen className='bookIcon'/>} </h1> 
                </Link>
            </div>
        </header>
    )
}

export default Navbar