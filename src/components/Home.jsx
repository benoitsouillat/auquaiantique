import React from 'react';
import Menu from './Menu';

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
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

export default Home
