import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const Menu = ({ linkNavigate, linkConnect }) => {
  return (
    <div className='menu'>
      <ul>
        {linkNavigate.map( link => (
          <li><Link to={link.route}>{link.title}</Link></li>
        ))}
{/*         <li><Link to="/">Accueil</Link></li>
        <li><Link to="/">Notre Carte</Link></li>
        <li><Link to="/">A Propos de nous</Link></li> */}
      </ul>
      <ul>
        <li><Link to="/">Connexion</Link></li>
        <li><Link to="/">Réserver</Link></li>
      </ul>

    </div>
  )
}

export default Menu
