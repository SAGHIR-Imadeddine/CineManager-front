import React from 'react';
import { Link } from 'react-router-dom';
import  logo from '../assets/images/Logo.png';
import '../assets/styles/navBar.css'



function NavBar() {
    return ( 
        <>
        <header>
            <nav>
                <div id='nav-logo'>
                    <img src={logo} alt="logo" />
                </div>
            
                <ul className='nav-list'>
                    <li><Link className='font-medium' to='/'>Home</Link></li>
                    <li><Link className='font-medium' to='/today'>Today</Link></li>
                    <li><Link className='font-medium' to='/'>movies</Link></li>
                </ul>

                <div className='nav-btns'>
                    <Link className='primary-btn font-light' to='/auth/register'>Sign up</Link>
                    <Link className='secondary-btn font-light' to='/auth/login'>Log In</Link>
                </div>
            </nav>
        </header>
        </>
     );
}

export default NavBar;