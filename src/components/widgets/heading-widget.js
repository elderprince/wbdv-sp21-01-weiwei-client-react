import React, {useState} from 'react'

const HeadingWidget = (
    {
        widget,
        deleteWidget,
        updateWidget}) => {

    const [editing, setEditing] = useState(false)
    const [CachedWidget, setCachedWidget] = useState(widget)

    return(

        <div>
            {
                !editing &&

                <div>
                    { widget.size === 1 && <h1>{widget.text}</h1>}
                    { widget.size === 2 && <h2>{widget.text}</h2>}
                    { widget.size === 3 && <h3>{widget.text}</h3>}
                    { widget.size === 4 && <h4>{widget.text}</h4>}
                    { widget.size === 5 && <h5>{widget.text}</h5>}
                    { widget.size === 6 && <h6>{widget.text}</h6>}

                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog float-right">
                    </i>
                </div>

            }

            {
                editing && CachedWidget.type === "HEADING" &&

                <div>

                    { CachedWidget.size === 1 && <h1>{CachedWidget.text}</h1>}
                    { CachedWidget.size === 2 && <h2>{CachedWidget.text}</h2>}
                    { CachedWidget.size === 3 && <h3>{CachedWidget.text}</h3>}
                    { CachedWidget.size === 4 && <h4>{CachedWidget.text}</h4>}
                    { CachedWidget.size === 5 && <h5>{CachedWidget.text}</h5>}
                    { CachedWidget.size === 6 && <h6>{CachedWidget.text}</h6>}

                    <br/>

                    <>
                        <select onChange={(e) => setCachedWidget({...CachedWidget, type: e.target.value})}
                                value={CachedWidget.type}
                                className="form-control">
                            <option value={"HEADING"}>HEADING</option>
                            <option value={"PARAGRAPH"}>PARAGRAPH</option>
                        </select>
                    </>

                    <br/>

                    <input onChange={(e) => setCachedWidget({...CachedWidget, text: e.target.value})}
                           value={CachedWidget.text}
                           className="form-control"/>

                    <br/>

                    <select onChange={(e) => setCachedWidget({...CachedWidget, size: parseInt(e.target.value)})}
                            value={CachedWidget.size}
                            className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>


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
                    <>
                        <select onChange={(e) => setCachedWidget({...CachedWidget, type: e.target.value})}
                                value={CachedWidget.type}
                                className="form-control">
                            <option value={"HEADING"}>HEADING</option>
                            <option value={"PARAGRAPH"}>PARAGRAPH</option>
                        </select>
                    </>

                    <br/>

                    <>
                        <textarea
                            onChange={(e) => setCachedWidget({...CachedWidget, text: e.target.value})}
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
        </div>
    )
}

export default HeadingWidget