import React, { Component } from 'react';
import AuthenticationService from '../../AuthenticationComponents/AuthenticationService';
import { Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router'

import Cookies from 'universal-cookie';

import './Style.css';

class Header extends Component {


    constructor(props){
        super(props)

        this.state = { teacher_name: "" }

    }

    componentDidMount()
    {
        const cookies = new Cookies();
        this.setState( { teacher_name: cookies.get('teacher-id').name } )
    }

    render() {
        const isTeacherLogin = AuthenticationService.isTeacherLoggedIn()

        if(!isTeacherLogin){
            this.props.history.push('/teacher-login');
        }

    
        return(
            <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div><a href="#" className="navbar-brand">Teacher Home</a></div>
                                <a class="nav-link" style={{"color":"white"}} href="/Teacher/Home">Home</a>
                                <a class="nav-link" style={{"color":"white"}} href="/Teacher/add_session">Add session</a>
                                <a class="nav-link" style={{"color":"white"}} href="/Teacher/add_assignemnt"> Add Assignment </a>
                                <a class="nav-link" style={{"color":"white"}} href="/Teacher/add_exam_schedule"> Exam Schedule </a>
                                
            
                   <ul className="navbar-nav">
                   </ul>
                   <ul  className="navbar-nav navbar-collapse justify-content-end">
                        {!isTeacherLogin && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isTeacherLogin && <li className="nav-link"> Welcome { this.state.teacher_name }</li>} | 
                        {isTeacherLogin &&  <li><Link to="/teacher-login" className="nav-link"  onClick={AuthenticationService.teacherLogout}>Logout</Link></li>}
                   </ul>
               </nav>
            </header> 
        );
    }
}

export default withRouter(Header);