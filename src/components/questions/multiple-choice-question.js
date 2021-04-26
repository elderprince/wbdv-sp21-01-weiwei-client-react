import React from "react";

const MultipleChoiceQuestion = (
    {
        question,
        mark,
        setMark,
        correctClass,
        setCorrectClass,
        wrongClass,
        setWrongClass
    }) => {

    let choiceColorDic = {}
    for(let i of question.choices){
        if(i === question.correct){
            choiceColorDic[i] = correctClass;
        }else if(i === question.answer){
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
                    question.correct === question.answer && mark &&
                    <i className="fas fa-check"></i>
                }
                {
                    question.correct !== question.answer && mark &&
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
                                        {question.answer = choice}
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

            <p>Your answer: {question.answer}</p>
        </div>
    )
}

export default MultipleChoiceQuestion