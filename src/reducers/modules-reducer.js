import React from "react";


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
        case "DELETE_MODULE":
        case "UPDATE_MODULE":
        default:
            return state
    }
}
export default moduleReducer