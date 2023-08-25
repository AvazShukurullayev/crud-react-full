import "./CrudList.css"
import {CrudItem} from "../index";

const CrudList = () => {
    return (
        <div className="shadow px-4 py-2 my-4 rounded-3">
            <ul className="crud-list list-group">
                <CrudItem />
                <CrudItem />
                <CrudItem />
                <CrudItem />
                <CrudItem />
            </ul>
        </div>
    )
}

export default CrudList