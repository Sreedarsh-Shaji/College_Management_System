import React, { Component } from 'react';
import AuthenticationService from '../../AuthenticationComponents/AuthenticationService';
import { Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router'

import Cookies from 'universal-cookie';

import './Style.css';

class Header extends Component {


    constructor(props) {
        super(props)

        this.state = { student_name: "" }

    }

    componentDidMount() {
        const cookies = new Cookies();
        this.setState({ Student_name: cookies.get('Student').name })
    }

    render() {
        const isStudentLoggedIn = AuthenticationService.isStudentLoggedIn;

        if (!isStudentLoggedIn) {
            this.props.history.push('/student-login');
        }


        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="#" className="navbar-brand">Student Home</a></div>
                                <a class="nav-link" style={{"color":"white"}} href="Home">Home</a>
                                <a class="nav-link" style={{"color":"white"}} href="/Student/view_sessions">View Session</a>
                                <a class="nav-link" style={{"color":"white"}} href="/Student/view_exams"> Exams </a>
                                <a class="nav-link" style={{"color":"white"}} href="/Student/view_assignments"> View Assignment </a>
                                <a class="nav-link" style={{"color":"white"}} href="/Student/add_assignments"> Add Assignment </a>
                            {/* <li class="nav-item">
                    <a class="nav-link" href="#">Feedback</a>
                </li> */}
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isStudentLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isStudentLoggedIn && <li className="nav-link"> Welcome {this.state.Student_name}</li>} |
                        {isStudentLoggedIn && <li><Link to="/student-login" className="nav-link" onClick={AuthenticationService.studentLogout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(Header);