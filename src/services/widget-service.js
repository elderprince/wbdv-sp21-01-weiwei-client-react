import React, {useState, useEffect} from 'react'

const [widgets, setWidgets] = useState([])
const [widget, setWidget] = useState({})

const findWidgetsForTopic = (topicId) =>
    useEffect(() => {
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [topicId])

const createWidgetsByTopic = (topicId, widget) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify({type: "HEADING", size: 2, text: "New Widget"}),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json())
        .then(widget => setWidgets((widgets) => [...widgets, widget]))

const deleteWidget = (id) =>
    fetch(`http://localhost:8080/api/widgets/${id}`, {
        method: "DELETE"
    }).then((status) => {
        setWidgets((widgets) => widgets.filter(w => w.id !== id))
    })

const updateWidget = (id, widget) =>
    fetch(`http://localhost:8080/api/widgets/${id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    }).then((status) => {
        setWidget({})
        setWidgets((widgets) => widgets.map(w => w.id === id ? widget : w))
    })

const api = {
    findWidgetsForTopic, createWidgetsByTopic, deleteWidget, updateWidget
}

export default api;