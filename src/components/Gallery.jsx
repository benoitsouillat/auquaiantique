import React, { useState } from 'react';
import Button from "./Button";

const Gallery = () => {

    const foodImg = [
        {
            url: "/img/bavette_echalote.jpg",
            description: "Bavette aux oignons et Pommes de Terres Sautées",
            id: "bavette"
        },
        {
            url: "/img/boulettes.jpeg",
            description: "Boulette de Viande Hachée",
            id: "boulette"
        },
        {
            url: "/img/breton.jpg",
            description: "Une spécialité Bretonne",
            id: "breton"
        },
        {
            url: "/img/farcies.jpg",
            description: "Tomate farcies maison",
            id: "farcies"
        },
        {
            url: "/img/toquet.jpg",
            description: "desc",
            id: "toquet"
        },
        {
            url: "/img/spaghetti.jpg",
            description: "Un plat de spaghetti",
            id: "spaghetti"
        },
        {
            url: "/img/pizza.jpg",
            description: "Une Pizza faite maison",
            id: "pizza"
        },
        {
            url: "/img/presse_ail_tomate.jpg",
            description: "Presse ail et tomate",
            id: "presse"
        },
        {
            url: "/img/Roti_Gastro.jpg",
            description: "La spécialité du chef",
            id: "roti"
        }
    ]
    let [selectImg, setSelectImg] = useState(
        {
            url: 'img/bavette_echalote.jpg',
            description: "Une Bavette aux échalotes"
    });


    const setImgShow = (id) => {
        foodImg.map((pic) => {
            if (pic.id === id) {
                setSelectImg(pic);
            }
        });

    };
    const handleClickImg = (e) => {
        setImgShow(e.target.id);
    };

    return (
        <section className='gallery-section'>
            <h2>La Galerie</h2>
            <div className="gallery">
                <div className='grid-gallery'>
                    {
                        foodImg.map((pic, i) => (
                            <div key={i} onClick={handleClickImg}>
                                <img id={pic.id} src={pic.url} alt={pic.description} />
                            </div>
                        ))}
                </div>
                <Button label="Réserver une table" />
            </div>
            <div className='selected-image-container'>
                <figure>
                    <img src={selectImg.url} alt={selectImg.description} />
                    <figcaption>{selectImg.description}</figcaption>
                </figure>

            </div>

        </section>

    )
}

export default Gallery
