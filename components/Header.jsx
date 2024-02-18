import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <img className="logo" src="logo192.png" width="160px" alt="" />
      </div>
      <nav className={menuOpen ? 'open' : ''}>
        <ul id="MenuItems">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Product" onClick={closeMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/Category" onClick={closeMenu}>
              Category
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/Cart" onClick={closeMenu}>
              <ShoppingCartIcon />
            </Link>
          </li>
        </ul>
      </nav>
      <img className="menu-icon" src="menu.png" alt="" onClick={handleMenuToggle} />
    </header>
  );
};

export default Header;
