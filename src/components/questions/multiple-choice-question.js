import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [userAnswer, setUserAnswer] = useState('')
    const [isCorrect, setIsCorrect] = useState(null)

    return (
        <div className = 'container-fluid'>
            <h3>{question.question}
                {
                    isCorrect && <i className="fas fa-check checkIconColor"/>
                }
                {
                    isCorrect === false && <i className="fas fa-times crossIconColor"/>
                }
            </h3>
            <ul className = 'list-group no-bullets'>
                {
                    question.choices.map((choice, index) =>
                        <ul key = {index}>
                            <label
                                className = {`list-group-item 
                                    ${isCorrect !== null 
                                        && question.correct === choice 
                                        && 'list-group-item-success'}
                                    ${isCorrect !== null 
                                        && userAnswer === choice 
                                        && userAnswer !== question.correct 
                                        && 'list-group-item-danger'}`} >
                                <input type='radio' onClick={() => setUserAnswer(choice)} name={question._id}/>
                                {choice}
                                {isCorrect !== null
                                    && question.correct === choice
                                    && <i className="fas fa-check checkIconColor float-right"/>}
                                {isCorrect !== null
                                    && userAnswer !== question.correct
                                    && userAnswer === choice
                                    && <i className="fas fa-times crossIconColor float-right"/>}
                            </label>
                        </ul>
                    )
                }
            </ul>
            <h6>Your Answer: {userAnswer}</h6>
            <button onClick = {() => {
                if (userAnswer === question.correct) {
                    setIsCorrect(true)
                } else {
                    setIsCorrect(false)
                }
            }}
                    className = 'btn btn-success'>
                Grade
            </button>
        </div>
    )
}

export default MultipleChoiceQuestion