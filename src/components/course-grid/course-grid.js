import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card";

export default class CourseGrid extends
    React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
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
                        this.props.courses.map(course =>
                            <CourseCard
                                key={course._id}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                course={course}
                                title={course.title}
                                lastModified={course.lastModified}
                                owner={course.owner}/>)
                    }
                </div>
            </div>
        )
    }
}