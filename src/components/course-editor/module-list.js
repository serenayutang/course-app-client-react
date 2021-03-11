import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import EditableItem from "./editable-item";
import moduleService from "../../services/module-service";


const ModuleList = ({
        modules=[],
        findModules=(courseId) => console.log(courseId),
        createModule=() => alert("create new module"),
        deleteModule=(item) => alert("delete" + item._id),
        updateModule
    }) => {
    const {courseId, moduleId, layout} = useParams();
    useEffect(() => {
        findModules(courseId)
    },[])
    return(
        <div>
            <h2>Modules</h2>
            <ul className="list-group">
                {
                    modules.map(module =>
                    <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                            updateItem={updateModule}
                            deleteItem={deleteModule}
                            active={module._id === moduleId}
                            key={module._id}
                            item={module}/>
                    </li>
                    )
                }
                <li className="list-group-item">
                    <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"/>
                </li>
            </ul>
        </div>
    )}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.moduleReducer.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
            }))
        },
        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
        })),
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch ({
                    type: "UPDATE_MODULE",
                    module: module
            })),
        findModules: (courseId) => {
            moduleService.findModules(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULES",
                    modules: theModules
            }))
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper) (ModuleList)