import React from 'react'

const CourseEditor = ({props}) =>
    <div>
        <h2>
            <i onClick={() => props.history.goBack()}
               className="fas fa-times fa-lg fa-arrow-left"></i>
            Course Editor
        </h2>
    </div>

export default CourseEditor