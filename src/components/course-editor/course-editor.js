import React from 'react'
import "./course-editor.css";
import {useHistory, Link} from "react-router-dom";

const CourseEditor = (props) => {
    let history = useHistory();
    return (
        <div className="container course-editor-background">
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h5>
                            <i onClick={() => history.goBack()}
                               className="far fa-times-circle">
                            </i>
                            CS5610 WebDev
                        </h5>
                    </div>

                    <div className="col-9">
                        <ul className="nav nav-tabs">

                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Build</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Theme</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Apps</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Setting</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1"
                                   aria-disabled="true">Disabled</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-plus"/></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <ul className="list-group">
                            <li className="list-group-item">Module 1 - JQuery
                                <i className="far fa-times-circle float-right"/>
                            </li>
                            <li className="list-group-item active">Module 2 - React
                                <i className="far fa-times-circle float-right"/>
                            </li>
                            <li className="list-group-item">Module 3 - Redux
                                <i className="far fa-times-circle float-right"/>
                            </li>
                            <li className="list-group-item">Module 4 - Native
                                <i className="far fa-times-circle float-right"/>
                            </li>
                            <li className="list-group-item">Module 5 - Angular
                                <i className="far fa-times-circle float-right"/>
                            </li>
                            <li className="list-group-item">Module 6 - Node
                                <i className="far fa-times-circle float-right"/>
                            </li>
                            <li className="list-group-item">Module 7 - Mongo
                                <i className="far fa-times-circle float-right"/>
                            </li>
                            <li className="list-group-item"><i className="fas fa-plus-circle float-right"/></li>
                        </ul>
                    </div>

                    <div className="col-9">
                        <br/>

                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Topic 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Topic 3</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Topic 4</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1"
                                   aria-disabled="true">Disabled</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-plus"/></a>
                            </li>
                        </ul>
                        Content Leave Blank!
                    </div>

                </div>
                <div>
                    <a href="../index.html">
                        Home Page
                    </a>
                </div>

            </div>

        </div>
    )
}
// <div>
//     <h2>
//         <i onClick={() => props.history.goBack()}
//            className="fas fa-times fa-lg fa-arrow-left"></i>
//         Course Editor
//     </h2>
// </div>


export default CourseEditor