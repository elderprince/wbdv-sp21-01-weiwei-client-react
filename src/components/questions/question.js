import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = (
    {
        question,
        mark,
        setMark,
        correctClass,
        setCorrectClass,
        wrongClass,
        setWrongClass
    }) => {

    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    mark={mark}
                    setMark={setMark}
                    correctClass={correctClass}
                    setCorrectClass={setCorrectClass}
                    wrongClass={wrongClass}
                    setWrongClass={setWrongClass}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    mark={mark}
                    setMark={setMark}
                    correctClass={correctClass}
                    setCorrectClass={setCorrectClass}
                    wrongClass={wrongClass}
                    setWrongClass={setWrongClass}/>
            }
        </div>
    )
}

export default Question;