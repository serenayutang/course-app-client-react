import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
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
                <ul>
                    <label
                        className = {`list-group-item 
                            ${isCorrect !== null 
                                && question.correct === 'true' 
                                && 'list-group-item-success'}
                            ${isCorrect !== null 
                                && userAnswer === 'true' 
                                && userAnswer !== question.correct 
                                && 'list-group-item-danger'}`} >
                        <input type='radio' onClick={() => setUserAnswer('true')} name={question._id}/>
                        TRUE
                        {isCorrect !== null
                            && question.correct === 'true'
                            && <i className="fas fa-check checkIconColor float-right"/>}
                        {isCorrect !== null
                            && userAnswer !== question.correct
                            && userAnswer === 'true'
                            && <i className="fas fa-times crossIconColor float-right"/>}
                    </label>
                </ul>
                <ul>
                    <label
                        className = {`list-group-item 
                            ${isCorrect !== null 
                                && question.correct === 'false' 
                                && 'list-group-item-success'}
                            ${isCorrect !== null 
                                && userAnswer === 'false' 
                                && userAnswer !== question.correct 
                                && 'list-group-item-danger'}`} >
                        <input type='radio' onClick={() => setUserAnswer('false')} name={question._id}/>
                        FALSE
                        {isCorrect !== null
                            && question.correct === 'false'
                            && <i className="fas fa-check checkIconColor float-right"/>}
                        {isCorrect !== null
                            && userAnswer !== question.correct
                            && userAnswer === 'false'
                            && <i className="fas fa-times crossIconColor float-right"/>}
                    </label>
                </ul>
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

export default TrueFalseQuestion