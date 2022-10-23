import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false)

    return (
       <>
        {/* <nav className='navbar'>
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
            </div>
        </nav> */}
            <header className="relative flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
                <div className="flex items-center justify-start gap-4">
                    <Link>
                        <img className='navbar-icon' src="https://theme.hstatic.net/200000377411/1000914764/14/icon-bad2.png?v=108" alt="" />
                    </Link>

                    <nav>
                        <ul className="flex items-center justify-start gap-4">
                            <li>STORE</li>
                            <li>STORY</li>
                            <li>NEWS</li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <ul className="flex items-center justify-start gap-4">
                        <li><button>< AiOutlineShoppingCart /></button></li>
                    </ul>
                </div>
            </header>
       </>
    )
}

export default Navbar;