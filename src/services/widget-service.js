// const TOPICS_URL = "https://webdev-serenaytang.herokuapp.com/api/topics";
const TOPICS_URL = "http://localhost:8080/api/topics";
// const WIDGETS_URL = "https://webdev-serenaytang.herokuapp.com/api/widgets";
const WIDGETS_URL = "http://localhost:8080/api/widgets";


export const createWidgetForTopic = (topicId, widget) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`)
        .then(response => response.json())

const findAllWidgets = () =>
    fetch(WIDGETS_URL)
        .then(response => response.json())

export const updateWidget = (widgetId, newWidget) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(newWidget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export default {
    createWidgetForTopic,
    findWidgetsForTopic,
    findAllWidgets,
    updateWidget,
    deleteWidget
}