import React from 'react'
import CourseRow from "../course-row/course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th className="d-none d-sm-table-cell">
                            Owned By
                        </th>
                        <th className="d-none d-sm-table-cell">
                            Last Modified
                        </th>
                        <th className="text-right">
                            <i className="fas fa-folder fa-lg pr-4"/>
                            <i className="fas fa-sort-alpha-down-alt fa-lg pr-4"/>
                            <Link to="/courses/grid">
                                <i className="fas fa-th fa-lg"></i>
                            </Link>
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key={ndx}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}