import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src="assets/img/mon-petit-jardin-removebg-preview.png" alt="Logo de l'entreprise Rossignol Paysage" />
                </Link>
            </div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/realisations">Réalisations</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}
