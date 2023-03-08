import React from 'react';
import Menu from './Menu';

const Carte = () => {
  return (

    <Menu
      linkNavigate={[
        {
          title: 'Accueil',
          route: '/'
        },
        {
          title: 'Notre Carte',
          route: '/carte'
        }
      ]}
      linkConnect={[]}

    />

  )
}

export default Carte
