import React, {useState} from 'react'

const ParagraphWidget = (
    {
        widget,
        deleteWidget,
        updateWidget}) => {

    const [editing, setEditing] = useState(false)
    const [CachedWidget, setCachedWidget] = useState(widget)

    return (
        <div>
            {
                editing &&
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
            }

            {
                !editing &&
                <p>
                    {widget.text}
                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog float-right">
                    </i>
                </p>
            }
        </div>
    )
}

export default ParagraphWidget