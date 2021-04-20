import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import Question from "../questions/question";
import questionService from '../../services/question-service';
import attemptService from '../../services/quizAttempt-service';

const Quiz = () => {

    const {courseId, quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [userAttempts, setUserAttempts] = useState([])
    const [isCorrect, setIsCorrect] = useState([])
    const [score, setScore] = useState(' ')

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId).then(questions => {
            setQuestions(questions);
            let isCorrectChoice = [];
            questions.forEach((question, index) => isCorrectChoice[index] = null)
            setIsCorrect(isCorrectChoice)
        })
    }, [])

    const checkResult = (result) => {
        setScore(result.score);
        let isCorrectFromAttempt = [];
        for (let i = 0; i < questions.length; i++) {
            isCorrectFromAttempt[i] = result.answers[i] === questions[i].correct;
        }
        setIsCorrect(isCorrectFromAttempt)
    }

    const submitQuiz = () => {
        let attemptQuiz = {};
        attemptQuiz.attempts = userAttempts;
        attemptQuiz.questions = questions;
        attemptService.createAttemptsByQuizId(quizId, attemptQuiz)
            .then(result => checkResult(result))
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-4'>
                    <h3 className='form-group'>Quiz {quizId}</h3>
                </div>
                <div className='col-8'>
                    <h3 className='float-right'>Score: {score}</h3>
                </div>
            </div>
            <Link to={`/courses/${courseId}/quizzes`}
                  className="btn btn-primary">
                Back
            </Link>
            <Link to={`/courses/${courseId}/quizzes/${quizId}/attempts`}
                  className="btn btn-primary">
                Prior Attempts
            </Link>
            <button className="btn btn-primary"
                    onClick={() => submitQuiz()}>
                Submit
            </button>
            <ul className='list-group'>
                {
                    questions.map((question, index) =>
                        <li className='list-group-item'
                            key={index}>
                            <Question
                                question={question}
                                index={index}
                                isCorrect={isCorrect[index]}
                                userAttempts={userAttempts}
                                setUserAttempts={setUserAttempts}
                            />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Quiz;
