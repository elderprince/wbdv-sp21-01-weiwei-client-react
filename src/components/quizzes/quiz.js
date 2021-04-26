import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import Question from "../questions/question";
import questionService from "../../services/question-service";

const Quiz = () => {
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [attempt, setAttempt] = useState({score: null})
    const [mark, setMark] = useState(false);
    const [correctClass, setCorrectClass] = useState('')
    const [wrongClass, setWrongClass] = useState('')

    const submit = () => {
        setMark(true)
        setCorrectClass('list-group-item-success')
        setWrongClass('list-group-item-danger')
    }

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions))
    },[])

    // useEffect(() => {
    //     questionService.submitQuiz(quizId, questions)
    //         .then(attempt => setAttempt(attempt))
    // },[])

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                        <li>
                            <Question
                                question={question}
                                mark={mark}
                                setMark={setMark}
                                correctClass={correctClass}
                                setCorrectClass={setCorrectClass}
                                wrongClass={wrongClass}
                                setWrongClass={setWrongClass}/>
                        </li>
                    )
                }
            </ul>

            <button type="button" className="btn btn-success"
                    onClick={submit}>
                Submit
            </button>

            <br/>

            <p>Your score: {attempt.score}</p>
        </div>
    );
}

export default Quiz