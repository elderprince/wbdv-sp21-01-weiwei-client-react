import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")

    const grade = (yourAnswer) => {
        if (yourAnswer === question.correct) {

        } else {

        }
    }

    return(
        <div>
            <h5>
                {question.question}
                {
                    question.correct === yourAnswer &&
                    <i className="fas fa-check"></i>
                }
                {
                    question.correct !== yourAnswer &&
                    <i className="fas fa-times"></i>
                }
            </h5>

            <ul className="list-group w-50">
                {
                    question.choices.map((choice) =>
                            <li className={`list-group-item 
                            ${choice === question.correct && choice === yourAnswer ? 'list-group-item-success' : ''}`}>
                                <label><input
                                    onClick={() => {
                                        setYourAnswer(choice)
                                    }}
                                    type="radio"
                                    name={question._id}/> {choice}</label>
                            </li>
                    )
                }
            </ul>

            <p>Your answer: {yourAnswer}</p>
            <p>{question.correct}</p>
            <button type="button" className="btn btn-success"
                    onClick={grade}>
                Grade
            </button>
        </div>
    )
}

export default MultipleChoiceQuestion