import "./CrudCreateForm.css"

const CrudCreateForm = () => {
    return (
        <div className="crud-create-form shadow px-4 py-2 my-4 rounded-3">
            <p className="fs-3 my-2">Movie create form</p>
            <form className="input-group my-2">
                <input type="text" className="form-control" id="name" name="name"
                       placeholder="Name of movie"/>
                <input type="number" className="form-control" id="views" name="views"
                       placeholder="Views"/>
                <input type="text" className="form-control" id="release_date" name="release_date"
                       placeholder="Release date"/>
                <button className="btn btn-dark">Create movie</button>
            </form>
        </div>
    )
}

export default CrudCreateForm