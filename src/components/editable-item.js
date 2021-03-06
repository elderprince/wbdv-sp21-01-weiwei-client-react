import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        active
    }) => {

    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)

    return(
        <>
            {
                !editing &&
                <>
                    <Link to={to}
                          className={`nav-link ${active? 'active':''}`}>
                        {item.title}
                    </Link>

                    <i onClick={() => setEditing(true)}
                       className="fas fa-edit float-right">
                    </i>
                </>
            }

            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>

                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)
                    }}
                       className="fas fa-check float-right">
                    </i>

                    <i onClick={() => {
                        deleteItem(item)
                        setEditing(false)
                    }}
                       className="fas fa-times float-right">
                    </i>
                </>
            }
        </>
    )
}

export default EditableItem