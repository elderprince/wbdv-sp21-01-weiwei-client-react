const QUIZ_URL = process.env.REACT_APP_QUIZ_URL

const findAllQuizzes = () => {
    return fetch(`${QUIZ_URL}/quizzes`)
        .then(response => response.json())
}

const findQuizById = (qid) => {
    return fetch(`${QUIZ_URL}/quizzes/${qid}`)
        .then(response => response.json() )
}

const api = {
    findAllQuizzes, findQuizById
}

export default api;