import React from 'react';
import Menu from './Menu';

const LoginHeader = () => {
    return (
        <Menu
            linkNavigate={[
                {
                    title: "Accueil",
                    route: "/"
                },
                {
                    title: 'Notre Carte',
                    route: "/carte"
                },
                {
                    title: 'A Propos de nous',
                    route: '/aboutus'
                }
            ]}
            linkConnect={[
                {
                    title: 'Connexion',
                    route: '/login'
                }
            ]}
        />
    )
}

export default LoginHeader
