import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false)

    return (
       <>
       <nav className='navbar'>
           <div className='navbar-container'>
               <Link to="/" className='navbar-logo' alt='BUWJ LOGO' onClick= 
               {closeMobileMenu}>
                    <img className='navbar-icon' src="https://theme.hstatic.net/200000377411/1000914764/14/icon-bad2.png?v=108" />
                    BUWJ HABIT
               </Link>
               <div className='menu-icon' onClick={handleClick}>
                   <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                       <Link to='/store' className='nav-links' onClick={closeMobileMenu}>
                           STORE
                       </Link>
                   </li>

                   <li className='nav-item'>
                       <Link to='/story' className='nav-links' onClick={closeMobileMenu}>
                           STORY
                       </Link>
                   </li>

                   <li className='nav-item'>
                       <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                           NEWS
                       </Link>
                   </li>
                </ul>
                <ul className='nav-customer'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            <img src="https://file.hstatic.net/1000351433/file/user_bfb942d5edb24fc895104e6524135e07.png" width='40' height='40'></img>
                        </Link>
                    </li>
                </ul>
           </div>
       </nav>

       </>
    )
}

export default Navbar;