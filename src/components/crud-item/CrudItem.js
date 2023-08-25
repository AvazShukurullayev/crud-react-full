import "./CrudItem.css"

const CrudItem = () => {
    return (
        <li className="crud-item list-group-item">
            <div className="row align-items-center">
                <div className="col-6">
                    <span className="movie-name">The Social Network</span>
                </div>
                <div className="col-2 d-flex justify-content-end">
                    <span className="movie-release-date">15000</span>
                </div>
                <div className="col-2 d-flex justify-content-end">
                    <span className="movie-release-date">February 1, 2010</span>
                </div>
                <div className="col-2 d-flex justify-content-end">
                    <div className="btn-group">
                        <button className="btn btn-sm btn-primary">👍</button>
                        <button className="btn btn-sm btn-info">⭐</button>
                        <button className="btn btn-sm btn-success">✏️</button>
                        <button className="btn btn-sm btn-danger">🗑️</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CrudItem