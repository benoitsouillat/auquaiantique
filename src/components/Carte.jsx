import React from 'react';
import by_carte from '../JSON/by_carte.json';
import menusData from '../JSON/menus.json';

const Carte = () => {

    const entries = [by_carte][0].Entrées;
    const lunches = [by_carte][0].Plats;
    const desserts = [by_carte][0].Desserts;
    const menus = menusData['menus'];
    return (
        <section className='carte'>
            <h2>La Carte</h2>
            <div className='carte-container'>
                <section className='by_carte'>
                    <h3>Menu à la carte</h3>
                    <div className='entrées'>
                        <h4>Entrée</h4>
                        {
                            entries.map((lunch, i) => {
                                return (
                                    <p key={i}>{lunch.label}<br />{lunch.description}<span className='carte-price'>{lunch.price}</span></p>
                                )
                            })
                        }
                    </div>
                    <div className='plats'>
                        <h4>Plats</h4>
                        {
                            lunches.map((lunch, i) => {
                                return (
                                    <p key={i}>{lunch.label}<br />{lunch.description}<span className='carte-price'>{lunch.price}</span></p>
                                )
                            })
                        }
                    </div>
                    <div className='desserts'>
                        <h4>Desserts</h4>
                        {
                            desserts.map((lunch, i) => {
                                return (
                                    <p key={i}>{lunch.label}<br />{lunch.description}<span className='carte-price'>{lunch.price}</span></p>
                                )

                            })
                        }
                    </div>
                </section>
                {
                    menus.map((menu, i) => {
                        return (
                            <section>
                                <h3>{menu.title}</h3>
                                <p>{menu.entry}</p>
                                <p>{menu.lunch}</p>
                                <p>{menu.dessert}</p>
                                <p className='carte-price'>
                                    {menu.diner} <br /> {menu.dejeuner}
                                </p>
                            </section>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Carte
