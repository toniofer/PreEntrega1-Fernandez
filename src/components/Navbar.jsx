import Logo from "./Logo"
import CartWidget from "./CartWidget"
import "./navbar.css"
function Navbar() {
    return (
        <div className="navbar">
            <Logo />
            <ul className="navbar-links">
                <li className="navbar-item">
                    <a href="">Procesadores</a>
                </li>
                <li className="navbar-item">
                    <a href="">Motherboards</a>
                </li>
                <li className="navbar-item">
                    <a href="">Memorias RAM</a>
                </li>
                <li className="navbar-item">
                    <a href="">Almacenamientos</a>
                </li>
                <li className="navbar-item">
                    <a href="">Fuentes</a>
                </li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default Navbar