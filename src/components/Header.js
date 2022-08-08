
import {Navbar, Container,Nav,NavDropdown} from 'react-bootstrap'
import './Header.css'
import Logo from '../assets/imgs/logo.svg'

function Header() {
  return (
    <header className='primary-header'>
    <div className='container'>
        <div className='nav-wrapper'>
            <div className='left-navbar'>
                <div className='logo'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className='nav'> 
                    <ul className='nav-list' role="list">
                            <li><a>Features</a></li>
                            <li><a>Company</a></li>
                            <li><a>Careers</a></li>
                            <li><a>About</a></li>
                    </ul>
                </div>

            </div>
            <div className='actions d-flex'>
            <div>
                <button className='button' data-type="inverted">
                    Login
                </button>
            </div>
                
            <div >

                <button className='button' >
                    Register
                </button>
                </div>
            
            </div>
        </div>
    </div>
    </header>
    
  );
}

export default Header;