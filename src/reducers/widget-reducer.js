import {
    CREATE_WIDGET_FOR_TOPIC,
    FIND_WIDGETS_FOR_TOPIC,
    UPDATE_WIDGET,
    DELETE_WIDGET,
    SET_ACTIVE_WIDGET
} from "../actions/widget-actions";

const initialState = {
    widgets: [
        {id: 1111, type: "HEADING"},
        {id: 2222, type: "HEADING"}
    ],
    activeWidget: {}
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET_FOR_TOPIC:
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case FIND_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            }
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    if (widget.id === action.widgetToDelete) {
                        return false
                    } else {
                        return true
                    }
                })
            }
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widget.id) {
                        return action.widgets
                    } else {
                        return widget
                    }
                })
            }
        case SET_ACTIVE_WIDGET:
            return{
                ...state,
                activeWidget: action.activeWidget
            }
        default:
            return state
    }
}
export default widgetReducer