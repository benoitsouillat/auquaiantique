import React from 'react';
import Menu from './Menu';

const CarteHeader = () => {
  return (

    <Menu
      linkNavigate={[
        {
          title: 'Accueil',
          route: '/auquaiantique'
        },
        {
          title: 'Notre Carte',
          route: '/carte'
        },
        {
          title: 'A Propos de nous',
          route: '/aboutus'
      }
      ]}
      linkConnect={[]}

    />

  )
}

export default CarteHeader
