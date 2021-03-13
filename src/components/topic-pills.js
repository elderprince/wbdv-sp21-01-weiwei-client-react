import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from '../services/topic-service'

const TopicPills = (
    {
        topics=[],
        createTopic,
        updateTopic,
        deleteTopic,
        findTopicsForLesson
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();

    useEffect(() => {
        findTopicsForLesson(lessonId)
    }, [lessonId, topicId])

    return(<div>
        <ul className="nav nav-pills nav-justified">
            {
                topics.map(topic =>
                    <li className="nav-item active">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}`}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}
                            item={topic}/>
                    </li>
                )
            }

            <li className="list-group-item">
                <i onClick={() => createTopic(lessonId)}
                   className="fas fa-plus">
                </i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    createTopic: (lessonId) => {
        topicService.createTopic(lessonId, {title: 'New Topic'})
            .then(topic => dispatch({type: "CREATE_TOPIC", topic: topic}))
    },

    updateTopic: (newItem) => {
        topicService.updateTopic(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_TOPIC", topicToUpdate: newItem}))
    },

    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
            .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
    },

    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics: topics
            }))
    }
})

export default connect(stpm, dtpm)(TopicPills)