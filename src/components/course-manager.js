import React from "react";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

export default class CourseManager
    extends React.Component {
    state = {
        courses: [
            // {title: "CS5610", owner: "me", lastModified: "1/1/2021"},
            // {title: "CS5002", owner: "you", lastModified: "1/1/2021"},
            // {title: "CS5008", owner: "him", lastModified: "1/1/2021"}
        ]
    }

    componentDidMount() {
        courseService.findAllCourses().then(courses => this.setState({courses}))
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModified: "2/10/2021"
        }
        courseService.createCourse(newCourse).then(actualCourse => {
            this.state.courses.push(newCourse)
            this.setState(this.state)
        })
    }

    deleteCourse = (course) => {
        alert("delete course " + course._id)
        courseService.deleteCourse(course._id).then(status => {
            this.setState((prevState) => ({
                course: prevState.courses.filter(c => c._id !== course._id)
            }))
        })
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
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
        return(
            <div>
                <Link to="/">
                    <i className="fas fa-2x fa-home float-right"></i>
                </Link>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>
                    Add Course
                </button>

                {/*<Route path="/courses/table" component={CourseTable}/>*/}
                <Route path="/courses/table" exact={true} >
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
                <Route path="/courses/grid" exact={true} >
                    <CourseGrid courses={this.state.courses}/>
                </Route>
                {/*<CourseTable courses={this.state.courses}/>*/}
                {/*<CourseGrid courses={this.state.courses}/>*/}
            </div>
        )
    }
}