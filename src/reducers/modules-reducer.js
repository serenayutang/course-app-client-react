import React from "react";


const initialState = {
    modules: []
}

const moduleReducer = (state= initialState, action) => {
    switch (action.type) {
        case "FIND_MODULES":
            return {
                ...state,
                modules: action.modules
            }

        case "CREATE_MODULE":
            return {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case "DELETE_MODULE":
            return {
                modules: state.modules.filter(module => {
                    if (module._id === action.moduleToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(module => {
                    if (module._id === action.module._id) {
                        return action.module
                    } else {
                        return module
                    }
                })
            }
        default:
            return state
    }
}
export default moduleReducer