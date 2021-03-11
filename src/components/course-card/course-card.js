import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./course-card.css"


const CourseCard = (
    {
        deleteCourse, updateCourse, course, title
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const saveTitle = () => {
        setEditing(false)
        const newCourse = {...course, title: newTitle}
        updateCourse(newCourse)
    }

    return <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-1 my-3">
    <div className="card">
        <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
             className="card-img-top"
             alt="..."/>
        <div className="card-body">
            {
                !editing &&
                <h5 className="card-title">
                    <Link to={`/courses/grid/edit/${course._id}`}>
                        {course.title}
                    </Link>
                </h5>
            }
            {
                editing &&
                <input
                    onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
            }

            <p className="card-text">Description</p>
            {
                !editing &&
                <Link to={`/courses/grid/edit/${course._id}`}>
                    <a className="btn mx-1 btn-primary">{newTitle}</a>
                </Link>
            }
            {
                editing &&
                <button className="btn mx-1 btn-primary" disabled>{newTitle}
                </button>
            }
            <i onClick={() => deleteCourse(course)} className="fas fa-trash fa-2x text-dan  ger float-right pr-1"/>
            {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x pr-1"/>}
            {editing && <i onClick={() => saveTitle()} className="fas fa-check-circle fa-2x text-success"/>}
        </div>
    </div>
</div>
}
export default CourseCard