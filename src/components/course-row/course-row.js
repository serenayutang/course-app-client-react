import React, {useState} from 'react'
import {Link} from "react-router-dom";


const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        courseId,
        lastModified,
        title,
        owner,
        quiz
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const saveTitle = () => {
        setEditing(false)
        const newCourse = {...course, title: newTitle}
        updateCourse(newCourse)
    }
    return (
        <tr>
            <td>
                {
                    !editing && <Link to={`/courses/table/edit/${course._id}`}>{title}</Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td className="d-none d-md-table-cell">{owner}</td>
            <td className="d-none d-sm-table-cell">{lastModified}</td>
            <td className="d-none d-sm-table-cell">
                <Link to={`/courses/${course._id}/quizzes`}>
                    <button type="button" className="btn btn-warning">Quiz</button>
                </Link>
            </td>
            <td className="px-3 text-right">
                <i onClick={() => deleteCourse(course)} className="fas fa-trash fa-2x text-danger float-right pr-1"/>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x pr-1"/>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-check-circle fa-2x text-success"/>}
            </td>
        </tr>
    )
}
export default CourseRow