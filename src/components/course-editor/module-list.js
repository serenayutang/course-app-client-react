import React from "react";
import {connect} from "react-redux";

const ModuleList = ({myModules=[]}) =>
    <div>
        <h2>Modules {myModules.length}</h2>
        <ul className="list-group">
            {
                myModules.map(module =>
                <li className="list-group-item">
                    {module.title}
                </li>
                )
            }
        </ul>
    </div>

const stateToProperyMapper = (state) => {
    return {
        myModules: state.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {

}

export default connect(stateToProperyMapper, dispatchToPropertyMapper) (ModuleList)