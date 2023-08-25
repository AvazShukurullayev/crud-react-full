import "./CrudPanel.css"
import {SearchPanel, FilterPanel} from "../index";

const CrudPanel = () => {
    return (
        <div className="crud-panel shadow px-4 py-2 my-4 rounded-3">
            <SearchPanel />
            <FilterPanel />
        </div>
    )
}

export default CrudPanel