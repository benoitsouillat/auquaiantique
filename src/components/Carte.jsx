import React from 'react';

const Carte = () => {
    return (
        <section className='carte'>
            <h2>La Carte</h2>
            <div className='carte-container'>
                <section className='by_carte'>
                    <h3>Menu à la carte</h3>
                    <div className='entrées'>
                        <h4>Entrée</h4>
                        <p>Tarte d'oignons <br /> Oignons revenus à feu doux  <br/> <span className='carte-price'>8,00€</span></p>
                        <p>Salade de gésier <br /> En partenariat avec des éleveurs locaux <br/> <span className='carte-price'>7,50€</span></p>

                    </div>
                    <div className='plats'>
                        <h4>Plats</h4>
                        <p>Sauté de veau <br /> Description et tout et tout <span className='carte-price'>8,00€</span> </p>


                    </div>
                    <div className='desserts'>
                        <h4>Desserts</h4>
                        <p>Dame Blanche <br /> Glace à la vanille nappée de chocolat fondue </p>

                    </div>

                </section>
                <section>
                    <h3>Menu du Marché</h3>
                    <p>Assiette de Campagne composée de rosette et pâté local</p>
                    <p>Filet de maquereau mariné au vin blanc et aromates</p>
                    <p>Glace ou sorbet, parfum au choix</p>

                    <p className='carte-price'>
                        Diner: Entrée + Plat + Dessert - 22€
                        <br />
                        Déjeuner : Entrée + Plat + Dessert - 19€
                    </p>
                </section>
                <section>
                    <h3>Menu du Chef</h3>
                    <p>Gâteau de foie de volaille et son coulis de tomate</p>
                    <p>Faux-filet au poivre avec accompagnement au choix</p>
                    <p>Assiette de trois fromages sélectionnés</p>

                    <p className='carte-price'>
                        Diner: Entrée + Plat + Dessert - 25€
                        <br />
                        Déjeuner : Entrée + Plat + Dessert - 23€
                    </p>
                </section>
                <section>
                    <h3>Menu Enfant</h3>
                    <p>Croq Veggie au fromage</p>
                    <p>Steack haché ou cordon bleu avec frites authentiques de Belgique ou haricots verts</p>
                    <p>Fromage blanc et glace super-héros</p>

                    <p className='carte-price'>
                        Entrée + Plat + Dessert - 12€
                    </p>
                </section>

            </div>
        </section>
    )
}

export default Carte
