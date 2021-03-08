import React from 'react'
import "./course-editor.css";
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {courseId, moduleId} = useParams();
    return (
        <Provider store={store}>
            <div>
                <h2>
                    {/*<Link to = "/courses/table">*/}
                    {/*    <i className="fas fa-arrow-left"></i>*/}
                    {/*</Link>*/}
                    <Link>
                        <i onClick={() => history.goBack()} className="fas fa-arrow-left"/>
                    </Link>
                    Course Editor
                    <i onClick={() => history.goBack()} className="fas fa-times float-right"/>
                </h2>
                <div className="row">
                    <div className="col-4"><ModuleList/></div>
                    <div className="col-8"><LessonTabs/></div>
                </div>
            </div>
        </Provider>
    )
}
export default CourseEditor

// const CourseEditor = () => {
//     let history = useHistory();
//     return (
//         <div className="container course-editor-background">
//             <br/>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-3">
//                         <h5>
//                             <i onClick={() => history.goBack()}
//                                className="far fa-times-circle">
//                             </i>
//                             CS5610 WebDev
//                         </h5>
//                     </div>
//
//                     <div className="col-9">
//                         <ul className="nav nav-tabs">
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Apps</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link disabled" href="#" tabIndex="-1"
//                                    aria-disabled="true">Disabled</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#"><i className="fas fa-plus"/></a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//
//                 <div className="row">
//                     <div className="col-3">
//                         <ul className="list-group">
//                             <li className="list-group-item">Module 1 - JQuery
//                                 <i className="far fa-times-circle float-right"/>
//                             </li>
//                             <li className="list-group-item active">Module 2 - React
//                                 <i className="far fa-times-circle float-right"/>
//                             </li>
//                             <li className="list-group-item">Module 3 - Redux
//                                 <i className="far fa-times-circle float-right"/>
//                             </li>
//                             <li className="list-group-item"><i className="fas fa-plus-circle float-right"/></li>
//                         </ul>
//                     </div>
//
//                     <div className="col-9">
//                         <br/>
//
//                         <ul className="nav nav-pills">
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link disabled" href="#" tabIndex="-1"
//                                    aria-disabled="true">Disabled</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#"><i className="fas fa-plus"/></a>
//                             </li>
//                         </ul>
//                         Content Leave Blank!
//                     </div>
//
//                 </div>
//                 <div>
//                     <a href="../index.js">
//                         Home Page
//                     </a>
//                 </div>
//
//             </div>
//
//         </div>
//     )
// }
// <div>
//     <h2>
//         <i onClick={() => props.history.goBack()}
//            className="fas fa-times fa-lg fa-arrow-left"></i>
//         Course Editor
//     </h2>
// </div>
// export default CourseEditor