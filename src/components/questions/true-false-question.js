import React from "react";

const TrueFalseQuestion = (
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
    for(let i of ['true', 'false']){
        if(i === question.correct){
            choiceColorDic[i] = correctClass;
        }else if(i === question.answer){
            choiceColorDic[i] = wrongClass;
        }else{
            choiceColorDic[i] = '';
        }
    }

    return (
        <div>
            <h4>
                {question.question}
                {
                    question.answer === question.correct && mark &&
                    <i className="fas fa-check"></i>
                }
                {
                    question.answer !== question.correct && mark &&
                    <i className="fas fa-times"></i>
                }
            </h4>

            <ul className="list-group w-25">
                <li className={`list-group-item ${choiceColorDic['true']}`}>
                    <label><input
                        type="radio"
                        onClick={() => {
                            {question.answer = 'true'}
                            setMark(false)
                            setCorrectClass('')
                            setWrongClass('')
                        }}
                        name={question._id}/>True</label>
                </li>

                <li className={`list-group-item ${choiceColorDic['false']}`}>
                    <label><input
                        type="radio"
                        onClick={() => {
                            {question.answer = 'false'}
                            setMark(false)
                            setCorrectClass('')
                            setWrongClass('')
                        }}
                        name={question._id}/>False</label>
                </li>
            </ul>

            <p>
                Your answer: {question.answer}
            </p>
        </div>
    )
}

export default TrueFalseQuestion;