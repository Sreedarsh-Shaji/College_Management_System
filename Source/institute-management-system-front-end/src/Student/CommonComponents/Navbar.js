import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-div">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <Link to="/Admin/Home" className="nav-link disabled">Home</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Sessions</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Assignments</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Exam Schedules</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Submittions</a>
                </li>
            </ul>
            </div>
        );
    }
}

export default Navbar;