import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import AddTeacher from './AddTeacher';

class ListEmployeeComponent extends Component {

constructor(props){
    super(props);

    this.state = {
        employees : []
    }

    this.AddTeacher = this.AddTeacher.bind(this);
}

componentDidMount(){
    EmployeeService.getEmployees().then((res) => {
        this.setState({ employees: res.data });
    });
}

AddTeacher(){
    this.props.history.push('/add-teacher');//We have created a route that saves the history object and passes the history
    //object as props to each class
}

    render() {
        return (
            <div className="text-center">
                
                <h2>Employee List</h2>

<div className="row">
    <button className="btn btn-primary" onClick={this.AddTeacher}>AddTeacher</button>
</div>

                <div className = "row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Admin id </th>
                                <th> Admin Name </th>
                                <th> Admin User name </th>
                                <th> Password </th>
                                <th> Email </th>
                                <th> D.O.B </th>
                                <th> Phone Number </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => <tr key = {employee.admin_id}>
                                        <td>{employee.admin_id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.userName}</td>
                                        <td>{employee.password}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.dob}</td>
                                        <td>{employee.phone_no}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListEmployeeComponent;