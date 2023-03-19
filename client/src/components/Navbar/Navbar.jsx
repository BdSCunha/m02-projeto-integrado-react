import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  return (
    // Ex 7 - 2. No header fazer com que o nome do site e a logo também sejam abraçados por Link e retorne para "/"
    <Link to="/">
      <header className='navbarContainer'>
        <div className='navbarLogoBox'>
          <img src='/logo.png' alt='Logo' />
          <h1>DEVinCursos</h1>
        </div>
      </header>
    </Link>
  );
}

export default Navbar;
