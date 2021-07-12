import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-div">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <Link to="/Admin/Home" className="nav-link disabled">Login</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Department</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Class</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Teacher</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Student</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Student</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Parent</a>
                </li>
            </ul>
            </div>
        );
    }
}

export default Navbar;