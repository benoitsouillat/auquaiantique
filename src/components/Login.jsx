import React, { useState } from 'react';
import Button from './Button';
import { authenticationService } from '../services/authentication';

const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const loginCredentials = (login, password) => {
        const userCredentials = {login, password};

        return authenticationService.login(userCredentials)
            .then(loginData => console.log(loginData))
            .catch(error => console.error(error));
    }

    const sendConnexion = (e) => {
        e.preventDefault();
        loginCredentials(login, password);
    }

    return (
        <div className='login-container'>
            <section>
                <h3>Inscription</h3>
                <form>
                    <div className='w50'>
                        <label>Prenom</label>
                        <input />
                    </div>
                    <div className='w50'>
                        <label>Nom</label>
                        <input />
                    </div>
                    <label>Email</label>
                    <input />
                    <label>Mot de passe</label>
                    <input />
                    <label>Confirmer le mot de passe</label>
                    <input />
                    <Button label="S'inscrire" type="submit" />
                </form>
            </section>
            <section>
                <h3>Connexion</h3>
                <form onSubmit={(e) => sendConnexion(e)}>
                    <label>Email</label>
                    <input type="text" value={login} onChange={(e) => {setLogin(e.currentTarget.value)}}/>
                    <label>Mot de Passe</label>
                    <input type="password" value={password} onChange={(e) => {setPassword(e.currentTarget.value)}}/>
                    <Button type="submit" label='Se Connecter' />
                </form>
            </section>

        </div>
    )
}

export default Login
