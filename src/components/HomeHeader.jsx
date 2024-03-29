import React from 'react';
import Menu from './Menu';

const HomeHeader = () => {
    return (

        <Menu
            linkNavigate={[
                {
                    title: 'Accueil',
                    route: '/auquaiantique',
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

export default HomeHeader
