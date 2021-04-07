import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import quizService from '../../services/quiz-service';

const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        quizService.findAllQuizzes()
            .then(resQuizzes => setQuizzes(resQuizzes))
    }, [])

    // useEffect(() => {
    //     //TODO: implement this in a separate service file
    //     fetch("http://localhost:3000/api/quizzes")
    //         .then(response => response.json())
    //         .then((quizzes) => {
    //             setQuizzes(quizzes)
    //         })
    // }, [])


    return (
        <div className = 'container-fluid'>
            <h3 className = 'form-group editIconColor'>
                Quizzes
            </h3>
            <ul className = 'list-group'>
                {
                    quizzes.map((quiz, index) =>
                        <li className = 'list-group-item editIconColor' key = {index}>
                            {quiz.title}
                            <Link to ={`/courses/${courseId}/quizzes/${quiz._id}`}
                                  className = 'btn btn-primary float-right'>
                                Start
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default QuizzesList