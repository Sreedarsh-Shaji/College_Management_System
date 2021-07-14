import React, { Component } from 'react';
import AuthenticationService from '../../AuthenticationComponents/AuthenticationService';
import { Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router'

import Cookies from 'universal-cookie';

import './Style.css';

class Header extends Component {


    constructor(props){
        super(props)

        this.state = { student_name: "" }

    }

    componentDidMount()
    {
        const cookies = new Cookies();
        this.setState( { Student_name: cookies.get('Student').name } )
    }

    render() {
        const isStudentLoggedIn = AuthenticationService.isStudentLoggedIn;

        if(!isStudentLoggedIn){
            this.props.history.push('/student-login');
        }

    
        return(
            <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div><a href="#" className="navbar-brand">Student Home</a></div>
                   <ul className="navbar-nav">
                   </ul>
                   <ul  className="navbar-nav navbar-collapse justify-content-end">
                        {!isStudentLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isStudentLoggedIn && <li className="nav-link"> Welcome { this.state.Student_name }</li>} | 
                        {isStudentLoggedIn &&  <li><Link to="/student-login" className="nav-link"  onClick={AuthenticationService.studentLogout}>Logout</Link></li>}
                   </ul>
               </nav>
            </header> 
        );
    }
}

export default withRouter(Header);