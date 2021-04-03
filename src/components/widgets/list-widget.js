import React, {useState} from 'react'
import ParagraphWidget from "./paragraph-widget";
import HeadingWidget from "./heading-widget";
import ImageWidget from "./image-widget";

const ListWidget = (
    {
        widget,
        deleteWidget,
        updateWidget}) => {

    const [CachedWidget, setCachedWidget] = useState(widget)
    const [editing, setEditing] = useState(false)
    const [EditingOrdered, setEditingOrdered] = useState(false)

    return (
        <div>
            {
                !editing &&
                <>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }

                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog float-right">
                    </i>
                </>
            }
            {
                editing && CachedWidget.type === "LIST" &&
                <div>
                    <>
                        <select
                            onChange={(e) =>
                                setCachedWidget({...CachedWidget, type: e.target.value})}
                            value={CachedWidget.type}
                            className="form-control">
                            <option value={"HEADING"}>HEADING</option>
                            <option value={"PARAGRAPH"}>PARAGRAPH</option>
                            <option value={"LIST"}>LIST</option>
                            <option value={"IMAGE"}>IMAGE</option>
                        </select>
                    </>

                    <br/>

                    <input
                        type="checkbox"
                        checked={EditingOrdered}
                        onChange={(e) => {
                            setEditingOrdered(!EditingOrdered)
                            setCachedWidget({
                                ...CachedWidget,
                                ordered: e.target.checked})}
                        }/> Ordered

                    <br/>
                    <br/>

                    List Items
                    <textarea
                        rows={10}
                        onChange={(e) =>
                            setCachedWidget({...CachedWidget, text: e.target.value})}
                        value={CachedWidget.text}
                        className="form-control">
                    </textarea>

                    <>
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
                editing && CachedWidget.type === "PARAGRAPH" &&

                <div>
                    <ParagraphWidget
                        deleteWidget={deleteWidget}
                        updateWidget={updateWidget}
                        widget={CachedWidget}/>
                </div>
            }

            {
                editing && CachedWidget.type === "HEADING" &&

                <HeadingWidget
                    deleteWidget={deleteWidget}
                    updateWidget={updateWidget}
                    widget={CachedWidget}/>
            }

            {
                editing && CachedWidget.type === "IMAGE" &&

                <ImageWidget
                    deleteWidget={deleteWidget}
                    updateWidget={updateWidget}
                    widget={CachedWidget}/>
            }
        </div>
    )
}

export default ListWidget