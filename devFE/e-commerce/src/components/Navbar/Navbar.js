import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill } from "react-icons/bs";
import './Navbar.css';
import Cart from '../Cart';

const Navbar = ({size}) => {
    const [click, setClick] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <header className="relative flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
                <div className="flex items-center justify-start gap-4">
                    <Link className="hidden cursor-pointer" to='/'>
                        <img to='/' className='navbar-icon' src="https://theme.hstatic.net/200000377411/1000914764/14/icon-bad2.png?v=108" alt="" />
                    </Link>
                    
                    <ul className="flex items-center justify-start gap-4">
                        {!isOpen && (<li onClick={() => setIsOpen(true)} 
                            className="lg:hidden">
                            <img className="w-5 cursor-pointer" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAD7+/vl5eV0dHQ6Ojr19fUzMzPq6uqnp6cwMDC2trbX19dra2t9fX3w8PBWVlagoKA/Pz/Kysrd3d2Li4tNTU0SEhI4ODhoaGh3d3cjIyOtra0hISGmpqZubm6FR3G1AAAB0ElEQVR4nO3daW7bMBAGUDV1vERO4uxrm/vfsk4aIL8aEaTRocbvnWA+UOJiWJxhAAAAAAAAAAAAAPjPlj/7tDxMvO3iR7+et835lufRISa8NQ7kehWdYNJq3ZSw/4D7iCcNAS+iqy9yUR/wMrr2QpfVCX9Hl15oU51wF116oV11wjnMM+9W1QnPoksvdFad8Dq69ELX1QnnsVi0LBc30aUXuqlOOLxE117kpT7gTAaxYQiH4Sq6+gJXLQGHYRNd/6T6Dc2n2743Nrvb1oB76/Fu0ae7se1sCAAAAAAAAAB06aRPB0q3HBf3p326X4wH+Khk8xD9l5lvPby2BnyKjjDpqS1g71/MvDtvCfgaXX2Rlgc1uvZC9QHH6NILjdUJ+59m/qp/Ex+jSy90Wp0w//cW+ccw/3uYfy7Nvx4ewZ4m/750DpNN49li/6BmPx8ewRn/Q/QPMv9woHQAAAAAAAAAQEey332Z/v7S9HfQpr9HOP9d0L+iiy/ScJ/3PIawZRDz36ufvzdC/u8t8vco6Xs786W+z0z+XkH5+z3NZLlo6Nk1j7nmsSXgEfTOG5Zv0QkmtPY/3Ns+R4f4xgF6WH5I3ocUAAAAAAAAAAAAoNwfMzE7moZPeKEAAAAASUVORK5CYII=' />
                        </li>)}
                        {isOpen && (<li onClick={() => setIsOpen(false)} 
                            className="lg:hidden close">
                            <img className="w-5 cursor-pointer" src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-icon.png' />
                        </li>)}
                        <li>
                            <img className='navbar-icon' src="https://theme.hstatic.net/200000377411/1000914764/14/icon-bad2.png?v=108" alt="" />
                        </li>
                    </ul>

                    <nav className={isOpen && "open"}>
                        <ul>
                            <li>
                                <Link to='/'>
                                    HOME
                                </Link>
                            </li>

                            <li>
                                <Link to='/store'>
                                    STORE
                                </Link>
                            </li>

                            <li>
                                <Link to='/story'>
                                    STORY
                                </Link>
                            </li>

                            <li>
                                <Link to='/news'>
                                    NEWS
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='cart'>
                    <ul className="flex items-center justify-start gap-4">
                        <li>
                            <Link to='/cart'>
                                < BsFillCartPlusFill className="text-2xl text-slate-600" />
                            </Link>
                        </li>
                        <span>{size}</span>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar;