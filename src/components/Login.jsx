import React, { useState } from 'react';
import Button from './Button';


const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    const sendConnexion = (e) => {
        e.preventDefault();
        console.log(login + ' ' + password + ' envoyés.')
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
                <form>
                    <label>Email</label>
                    <input type="text" value={login} onChange={(e) => {setLogin(e.currentTarget.value)}}/>
                    <label>Mot de Passe</label>
                    <input type="password" value={password} onChange={(e) => {setPassword(e.currentTarget.value)}}/>
                    <button className="button" type="submit" onClick={(e) => sendConnexion(e)}>Se Connecter</button>
                </form>
            </section>

        </div>
    )
}

export default Login
