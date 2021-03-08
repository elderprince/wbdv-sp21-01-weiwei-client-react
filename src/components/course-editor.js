import React from 'react'
import {Link} from "react-router-dom";
import moduleReducer from "./reducers/module-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";

const reducer = combineReducers({
    moduleReducer: moduleReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    return(
        <Provider store={store}>
            <div>
                <div class="wbdv-sticky-top wbdv-padding-5px">
                    <div class="row">
                        <Link to="/courses/table">
                            <i className="col-1 wbdv-course-editor wbdv-close fas fa-arrow-left"
                               onClick={() => history.goBack()}></i>
                        </Link>

                        <div class="col-2 wbdv-course-title">
                            <h4>Course Editor</h4>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col-3">
                        <ModuleList/>
                    </div>
                    {/*<div className="col-9">*/}
                    {/*    <LessonTabs/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </Provider>
    )
}


export default CourseEditor