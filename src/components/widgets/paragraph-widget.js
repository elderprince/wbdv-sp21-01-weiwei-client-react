import React, {useState} from 'react'
import HeadingWidget from "./heading-widget";
import ImageWidget from "./image-widget";
import ListWidget from "./list-widget";

const ParagraphWidget = (
    {
        widget,
        deleteWidget,
        updateWidget,
        editing,
        setEditing}) => {

    const [CachedWidget, setCachedWidget] = useState(widget)

    return (
        <div>
            {
                !editing &&

                <p>
                    {widget.text}
                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog float-right">
                    </i>
                </p>
            }

            {
                editing && CachedWidget.type === "PARAGRAPH" &&

                <div>
                    <>
                        <select onChange={(e) => setCachedWidget({...CachedWidget,
                                    type: e.target.value})}
                                value={CachedWidget.type}
                                className="form-control">
                            <option value={"HEADING"}>HEADING</option>
                            <option value={"PARAGRAPH"}>PARAGRAPH</option>
                            <option value={"LIST"}>LIST</option>
                            <option value={"IMAGE"}>IMAGE</option>
                        </select>
                    </>

                    <br/>

                    <>
                        <textarea
                            onChange={(e) => setCachedWidget({...CachedWidget,
                                text: e.target.value})}
                            value={CachedWidget.text}
                            className="form-control">
                        </textarea>

                        <i onClick={() => {
                            deleteWidget(widget)
                            setEditing(false)}}
                           className="fas fa-trash float-right">
                        </i>

                        <i onClick={() => {
                            setEditing(false)
                            updateWidget(CachedWidget)}}
                           className="fas fa-check float-right">
                        </i>
                    </>
                </div>
            }

            {
                editing && CachedWidget.type === "HEADING" &&

                <HeadingWidget
                    deleteWidget={deleteWidget}
                    updateWidget={updateWidget}
                    widget={CachedWidget}
                    editing={editing}
                    setEditing={setEditing}/>
            }

            {
                editing && CachedWidget.type === "IMAGE" &&

                <ImageWidget
                    deleteWidget={deleteWidget}
                    updateWidget={updateWidget}
                    widget={CachedWidget}
                    editing={editing}
                    setEditing={setEditing}/>
            }

            {
                editing && CachedWidget.type === "LIST" &&

                <ListWidget
                    deleteWidget={deleteWidget}
                    updateWidget={updateWidget}
                    widget={CachedWidget}
                    editing={editing}
                    setEditing={setEditing}/>
            }
        </div>
    )
}

export default ParagraphWidget