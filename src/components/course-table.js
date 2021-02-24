import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends
    React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="row hidden-xs">
                    <div className="col-md-8 col-10 col-lg-6
                    wbdv-header wbdv-course-table-title">
                        Title
                    </div>

                    <div className="col-md-2 col-0 col-lg-2
                    wbdv-header wbdv-course-table-owner">
                        Owned by
                    </div>

                    <div className="col-md-0 col-0 col-lg-2
                    wbdv-header wbdv-course-table-last-modified">
                        Last modified
                    </div>

                    <div className="col-md-0.3 col-0.3 col-lg-0.3
                    wbdv-button wbdv-course-table-folder">
                        <i className="fa fa-folder fa-2x"></i>
                    </div>

                    <div className="col-md-0.3 col-0.3 col-lg-0.3
                    wbdv-button wbdv-course-table-sort">
                        <i className="fa fa-sort fa-2x"></i>
                    </div>

                    <Link to="/courses/grid">
                        <i className="col-md-0.3 col-0.3 col-lg-0.3
                        fas fa-th fa-2x
                        wbdv-button wbdv-course-table-togrid"></i>
                    </Link>
                </div>

                <div>
                    {
                        this.props.courses.map(course =>
                            <CourseRow
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