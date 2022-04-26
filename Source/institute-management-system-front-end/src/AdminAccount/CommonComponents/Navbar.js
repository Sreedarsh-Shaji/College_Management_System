import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-div">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link" href="add_dept">Department</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="add_classes">Classes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="add_teacher">Teacher</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="add_students">Student</a>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link" href="#">Feedback</a>
                </li> */}
            </ul>
            </div>
        );
    }
}

export default Navbar;