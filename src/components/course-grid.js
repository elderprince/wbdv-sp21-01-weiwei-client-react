import React from 'react'
import {Link} from "react-router-dom";

const CourseGrid = ({courses}) =>
    <div>
        <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-0 col-0
                        wbdv-header wbdv-course-grid-recent-documents">
                Recent Documents
            </div>

            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-0 col-0
                        wbdv-header wbdv-course-grid-owned-by-me">
                Owned by me
                <i className="fas fa-sort-down wbdv-button wbdv-course-grid"></i>
            </div>

            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1
                        wbdv-button wbdv-course-grid">
                <i className="fa fa-folder fa-2x"></i>
                <i className="fa fa-sort fa-2x"></i>
                <Link to="/courses/table">
                    <i className="fas fa-2x fa-list"></i>
                </Link>
            </div>
        </div>

        <div className="row">
            {
                courses.map(course =>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 card"
                         style={{width: "18rem", margin: "15px"}}>
                        <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                             className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{course.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <Link to="/editor" className="btn btn-primary">
                                {course.title}
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>

    </div>

export default CourseGrid