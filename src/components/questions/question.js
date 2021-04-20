import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({index, question, isCorrect, userAttempts, setUserAttempts}) => {
    return (
        <div>
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    index={index}
                    question={question}
                    isCorrect={isCorrect}
                    userAttempts={userAttempts}
                    setUserAttempts={setUserAttempts}/>
            }
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    index={index}
                    question={question}
                    isCorrect={isCorrect}
                    userAttempts={userAttempts}
                    setUserAttempts={setUserAttempts}/>
            }
        </div>
    )
}
export default Question
