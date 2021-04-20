const QUIZZES_URL = 'https://webdev-serenayutang-node.herokuapp.com/api/quizzes';

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}

export default {
    findQuestionsForQuiz,
}
