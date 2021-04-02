import {useEffect, useState} from "react";
import widgetService from "../../services/widget-service"
import ParagraphWidget from "./paragraph-widget";
import HeadingWidget from "./heading-widget";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import ImageWidget from "./image-widget";
import ListWidget from "./list-widget";

const WidgetList = (
    {
        widgets=[],
        createWidget,
        updateWidget,
        deleteWidget,
        findWidgetsForTopic
    }) => {

    const {topicId} = useParams();

    const [editing, setEditing] = useState(false)

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
        }, [topicId])

    return(
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>
            <h1>Widget List</h1>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item">
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                    widget={widget}
                                    editing={editing}
                                    setEditing={setEditing}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                    widget={widget}
                                    editing={editing}
                                    setEditing={setEditing}/>
                            }
                            {
                                widget.type === "IMAGE" &&
                                <ImageWidget
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                    widget={widget}
                                    editing={editing}
                                    setEditing={setEditing}/>
                            }
                            {
                                widget.type === "LIST" &&
                                <ListWidget
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                    widget={widget}
                                    editing={editing}
                                    setEditing={setEditing}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    createWidget: (topicId) => {
        widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget"})
            .then(widget => dispatch({type: "CREATE_WIDGET", widget: widget}))
    },

    updateWidget: (newItem) => {
        widgetService.updateWidget(newItem.id, newItem)
            .then(status => dispatch({type: "UPDATE_WIDGET", widgetToUpdate: newItem}))
    },

    deleteWidget: (widgetToDelete) => {
        widgetService.deleteWidget(widgetToDelete.id)
            .then(status => dispatch({type: "DELETE_WIDGET", widgetToDelete: widgetToDelete}))
    },

    findWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: widgets
            }))
    }
})

export default connect(stpm, dtpm)(WidgetList)