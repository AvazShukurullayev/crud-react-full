import "./Crud.css"
import {CrudInfo, CrudPanel, CrudList, CrudCreateForm, CrudUpdateForm, CrudTable} from "../index";

const Crud = () => {
    return (
        <div className="crud">
            <h1 className="text-center">Movies CRUD</h1>
            <CrudInfo />
            <CrudPanel />
            <CrudList />
            <CrudTable />
            <CrudCreateForm />
            <CrudUpdateForm />
        </div>
    )
}

export default Crud