import React from 'react';
import Button from "./Button";

const Gallery = () => {

    const foodImg = [
        {
            url: "/img/bavette_echalote.jpg",
            description: "Bavette aux oignons et Pommes de Terres Sautées"
        },
        {
            url: "/img/boulettes.jpeg",
            description: "Boulette de Viande Hachée"
        },
        {
            url: "/img/breton.jpg",
            description: "Une spécialité Bretonne"
        },
        {
            url: "/img/farcies.jpg",
            description: "Tomate farcies maison"
        },
        {
            url: "/img/toquet.jpg",
            description: "desc"
        },
        {
            url: "/img/spaghetti.jpg",
            description: "Un plat de spaghetti"
        },
        {
            url: "/img/pizza.jpg",
            description: "Une Pizza faite maison"
        },
        {
            url: "/img/presse_ail_tomate.jpg",
            description: "Presse ail et tomate"
        },
        {
            url: "/img/Roti_Gastro.jpg",
            description: "La spécialité du chef"
        }
    ]
    return (
        <section>
            <h2>La Galerie</h2>
            <div className="gallery">
                <div className='grid-gallery'>
                    {
                        foodImg.map(pic => (
                            <div>
                                <img src={pic.url} alt={pic.description} />
                            </div>
                        ))}
                </div>


                <Button label="Réserver une table" />

            </div>
            <div className='selected-image-container'>

            </div>

        </section>

    )
}

export default Gallery
