import "./SearchPanel.css"

const SearchPanel = () => {
    return (
        <div className="my-2">
            <label htmlFor="search" className="form-label">Search</label>
            <input type="search" className="form-control" id="search" name="search" placeholder="Search movie..." />
        </div>

    )
}

export default SearchPanel