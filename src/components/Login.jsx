import React from 'react';
import Button from './Button';


const Login = () => {
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
                    <input />
                    <label>Mot de Passe</label>
                    <input />
                    <Button label="Se connecter" type="submit" />
                </form>
            </section>

        </div>
    )
}

export default Login
