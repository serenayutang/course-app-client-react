import React, {useState} from 'react'
import {Link} from "react-router-dom";


const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
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
                    !editing && <Link to={`/courses/editor/${course._id}`}>{title}</Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td class="d-none d-md-table-cell">{owner}</td>
            <td class="d-none d-sm-table-cell">{lastModified}</td>
            <td className="px-3 text-right">
                <i onClick={() => deleteCourse(course)} className="fas fa-trash fa-2x text-danger float-right pr-1"/>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x pr-1"/>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-check-circle fa-2x text-success"/>}
            </td>
        </tr>
    )
}

export default CourseRow