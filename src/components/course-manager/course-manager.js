import React from "react";
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import CourseEditor from "../course-editor/course-editor";
import courseService from "../../services/course-service";
import "./course-manager.css"


export default class CourseManager
    extends React.Component {
    state = {
        courses: []
    }
    componentDidMount = () =>
        courseService.findAllCourses().then(courses => this.setState({courses}))

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
            .then(() => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter(course => course !== courseToDelete)
                }))
            })
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(() => {
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

    render() {
        return (
            <div>
                <nav className="wbdv-sticky-top wbdv-padding-15px">
                    <div className="row">
                        <div className="col-1">
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                        <div className="col-3">
                            <h4>Course Manager</h4>
                        </div>
                        <div className="col-6">
                            <input className="form-control" placeholder="New Course Title"/>

                        </div>
                        <div className="col-2">
                            <i className="fas fa-plus-circle fa-2x" onClick={this.addCourse}></i>
                            <Link to="/">
                                <i className="fas fa-2x fa-home float-right"></i>
                            </Link>
                        </div>
                    </div>
                </nav>
                {/*<button onClick={this.addCourse}>*/}
                {/*    Add Course*/}
                {/*</button>*/}

                <Route path="/courses/table" exact={true}>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/editor"
                       render={(props) => <CourseEditor props={props}/>}>
                </Route>
                <div className="">
                    <i className="fas fa-plus-circle fa-4x float-right"
                       onClick={this.addCourse}/>
                </div>
            </div>
        )
    }
}