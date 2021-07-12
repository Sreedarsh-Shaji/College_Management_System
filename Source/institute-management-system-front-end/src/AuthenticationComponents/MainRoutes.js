import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import AdminHomePage from '../AdminAccount/AdminHomePage';

import AdminLoginComponent from './AdminLoginComponent';
import TeacherLoginComponent from './TeacherLoginComponent';
import StudentLoginComponent from './StudentLoginComponent';
import ParentLoginComponent from './ParentLoginComponent';


import AgencyHomePage from '../AgencyAccount/AgencyHomePage.js'
import AgencyOfficesPage from '../AgencyAccount/AgencyOfficesPage.js'
import AddDepartment from '../AdminAccount/AddDepartment';
import ViewDepertment from '../AdminAccount/ViewDepertment'

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
                        


                        { /* Agency components */ }
                        <Route path="/Agency/Home" component={AgencyHomePage}/>
                        <Route path="/Agency/Offices" component={AgencyOfficesPage}/>

                    </Switch>
                </Router>
            </div>
        );
    }
}


export default MainRoutes;