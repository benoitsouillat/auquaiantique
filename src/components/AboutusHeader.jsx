import React from 'react';
import Menu from './Menu';

const AboutusHeader = () => {
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

export default AboutusHeader
