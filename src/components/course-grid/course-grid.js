import React from 'react'
import CourseCard from "../course-card/course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses}) =>
    <div>
        <div className="row mb-3 sticky-top bg-white py-3 justify-content-end">
            <div className="col-sm-4 h5 d-none d-md-block">
                Recent Documents
            </div>
            <div className="col-sm-4 h5 d-none d-md-block text-center">
                Owned by me
                <i className="fas fa-caret-down fa-lg pl-2"/>
            </div>
            <div className="col-sm-4 h5 text-right">
                <i className="fas fa-folder fa-lg pr-4"/>
                <i className="fas fa-sort-alpha-up fa-lg pr-4"/>
                <Link to="/courses/table">
                    <i className="fas fa-list fa-lg pr-2"/>
                </Link>
            </div>
        </div>
        <div className="row">
            {courses.map(course => <CourseCard course={course}/>)}
        </div>
    </div>

export default CourseGrid