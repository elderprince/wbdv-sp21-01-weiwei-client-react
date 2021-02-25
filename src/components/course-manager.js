import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-service";

export default class CourseManager
    extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            courses: []
        }
        this.updateInput = this.updateInput.bind(this);
        this.addCourse = this.addCourse.bind(this);
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    deleteCourse = (course) => {
        courseService.deleteCourse(course._id)
            .then(status => {
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    updateInput(event){
        this.setState({title : event.target.value})
    }

    addCourse (e) {
        e.preventDefault();
        const newCourse = {
            title: this.state.title,
            owner: "me",
            lastModified: new Date().toISOString().split('T')[0]
        };
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            });
        this.titleInput.value = '';
    }

    render() {
        return(
            <div>
                <div className="row"
                     style={{position: 'fixed', width: '100%',
                         backgroundColor: 'white', padding: '5px',
                         zIndex: '1'}}>
                    <Link to="/">
                        <i className="col-md-1 col-1 col-lg-1
                        fas fa-2x fa-home
                        wbdv-button wbdv-course-manager-to-home"></i>
                    </Link>

                    <h3 className="col-md-10 col-10 col-lg-2
                    wbdv-header wbdv-course-manager-title">
                        Course Manager
                    </h3>

                    <input type="text"
                           className="col-md-0 col-0 col-lg-8
                           form-control wbdv-field wbdv-course-manager-title-input"
                           onChange={this.updateInput}
                           ref={(ref) => this.titleInput= ref}
                           placeholder="New Course Title"/>

                    <span style={{color: "red"}}>
                        <i className="col-md-1 col-1 col-lg-1 fa fa-plus-circle fa-2x
                        wbdv-button wbdv-course-manager-add-course"
                           onClick={this.addCourse}></i>
                    </span>
                </div>

                <br/>
                <br/>

                <Route path="/courses/table" exact={true} >
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                <Route path="/courses/grid" exact={true} >
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
            </div>
        )
    }
}