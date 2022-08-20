import React from 'react';
import Navbar from '../../ui/Navbar';
import logo from '../../assets/images/logo.svg'
import "./Header.css"

function Header(props) {
    return (
        <div className='navigation'>   
            <div className='Headerlogo'> <img src={logo} alt='' /></div>
            <Navbar></Navbar>
            <div className='actions'> 
            
            <button className='btn' onClick={() => console.log('test')} data-type="inverted">
                Login
            </button>
            
            <button className='btn' onClick={() => console.log('test')}>
                Register
            </button>
            </div>
        </div>
    );
}

export default Header;