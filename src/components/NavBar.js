import logo from '../assets/logo.png';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand img-fluid" href="inicio"><img src={logo} alt="Logo" style={{width: 100}} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="home">Deco y accesorios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="fea">Línea holística</a>
                        </li>

                        <li className="nav-item">
                            <CartWidget />
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
