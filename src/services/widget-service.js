const WIDGET_URL = process.env.REACT_APP_WIDGET_URL

const findWidgetsForTopic = (topicId) =>
    fetch(`${WIDGET_URL}/topics/${topicId}/widgets`)
            .then(response => response.json());

const createWidget = (topicId, widget) =>
    fetch(`${WIDGET_URL}/api/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json());

const deleteWidget = (id) =>
    fetch(`${WIDGET_URL}/widgets/${id}`, {
        method: "DELETE"
    })
        .then(response => response.json());

const updateWidget = (id, widget) =>
    fetch(`${WIDGET_URL}/widgets/${id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json());

const api = {
    findWidgetsForTopic, createWidget, deleteWidget, updateWidget
}

export default api;