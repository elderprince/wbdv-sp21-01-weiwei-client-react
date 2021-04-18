const WIDGET_URL = process.env.REACT_APP_WIDGET_URL

const findAllQuizzes = () => {
    return fetch(`${WIDGET_URL}/quizzes`)
        .then(response => response.json())
}

const findQuizById = (qid) => {
    return fetch(`${WIDGET_URL}/quizzes/${qid}`)
        .then(response => response.json() )
}

const api = {
    findAllQuizzes, findQuizById
}

export default api;