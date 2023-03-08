import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ linkNavigate, linkConnect }) => {
  return (
    <nav className='menu'>
      <ul>
        {linkNavigate.map((link, i) => (
          <li key={i}><Link className={link.classname} to={link.route}>{link.title}</Link></li>
        ))}
      </ul>
      <ul>
        <li><Link to="/">Connexion</Link></li>
        <li><Link to="/">Réserver</Link></li>
      </ul>

    </nav>
  )
}

export default Menu
