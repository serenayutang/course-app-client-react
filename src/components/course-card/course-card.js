import React from 'react'
import {Link} from "react-router-dom";
import {useState} from 'react'
import "./course-card.css"


const CourseCard = (props) => {
    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(props.course.title);

    //     <div className="col-4">
//         <div className="card">
//             <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
//                  className="card-img-top"
//                  alt="..."/>
//
//             <div className="card-body">
//                 <h5 className="card-title">{course.title}</h5>
//                 <p className="card-text">Some description.</p>
//                 <img src={``}/>
//                 <Link to="/courses/editor" className="btn btn-primary">
//                     {course.title}
//                 </Link>
//                 <i className="fas fa-trash float-right"></i>
//             </div>
//         </div>
//     </div>

    return ( <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-1 my-3">
        <div className="card">
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                 className="card-img-top"
                 alt="..."/>
            <div className="card-body">
                {
                    !editing &&
                    <Link to="/editor">
                        <h4 className="card-title">{newTitle}</h4>
                    </Link>
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
                    <Link to="/editor">
                        <a className="btn mx-1 btn-primary">{newTitle}</a>
                    </Link>
                }

                {
                    editing &&
                    <button className="btn mx-1 btn-primary" disabled>{newTitle}
                    </button>
                }

                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit pr-1"></i>}
                {
                    editing &&
                    <button className="btn" onClick={() => {
                        const newCourse = {
                            ...props.course,
                            title: newTitle
                        }
                        props.updateCourse(newCourse);
                        setEditing(false);
                    }} >
                        <i class="fas fa-check" style={{color: 'green'}}></i></button>
                }
                {
                    editing &&
                    <button className="btn" onClick={() => {
                        props.deleteCourse(props.course._id);
                        setEditing(false);
                    }}>
                        <i className="fas fa-times"  style={{color: 'red'}}></i></button>
                }
            </div>
        </div>
    </div>)
}
export default CourseCard