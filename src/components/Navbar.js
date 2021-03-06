import '../styles/Navbar.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [click, setClick] = useState(false);

    const handleClickMenu=()=>{
		setClick(!click);
	};

	const closeMenu=()=>{
		setClick(false);
	};

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                {/*<Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <img src='' className='iconNavbar'/>
                </Link>*/}
                <ul className={click?'nav-menu active': 'nav-menu'}>
                    <div className='nav-item'><Link to='/' className='nav-link'>Strona główna</Link></div>
                    <div className='nav-item'><Link to='/koszyk' className='nav-link'>Koszyk</Link></div>
                    <div className='nav-item'><Link to='/twoje_konto' className='nav-link'>Twoje konto</Link></div>
                    <div className='nav-item'>
                        <Link to='/koszyk' className='nav-link'>
                            <ShoppingBasketIcon style={{alignSelf: 'center'}}/>
                        </Link>
                    </div>
                </ul>
            </div>
        </nav>
    )
}
