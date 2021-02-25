import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
        course,
        deleteCourse,
        updateCourse
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    return(
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 card">
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                 className="card-img-top" alt="..."/>

            <div className="card-body">
                <h5 className="card-title">
                    {
                        !editing &&
                        <Link to="/editor">
                            {course.title}
                        </Link>
                    }
                    {
                        editing &&
                        <input
                            className="form-control"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}/>
                    }
                </h5>

                <p className="card-text">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</p>

                <Link to="/editor" className="btn btn-primary">
                    {course.title}
                </Link>

                <i onClick={() => deleteCourse(course)} className="fas fa-trash fa-2x float-right"></i>

                {
                    editing &&
                    <i onClick={() => saveCourse()} className="fas fa-check fa-2x float-right"></i>
                }

                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x float-right"></i>
                }
            </div>
        </div>
    )
}

export default CourseCard