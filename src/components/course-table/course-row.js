import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
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
        <tr  className="row">
            <td className="col-md-8 col-10 col-lg-6">
                {
                    !editing &&
                    <Link to={`/courses/table/edit/${course._id}`}>
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
            </td>
            <td className="col-md-2 col-0 col-lg-2">{course.owner}</td>
            <td className="col-md-0 col-0 col-lg-2">{course.lastModified}</td>
            <td>
                <Link to={`/courses/${course._id}/quizzes`}>
                    Quizzes
                </Link>
            </td>
            <td>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>

                {
                    editing &&
                    <i onClick={() => saveCourse()} className="fas fa-check"></i>
                }

                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                }
            </td>
        </tr>)
}

export default CourseRow