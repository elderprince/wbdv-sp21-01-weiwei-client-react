const QUIZ_URL = process.env.REACT_APP_QUIZ_URL

const findAllQuizzes = () => {
    return fetch(`${QUIZ_URL}/quizzes`)
        .then(response => response.json())
}

const findQuizById = (qid) => {
    return fetch(`${QUIZ_URL}/quizzes/${qid}`)
        .then(response => response.json() )
}

const submitQuiz = (quizId, questions) => {
    return fetch(`${QUIZ_URL}/quizzes/${quizId}/attempt`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const findAttempts = (quizId) => {
    return fetch(`${QUIZ_URL}/quizzes/${quizId}/attempts`)
        .then(response => response.json)
}

const api = {
    findAllQuizzes,
    findQuizById,
    submitQuiz,
    findAttempts
}

export default api;