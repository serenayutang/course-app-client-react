const QUIZZES_URL = 'https://webdev-serenayutang-node.herokuapp.com/api/quizzes';

const findAttemptsByQuizId = (quizId) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`)
        .then(res => res.json())
}

const createAttemptsByQuizId = (quizId, attemptQuiz) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
            method: 'POST',
            body: JSON.stringify(attemptQuiz),
            headers: {
                'content-type': 'application/json'
            }
        }
    ).then(response => response.json())
}

export default {
    findAttemptsByQuizId,
    createAttemptsByQuizId,
}
