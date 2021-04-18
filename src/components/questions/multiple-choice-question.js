import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState('')
    const [correctClass, setCorrectClass] = useState('')
    const [wrongClass, setWrongClass] = useState('')
    const [mark, setMark] = useState(false)

    const grade = () => {
        setCorrectClass('list-group-item-success')
        setWrongClass('list-group-item-danger')

    }

    const forClick = () => {
        setMark(true)
        grade()
    }

    let choiceColorDic = {}
    for(let i of question.choices){
        if(i == question.correct){
            choiceColorDic[i] = correctClass;
        }else if(i == yourAnswer){
            choiceColorDic[i] = wrongClass;
        }else{
            choiceColorDic[i] = '';
        }
    }

    return(
        <div>
            <h5>
                {question.question}
                {
                    question.correct === yourAnswer && mark &&
                    <i className="fas fa-check"></i>
                }
                {
                    question.correct !== yourAnswer && mark &&
                    <i className="fas fa-times"></i>
                }
            </h5>

            <ul className="list-group w-25">
                {
                    question.choices.map((choice) => {

                        return(
                            <li className={`list-group-item 
                            ${choiceColorDic[choice]}`}>
                                <label><input
                                    onClick={() => {
                                        setYourAnswer(choice)
                                        setMark(false)
                                        setCorrectClass('')
                                        setWrongClass('')
                                    }}
                                    type="radio"
                                    name={question._id}/> {choice}</label>
                            </li>)}
                    )
                }
            </ul>

            <p>Your answer: {yourAnswer}</p>
            <button type="button" className="btn btn-success"
                    onClick={forClick}>
                Grade
            </button>
        </div>
    )
}

export default MultipleChoiceQuestion