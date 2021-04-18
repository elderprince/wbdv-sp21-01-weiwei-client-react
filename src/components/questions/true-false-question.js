import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [trueClass, setTrueClass] = useState('')
    const [falseClass, setFalseClass] = useState('')
    const [mark, setMark] = useState(false)

    const answerString = JSON.stringify(answer)

    const grade = () => {
        if (answerString == question.correct) {
            if (question.correct == 'true') {
                setTrueClass('list-group-item-success')
                setFalseClass('')
            } else {
                setFalseClass('list-group-item-success')
                setTrueClass('')
            }
        } else {
            if (question.correct == 'true') {
                setTrueClass('list-group-item-success')
                setFalseClass('list-group-item-danger')
            } else {
                setFalseClass('list-group-item-success')
                setTrueClass('list-group-item-danger')
            }
        }
    }

    return (
        <div>
            <h4>
                {question.question}
                {
                    answerString == question.correct && mark &&
                    <i className="fas fa-check"></i>
                }
                {
                    answerString != question.correct && mark &&
                    <i className="fas fa-times"></i>
                }
            </h4>

            <ul className="list-group w-25">
                <li className={`list-group-item ${trueClass}`}>
                    <label><input
                        type="radio"
                        onClick={() => {
                            setAnswer(true)
                            setMark(false)
                            setTrueClass('')
                            setFalseClass('')
                        }}
                        name={question._id}/>True</label>
                </li>
                <li className={`list-group-item ${falseClass}`}>
                    <label><input
                        type="radio"
                        onClick={() => {
                            setAnswer(false)
                            setMark(false)
                            setTrueClass('')
                            setFalseClass('')
                        }}
                        name={question._id}/>False</label>
                </li>
            </ul>

            <p>
                Your answer: {answerString}
            </p>

            <button type="button" className="btn btn-success"
                    onClick={() => {
                        setMark(true)
                        grade()
                    }}>
                Grade
            </button>
        </div>
    )
}

export default TrueFalseQuestion;