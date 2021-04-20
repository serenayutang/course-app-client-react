import React, {useState} from "react";

const MultipleChoiceQuestion = ({index, question, isCorrect, userAttempts, setUserAttempts}) => {
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
            <ul className='list-group'>
                {
                    question.choices.map((choice, index) =>
                        <li key={index}>
                            <label
                                className={`list-group-item 
                                    ${isCorrect !== null && question.correct === choice && 'list-group-item-success'}
                                    ${isCorrect !== null && userAnswer === choice && userAnswer !== question.correct && 
                                    'list-group-item-danger'}`}>
                                <input type='radio'
                                       name={question._id}
                                       onClick={() => updateUserAnswer(choice)}/>
                                {choice}
                                {isCorrect !== null && question.correct === choice &&
                                <i className="fas fa-check float-right"/>}
                                {isCorrect !== null && userAnswer !== question.correct && userAnswer === choice &&
                                <i className="fas fa-times float-right"/>}
                            </label>
                        </li>)
                }
            </ul>
            <h6>Your Answer: {userAnswer}</h6>
        </div>
    )
}

export default MultipleChoiceQuestion
