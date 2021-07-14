import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import AdminHomePage from '../AdminAccount/AdminHomePage';

import AdminLoginComponent from './AdminLoginComponent';
import TeacherLoginComponent from './TeacherLoginComponent';
import StudentLoginComponent from './StudentLoginComponent';
import ParentLoginComponent from './ParentLoginComponent';

import AddDepartment from '../AdminAccount/AddDepartment';
import ViewDepertment from '../AdminAccount/ViewDepertment'
import AddTeacher from '../AdminAccount/AddTeacher';
import AddClasses from '../AdminAccount/AddClasses';
import AddStudent from '../AdminAccount/AddStudent';
import AddParent from '../AdminAccount/AddParent';

import TeacherHomePage from '../Teacher/TeacherHomePage';
import AddSession from '../Teacher/AddSession';
import AddAssignment from '../Teacher/AddAssignment';
import AddExamSchedule from '../Teacher/AddExamSchedule';
import StudentHome from '../Student/StudentHome';
import ViewAllSessions from '../Student/ViewAllSessions';
import ViewAllExams from '../Student/ViewAllExams';
import ViewAllAssignments from '../Student/ViewAllAssignments';
import StudentAddAssignment from '../Student/StudentAddAssignment';

class MainRoutes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>

                        { /* Login components */ }
                        <Route path="/admin-login" exact component={AdminLoginComponent}/>  
                        <Route path="/teacher-login" exact component={TeacherLoginComponent}/>
                        <Route path="/student-login" exact component={StudentLoginComponent}/>
                        <Route path="/parent-login" exact component={ParentLoginComponent}/>

                        { /* Admin components */ }
                        <Route path="/Admin/Home" component={AdminHomePage}/>
                        <Route path="/Admin/add_dept" component={AddDepartment}/>
                        <Route path="/Admin/view-department" component={ViewDepertment}/>
                        <Route path="/Admin/add_teacher" component={AddTeacher}/>
                        <Route path="/Admin/add_classes" component={AddClasses}/>
                        <Route path="/Admin/add_students" component={AddStudent}/>
                        <Route path="/Admin/add_parent" component={AddParent}/>
                        
                        { /* Teacher components */ }
                        <Route path="/Teacher/Home" component={TeacherHomePage}/>
                        <Route path="/Teacher/add_session" component={AddSession}/>
                        <Route path="/Teacher/add_assignemnt" component={AddAssignment}/>
                        <Route path="/Teacher/add_exam_schedule" component={AddExamSchedule}/>

                        { /* Student components */ }
                        <Route path="/Student/Home" component={StudentHome}/>
                        <Route path="/Student/view_sessions" component={ViewAllSessions}/>
                        <Route path="/Student/view_exams" component={ViewAllExams}/>
                        <Route path="/Student/view_assignments" component={ViewAllAssignments}/>
                        <Route path="/Student/add_assignments" component={StudentAddAssignment}/>

                    </Switch>
                </Router>
            </div>
        );
    }
}


export default MainRoutes;