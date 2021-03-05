import React from "react";
import {connect} from "react-redux";
import EditableItem from "./editable-item";

const ModuleList = (
    {
        myModules=[],
        createModule,
        deleteModule = (item) => alert("delete" + item.id),
        updateModule
    }) =>
    <div>
        <h2>Modules {myModules.length}</h2>
        <ul className="list-group">
            {
                myModules.map(module =>
                <li className="list-group-item">
                    <EditableItem
                        updateItem={updateModule}
                        deleteItem={deleteModule}
                        item={module}/>
                </li>
                )
            }
            <li className="list-group-item">
                <i onClick={createModule} className="fas fa-plus fa-2x"/>
            </li>
        </ul>
    </div>

const stateToProperyMapper = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createModule: () => dispatch({type: "CREATE_MODULE"}),
        deleteModule: (item) => dispatch({
            type: "DELETE_MODULE",
            moduleToDelete: item
        }),
        updateModule: (module) => dispatch ({
            type: "UPDATE_MODULE",
            module: module
        })
    }
}

export default connect(stateToProperyMapper, dispatchToPropertyMapper) (ModuleList)