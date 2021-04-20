const QUIZZES_URL = 'https://webdev-serenayutang-node.herokuapp.com/api/quizzes';

const findAllQuizzes = () => {
    // console.log("findAllQuizzes called!")
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}

const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

export default {
    findAllQuizzes,
    findQuizById
}
