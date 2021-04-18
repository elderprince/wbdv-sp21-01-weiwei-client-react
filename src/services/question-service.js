const WIDGET_URL = process.env.REACT_APP_WIDGET_URL

const findQuestionsForQuiz = (qid) => {
    return fetch(`${WIDGET_URL}/quizzes/${qid}/questions` )
        .then(response => response.json() )
}

const api = {
    findQuestionsForQuiz
}

export default api;