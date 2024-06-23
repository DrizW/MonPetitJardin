
export default function Footer() {
    return (
        <footer>
			<section className="informations-footer">
				<article>
                    <i className="fa-solid fa-mobile-screen-button"></i>
                    <h4>
                        <a href="tel:+33781460522">Tél: 07 11 16 15 32</a>
                    </h4>
				</article>
				<article>
                <i className="fa-solid fa-location-dot"></i>
					<address>7 CHEMIN DE LA PAIX, 33000 BORDEAUX</address>
				</article>
				<article>
					<i className="fa-brands fa-instagram"></i>
					<h4>
                    <a href="https://www.instagram.com/">SUIVEZ-NOUS</a>
                    </h4>
				</article>
			</section>
			<small>
                <a href="/">© 2023 D.S </a> <a href="/legal">| Mentions légales |</a> <a href="/connexion">Connexion</a>
			</small>   
        </footer>
    )
}