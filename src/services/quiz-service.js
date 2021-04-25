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
    fetch(`{QUIZ_URL}/quizzes/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(result => console.log(result))
}

const api = {
    findAllQuizzes,
    findQuizById,
    submitQuiz
}

export default api;