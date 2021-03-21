import {useEffect, useState} from "react";
import widgetService from "../../services/widget-service"
import ParagraphWidget from "./paragraph-widget";
import HeadingWidget from "./heading-widget";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";

const WidgetList = (
    {
        widgets=[],
        createWidget,
        updateWidget,
        deleteWidget,
        findWidgetsForTopic
    }) => {

    const {topicId} = useParams();

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
        }, [topicId])

    const [widget, setWidget] = useState({})

    return(
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>
            <h1>Widget List</h1>
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget.id} className="list-group-item">
                            {
                                _widget.id === widget.id &&
                                <>
                                    <i onClick={() => deleteWidget(_widget)} className="fas fa-trash float-right"></i>
                                    <i onClick={() => {
                                        updateWidget(widget)}}
                                       className="fas fa-check float-right"></i>
                                </>
                            }
                            {
                                _widget.id !== widget.id &&
                                <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right"></i>
                            }
                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={_widget}/>
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