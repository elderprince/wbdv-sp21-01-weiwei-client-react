import React, {useState} from 'react'
import ParagraphWidget from "./paragraph-widget";
import HeadingWidget from "./heading-widget";

const ImageWidget = (
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
                <div>
                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog float-right">
                    </i>
                </div>

            }

            {
                editing && CachedWidget.type === "IMAGE" &&
                <div>

                    <br/>

                    <>
                        <select onChange={(e) => setCachedWidget({...CachedWidget, type: e.target.value})}
                                value={CachedWidget.type}
                                className="form-control">
                            <option value={"HEADING"}>HEADING</option>
                            <option value={"PARAGRAPH"}>PARAGRAPH</option>
                            <option value={"LIST"}>LIST</option>
                            <option value={"IMAGE"}>IMAGE</option>
                        </select>
                    </>

                    URL
                    <input onChange={(e) => setCachedWidget({...CachedWidget, src: e.target.value})}
                           value={CachedWidget.src} className="form-control"/>
                    Width
                    <input onChange={(e) => setCachedWidget({...CachedWidget, width: e.target.value})}
                           value={CachedWidget.width} className="form-control"/>
                    Height
                    <input onChange={(e) => setCachedWidget({...CachedWidget, height: e.target.value})}
                           value={CachedWidget.height} className="form-control"/>

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
                        widget={CachedWidget}
                        editing={editing}
                        setEditing={setEditing}/>
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
        </div>
    )
}

export default ImageWidget