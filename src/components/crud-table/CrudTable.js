import "./CrudTable.css"

const CrudTable = () => {
    return (
        <div className="shadow px-4 py-2 my-4 rounded-3">
            <table className="table table-responsive table-light table-striped table-bordered table-hover">
                <thead>
                <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Views</th>
                    <th>Release Date</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>1</td>
                    <td>The Social Networks</td>
                    <td>1500000</td>
                    <td>October 1, 2010</td>
                    <td>
                        <div className="btn-group">
                            <button className="btn btn-sm btn-primary">👍</button>
                            <button className="btn btn-sm btn-info">⭐</button>
                            <button className="btn btn-sm btn-success">✏️</button>
                            <button className="btn btn-sm btn-danger">🗑️</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>The Social Networks</td>
                    <td>1500000</td>
                    <td>October 1, 2010</td>
                    <td>
                        <div className="btn-group">
                            <button className="btn btn-sm btn-primary">👍</button>
                            <button className="btn btn-sm btn-info">⭐</button>
                            <button className="btn btn-sm btn-success">✏️</button>
                            <button className="btn btn-sm btn-danger">🗑️</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>The Social Networks</td>
                    <td>1500000</td>
                    <td>October 1, 2010</td>
                    <td>
                        <div className="btn-group">
                            <button className="btn btn-sm btn-primary">👍</button>
                            <button className="btn btn-sm btn-info">⭐</button>
                            <button className="btn btn-sm btn-success">✏️</button>
                            <button className="btn btn-sm btn-danger">🗑️</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>The Social Networks</td>
                    <td>1500000</td>
                    <td>October 1, 2010</td>
                    <td>
                        <div className="btn-group">
                            <button className="btn btn-sm btn-primary">👍</button>
                            <button className="btn btn-sm btn-info">⭐</button>
                            <button className="btn btn-sm btn-success">✏️</button>
                            <button className="btn btn-sm btn-danger">🗑️</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>The Social Networks</td>
                    <td>1500000</td>
                    <td>October 1, 2010</td>
                    <td>
                        <div className="btn-group">
                            <button className="btn btn-sm btn-primary">👍</button>
                            <button className="btn btn-sm btn-info">⭐</button>
                            <button className="btn btn-sm btn-success">✏️</button>
                            <button className="btn btn-sm btn-danger">🗑️</button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable