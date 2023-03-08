import React from 'react';
import Menu from './Menu';

const Home = () => {
    return (

        <Menu
            linkNavigate={[
                {
                    title: 'Accueil',
                    route: '/',
                    classname: 'active'
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

export default Home
