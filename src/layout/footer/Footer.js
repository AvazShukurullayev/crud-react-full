import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-3 shadow mt-3">
            <div className="container">
                <p className="fs-3 text-center">&copy; Copyright Reserved {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer