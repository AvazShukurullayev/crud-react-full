import "./Header.css"

const Header = () => {
    return (
        <header className="header bg-dark text-light py-3 shadow mb-3">
            <div className="container">
                <nav className="nav d-flex align-items-center justify-content-between">
                    <a href="#!" className="nav__logo text-decoration-none fs-3 text-light">CRUD</a>
                    <ul className="nav__list d-flex align-items-center gap-4">
                        <li className="nav__item">
                            <a href="#!" className="nav__link text-decoration-none text-light fs-5">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#!" className="nav__link text-decoration-none text-light fs-5">Contact</a>
                        </li>
                        <li className="nav__item">
                            <a href="#!" className="nav__link text-decoration-none text-light fs-5">Support &amp; Help</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header