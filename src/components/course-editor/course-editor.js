import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
    <div>
        <div class="wbdv-sticky-top wbdv-padding-5px">
            <div class="row">
                <div className="col-1 wbdv-course-editor wbdv-close">
                    <i className="fas fa-arrow-left"
                       onClick={() => history.goBack()}></i>
                </div>

                <div class="col-2 wbdv-course-title">
                    <h4>Course Editor</h4>
                </div>

                <div class="col-6 wbdv-lesson-tabs">
                    <ul class="nav nav-tabs nav-justified">
                        <li class="nav-item">
                            <a class="nav-link active"
                               aria-current="page"
                               href="#">
                                Build
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Pages
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Theme
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Store
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Apps
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Settings
                            </a>
                        </li>

                        <li class="nav-item wbdv-lesson-add-btn">
                            <i class="fa fa-plus fa-1.5x"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <br/>

        <div class="row">
            <div class="col-4">
                <ul class="list-group wbdv-module-list">
                    <li class="list-group-item wbdv-module-item">
                        <a class="wbdv-module-item-title">
                            Module 1
                        </a>
                        <i class="pull-right fa fa-trash wbdv-module-item-delete-btn"></i>
                    </li>

                    <li class="list-group-item wbdv-module-item">
                        <a class="wbdv-module-item-title">
                            Module 2
                        </a>
                        <i class="pull-right fa fa-trash wbdv-module-item-delete-btn"></i>
                    </li>

                    <li class="list-group-item wbdv-module-item">
                        <a class="wbdv-module-item-title">
                            Module 3
                        </a>
                        <i class="pull-right fa fa-trash wbdv-module-item-delete-btn"></i>
                    </li>

                    <li class="list-group-item wbdv-module-item">
                        <a class="wbdv-module-item-title">
                            Module 4
                        </a>
                        <i class="pull-right fa fa-trash wbdv-module-item-delete-btn"></i>
                    </li>

                    <li class="list-group-item wbdv-module-item">
                        <a class="wbdv-module-item-title">
                            Module 5
                        </a>
                        <i class="pull-right fa fa-trash wbdv-module-item-delete-btn"></i>
                    </li>

                    <li class="list-group-item wbdv-module-item">
                        <a class="wbdv-module-item-title">
                            Module 6
                        </a>
                        <i class="pull-right fa fa-trash wbdv-module-item-delete-btn"></i>
                    </li>

                    <li class="list-group-item wbdv-module-item">
                        <a class="wbdv-module-item-title">
                            Module 7
                        </a>
                        <i class="pull-right fa fa-trash wbdv-module-item-delete-btn"></i>
                    </li>

                    <li class="list-group-item wbdv-module-item-add-btn">
                        <i class="pull-right fa fa-plus fa-1.5x"></i>
                    </li>
                </ul>
            </div>

            <div class="col-8">
                <ul class="nav nav-pills nav-justified wbdv-topic-pill-list">
                    <li class="nav-item wbdv-topic-pill">
                        <a class="nav-link active"
                           aria-current="page"
                           href="#">
                            Topic 1
                        </a>
                    </li>

                    <li class="nav-item wbdv-topic-pill">
                        <a class="nav-link"
                           href="#">
                            Topic 2
                        </a>
                    </li>

                    <li class="nav-item wbdv-topic-pill">
                        <a class="nav-link"
                           href="#">
                            Topic 3
                        </a>
                    </li>

                    <li class="nav-item wbdv-topic-pill">
                        <a class="nav-link"
                           href="#">
                            Topic 4
                        </a>
                    </li>

                    <li class="nav-item wbdv-topic-add-btn">
                        <i class="pull-right fa fa-plus fa-1.5x"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>

export default CourseEditor