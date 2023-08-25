import "./FilterPanel.css"

const FilterPanel = () => {
    return (
        <div className="btn-group my-2">
            <button className="btn btn-dark">All movies</button>
            <button className="btn btn-outline-dark">Favourite movies</button>
            <button className="btn btn-outline-dark">Liked movies</button>
            <button className="btn btn-outline-dark">MostViewed movies</button>
        </div>
    )
}

export default FilterPanel