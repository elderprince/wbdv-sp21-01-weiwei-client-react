const QUIZZES_URL = 'http://localhost:8080/api/quizzes';

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions` )
        .then(response => response. json() )
}

const api = {
    findQuestionsForQuiz
}

export default api;