import React from 'react';
import Button from './Button';

const Aboutus = () => {
    return (
        <div className='aboutus-container'>

            <section>
                <h3>Qui sommes-nous ?</h3>
                <p>Passionnés de cuisine gastronomique, nous nous sommes installés dans la région de Chambéry, afin de profiter, en compagnie de nos clients, de la tradition savoyarde</p>
                <p>Notre restaurant vous propose divers plats gastronomiques, typique de la France entière pour voyager durant vos vacances et proposer une grande quantité de variété pour s'adapter à tous les goûts</p>


            </section>
            <section>
                <h3>Où sommes-nous ?</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17059.397991344904!2d5.902597037474666!3d45.58724954426563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba872c70b9471%3A0x83e74f0c9509737!2sCentre%20Commercial%20Chamnord!5e0!3m2!1sfr!2sfr!4v1678445849473!5m2!1sfr!2sfr"></iframe>
                <Button label="Y Aller" type="button"/>
                <div className='div-address'>
                    <address>
                        <p>Le Quai Antique</p>
                        <p>14 Le pont d'à côté</p>
                        <p>73000 Chambéry</p>
                    </address>
                    <img src="/img/boulettes.jpeg" alt="Chambéry et le Quai antique" />
                </div>

            </section>

        </div>
    )
}

export default Aboutus
