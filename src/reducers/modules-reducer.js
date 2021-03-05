import React from "react";
import {act} from "@testing-library/react";


const initialState = {
    modules: [
        {_id: 111, title: "Module 111"},
        {_id: 222, title: "Module 222"},
        {_id: 333, title: "Module 333"}
    ]
}

const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            const newState1 = {
                modules: [
                    ...state.modules,
                    {
                        title: "NEW MODULE",
                        _id: (new Date()).getTime()
                    }
                ]
            }
            return newState1

        case "DELETE_MODULE":
            alert("delete" + action.moduleToDelete.title)
            const newState2 = {
                modules: state.modules.filter(module => {
                    if(module._id === action.moduleToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState2

        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(m => {
                    if (m._id === action.module._id) {
                        return action.module
                    } else {
                        return m
                    }
                })
            }
        default:
            return state
    }
}
export default moduleReducer