import React from 'react';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const images = [
        'assets/img/feuilles-multicolores.jpg',
        'assets/img/beau-panorama-du-parc-ville-verte-aube.jpg',
        'assets/img/escalier-dans-magnifique-parc.jpg',
    ]

    return (
        <main className="home-page">
            <section className="slider-container" style={{ backgroundImage: `url(${images[0]})` }}>
                <Slider images={ images } />
                <div className="services-box-container">
                    <div className="services-box">
                        <h3>MON PETIT JARDIN</h3>
                        <p>Transformez votre espace extérieur en un havre de paix personnalisé...</p>
                        <div className="buttons-container">
                            <Link to="/realisations" className="button-aboutpage">Nos réalisations</Link>
                            <Link to="/contact" className="button-contactpage">Nous contacter</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <article className="about-container">
                    <h1>À Propos de Mon Petit Jardin</h1>
                        <p> Fondée sur une passion pour la nature et la conception paysagère, Mon Petit Jardin a été créée pour transformer vos espaces extérieurs en oasis de paix. Depuis plus de dix ans, notre entreprise familiale apporte expertise et créativité aux jardins et espaces verts de la région bordelaise.</p>
                        <p>Chez Mon Petit Jardin, nous nous engageons à utiliser des méthodes durables et écologiques pour préserver la beauté de notre environnement. Notre objectif est de créer des espaces qui non seulement embellissent votre quotidien mais contribuent également à la santé de notre planète.</p>
                        <p>Nous vous invitons à découvrir notre galerie de réalisations pour explorer la diversité et la qualité de notre travail. Si vous avez un projet en tête ou que vous souhaitez simplement échanger sur des idées de paysagisme, n'hésitez pas à nous contacter.</p>
                </article>
                <article className="about-address">
                    <h2>Venez nous rencontrer: </h2>
                        <iframe width="800" height="400" frameborder="0" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.9793790316994!2d-0.6122565!3d44.8423533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d81b1853c6c9%3A0x6a4e82d2dc07223b!2s7%20Rue%20de%20la%20Paix%2C%2033200%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1705321718815!5m2!1sfr!2sfr"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe>
                </article>
            </section>
        </main>
    )
}
