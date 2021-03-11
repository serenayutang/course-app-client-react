import React, {useEffect} from "react";
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"
import moduleService from "../../services/module-service";

const LessonTabs = ({
        lessons = [],
        findLessons=(lessonId) => console.log(lessonId),
        createLesson=() => alert("create new module"),
        deleteLesson=(item) => alert("delete" + item._id),
        updateLesson,
        cleanState
}) => {
    const {courseId, moduleId, lessonId, layout} = useParams();

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessons(moduleId)
        } else {
            cleanState([])
        }
    }, [moduleId])

   return(
       <div>
            <h2>Lessons</h2>
            <ul className="nav nav-pills">
                {
                    lessons.map(lesson =>
                        <li className="nav-item">
                            <EditableItem
                                active={lesson._id === lessonId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                key={lesson._id}
                                item={lesson}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createLesson(moduleId)} className="fas fa-plus"/>
                </li>
            </ul>
        </div>)}

const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessonReducer.lessons
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createLesson: (moduleId) => {
            lessonService.createLesson(moduleId, {title: "New Lesson"})
                .then(lesson => dispatch({
                    type: "CREATE_LESSON",
                    lesson
                }))
        },
        deleteLesson: (item) =>
            lessonService.deleteLesson(item._id)
                .then(status => dispatch({
                    type: "DELETE_LESSON",
                    lessonToDelete: item
                })),
        updateLesson: (lesson) =>
            moduleService.updateModule(lesson._id, lesson)
                .then(status => dispatch ({
                    type: "UPDATE_LESSON",
                    lesson
                })),
        findLessons: (moduleId) => {
            lessonService.findLessons(moduleId)
                .then(lessons => dispatch({
                    type: "FIND_LESSONS",
                    lessons
                }))
        },
        cleanState : () => {
            dispatch({
                type: "CLEAN_STATE",
            })
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper) (LessonTabs)