import React, { useState } from 'react';
import Button from "./Button";

const Gallery = () => {

    const foodImg = [
        {
            url: process.env.PUBLIC_URL + "/img/bavette_echalote.jpg",
            description: "Bavette aux oignons et Pommes de Terres Sautées",
            id: "bavette"
        },
        {
            url: process.env.PUBLIC_URL + "/img/boulettes.jpeg",
            description: "Boulette de Viande Hachée",
            id: "boulette"
        },
        {
            url: process.env.PUBLIC_URL + "/img/breton.jpg",
            description: "Une spécialité Bretonne",
            id: "breton"
        },
        {
            url: process.env.PUBLIC_URL + "/img/farcies.jpg",
            description: "Tomate farcies maison",
            id: "farcies"
        },
        {
            url: process.env.PUBLIC_URL + "/img/toquet.jpg",
            description: "desc",
            id: "toquet"
        },
        {
            url: process.env.PUBLIC_URL + "/img/spaghetti.jpg",
            description: "Un plat de spaghetti",
            id: "spaghetti"
        },
        {
            url: process.env.PUBLIC_URL + "/img/pizza.jpg",
            description: "Une Pizza faite maison",
            id: "pizza"
        },
        {
            url: process.env.PUBLIC_URL + "/img/Presse_ail_tomate.jpg",
            description: "Presse ail et tomate",
            id: "presse"
        },
        {
            url: process.env.PUBLIC_URL + "/img/Roti_Gastro.jpg",
            description: "La spécialité du chef",
            id: "roti"
        }
    ]
    let [selectImg, setSelectImg] = useState(
        {
            url: process.env.PUBLIC_URL + '/img/bavette_echalote.jpg',
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
                        foodImg.map((pic, i) => { 
                            return (
                            <div key={i} onClick={handleClickImg}>
                                <img id={pic.id} src={pic.url} alt={pic.description} />
                            </div>
                        )}
                    )}
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
