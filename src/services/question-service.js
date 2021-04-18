const QUIZ_URL = process.env.REACT_APP_QUIZ_URL

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZ_URL}/quizzes/${qid}/questions` )
        .then(response => response.json() )
}

const api = {
    findQuestionsForQuiz
}

export default api;