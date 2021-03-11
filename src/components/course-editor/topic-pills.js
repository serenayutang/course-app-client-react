import React, {useEffect} from "react";
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service";


const TopicPills = ({
                       topics = [],
                        findTopicsForLesson=(topicId) => console.log(topicId),
                        createTopic=() => alert("create new topic"),
                        deleteTopic=(item) => alert("delete" + item._id),
                        updateTopic,
                        cleanState
                    }) => {
    const {courseId, moduleId, lessonId, topicId, layout} = useParams();
    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        } else {
            cleanState()
        }
    }, [lessonId])

    return(
        <div>
            <h2>Topics</h2>
            <ul className="nav nav-pills">
                {
                    topics.map(tp =>
                        <li className="nav-item">
                            <EditableItem
                                active={tp._id === topicId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${tp._id}`}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                                key={tp._id}
                                item={tp}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createTopic(lessonId)} className="fas fa-plus float-right"/>
                </li>
            </ul>
        </div>)}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createTopic: (lessonId) => {
            topicService.createTopic(lessonId, {title: "New Topic"})
                .then(tp => dispatch({
                    type: "CREATE_TOPIC",
                    topic: tp
                }))
        },

        deleteTopic: (topic) =>
            topicService.deleteTopic(topic._id)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topicToDelete: topic
                })),
        updateTopic: (topic) =>
            topicService.updateTopic(topic._id, topic)
                .then(status => dispatch ({
                    type: "UPDATE_TOPIC",
                    topic
                })),
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(topics => dispatch({
                    type: "FIND_TOPICS",
                    topics
                }))
        },

        cleanState: () =>
            dispatch({
                type: "CLEAN_STATE"
            })
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper) (TopicPills)