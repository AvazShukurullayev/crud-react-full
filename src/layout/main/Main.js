import "./Main.css"
import Crud from "../../components/crud/Crud";

const Main = () => {
    return (
        <main className="main">
            <section className="crud-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Crud />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main