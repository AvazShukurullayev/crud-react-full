import "./CrudInfo.css"

const CrudInfo = () => {
    return (
        <div className="crud-info shadow px-4 py-2 my-4 rounded-3">
            <p className="fs-4 my-1">All movies: 0</p>
            <p className="fs-5 my-1">Favourite movies: 0</p>
            <p className="fs-5 my-1">Liked movies: 0</p>
            <p className="fs-5 my-1">Most viewed movies: 0</p>
        </div>
    )
}

export default CrudInfo