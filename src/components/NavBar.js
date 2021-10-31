import logo from '../assets/logo.png';
import { CartWidget } from './CartWidget';
import { NavLink, Link } from 'react-router-dom';
// import ItemDetailContainer from './ItemDetailContainer';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <NavLink to={`/`}><img src={logo} alt="Logo" style={{ width: 100 }} /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to={`/`} className="nav-link">Deco y accesorios</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/`} className="nav-link">Línea holística</Link>
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
