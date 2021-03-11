const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "FIND_TOPICS":
            return {
                ...state,
                topics: action.topics
            }
        case "DELETE_TOPIC":
            return {
                topics: state.topics.filter(topic => {
                    if (topic._id === action.topicToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(topic => {
                    if (topic._id === action.topic._id) {
                        return action.topics
                    } else {
                        return topic
                    }
                })
            }
        default:
            return state
    }
}

export default topicReducer

