import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import Question from "../questions/question";
import questionService from '../../services/question-service'

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId).then(questions => setQuestions(questions))
    }, [])

    return (
        <div className = 'container-fluid'>
            <br/>
            <div>
                <Link to={`/courses/table`}>
                    <button type="button" className="btn btn-light">
                        Back to Courses
                    </button>
                </Link>
            </div>
            <br/>
            <h3 className = 'form-group editIconColor'>Quiz {quizId}</h3>
            <ul className = 'list-group'>
                {
                    questions.map((question, index) =>
                        <li className = 'list-group-item' key = {index}>
                            <Question question = {question}/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Quiz