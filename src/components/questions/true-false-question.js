import React, {useState} from "react";

const TrueFalseQuestion = ({index, question, isCorrect, userAttempts, setUserAttempts}) => {

    const [userAnswer, setUserAnswer] = useState('')

    const updateUserAnswer = (answer) => {
        setUserAnswer(answer)
        userAttempts[index] = answer;
        setUserAttempts(userAttempts);
    }

    return (
        <div>
            <h3>{question.question}
                {isCorrect && <i className="fas fa-check"/>}
                {isCorrect === false && <i className="fas fa-times"/>}</h3>
            <ul className='list-group no-bullets'>
                <li>
                    <label
                        className={`list-group-item 
                            ${isCorrect !== null && question.correct === 'true' && 'list-group-item-success'}
                            ${isCorrect !== null && userAnswer === 'true' && userAnswer !== question.correct && 
                            'list-group-item-danger'}`}>
                        <input type='radio'
                               name={question._id}
                               onClick={() => updateUserAnswer('true')}/>
                        TRUE
                        {isCorrect !== null && question.correct === 'true' &&
                        <i className="fas fa-check float-right"/>}
                        {isCorrect !== null && userAnswer !== question.correct && userAnswer === 'true' &&
                        <i className="fas fa-times float-right"/>}
                    </label>
                </li>
                <li>
                    <label
                        className={`list-group-item 
                            ${isCorrect !== null && question.correct === 'false' && 'list-group-item-success'}
                            ${isCorrect !== null && userAnswer === 'false' && userAnswer !== question.correct && 
                            'list-group-item-danger'}`}>
                        <input type='radio'
                               name={question._id}
                               onClick={() => updateUserAnswer('false')}/>
                        FALSE
                        {isCorrect !== null && question.correct === 'false' &&
                        <i className="fas fa-check float-right"/>}
                        {isCorrect !== null && userAnswer !== question.correct && userAnswer === 'false' &&
                        <i className="fas fa-times float-right"/>}
                    </label>
                </li>
            </ul>
            <h6>Your Answer: {userAnswer}</h6>
        </div>
    )
}


export default TrueFalseQuestion
