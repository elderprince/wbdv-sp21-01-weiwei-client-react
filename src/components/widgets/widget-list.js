import ParagraphWidget from "./paragraph-widget";
import HeadingWidget from "./heading-widget";
import {useState} from "react";
import widgetService from '../services/widget-service'

const WidgetList = () => {
    const [widgets, setWidgets] = useState([])
    const [widget, setWidget] = useState({})

    return(
        <div>
            <i onClick={createWidget} className="fas fa-plus float-right fa-2x"></i>
            <h1>Widget List {widget.id}</h1>
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget.id} className="list-group-item">
                            {
                                _widget.id === widget.id &&
                                <>
                                    <i onClick={() => widgetService.deleteWidget(_widget.id)} className="fas fa-trash float-right"></i>
                                    <i onClick={() => {
                                        widgetService.updateWidget(_widget.id, widget)}}
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

export default WidgetList