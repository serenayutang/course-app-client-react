import React from "react";
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import courseService from "../../services/course-service";
import "./course-manager.css"
import CourseEditor from "../course-editor/course-editor";


export default class CourseManager
    extends React.Component {
    state = {
        courses: []
    }

    componentDidMount = () =>
        courseService.findAllCourses().then(courses => this.setState({courses}))

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if (c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModified: "2/10/2021"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState((prevState) => ({...prevState,
                courses: [...prevState.courses, course]})))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter(course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return (
            <div>
                <nav className="wbdv-sticky-top wbdv-padding-15px ">
                    <div className="row">
                        <div className="col-1">
                            <i className="fa fa-align-justify fa-2x"/>
                        </div>
                        <div className="col-3 d-none d-lg-inline">
                            <h4>Course Manager</h4>
                        </div>
                        <div className="col-6 ">
                            <input className="form-control" placeholder="New Course Title"/>

                        </div>
                        <div className="col-2 input-group-append">
                            <i className="fas fa-plus-circle fa-2x" onClick={this.addCourse}/>
                            <Link to="/">
                                <i className="fas fa-2x fa-home float-right"/>
                            </Link>
                        </div>
                    </div>
                </nav>
                <Route path="/courses/table" exact={true}>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid" exact={true}>
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"]}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>


                <button className="wbdv-bottom-right-button mx-2 btn btn-lg btn-primary rounded-circle" type="button"
                        onClick={this.addCourse}>
                    <i className="fas fa-plus"/>
                </button>
            </div>
        )

    }

}