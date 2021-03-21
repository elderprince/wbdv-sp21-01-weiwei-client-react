const findWidgetsForTopic = (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json());

const createWidget = (topicId, widget) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json());

const deleteWidget = (id) =>
    fetch(`http://localhost:8080/api/widgets/${id}`, {
        method: "DELETE"
    })
        .then(response => response.json());

const updateWidget = (id, widget) =>
    fetch(`http://localhost:8080/api/widgets/${id}`, {
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