import React from 'react';
import Menu from './Menu';

const Carte = () => {
  return (
    <div>
        <h2> Notre Carte</h2>
        <Menu 
                   linkNavigate = {[
                    {
                      title: 'Accueil', 
                      route: '/'
                    },
                    {
                      title: 'Notre Carte', 
                      route: '/carte'
                    }
                  ]}
                  linkConnect = {[]}

        />
      
    </div>
  )
}

export default Carte
