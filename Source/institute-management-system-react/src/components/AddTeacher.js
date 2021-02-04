import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class AddTeacher extends Component {

constructor(props){
    super(props)

    this.state = {//This help to get the form data and help in the form submittion
        department: '',
        dob: '',
        email: '',
        name: '',
        password: '',
        phone_no: '',
        staffId: '10',
        subjects: [
            0
        ],
        teacher_id: '10',
        user_name: 'TrialStaff'
    }
    //Bind all handler methods and pass this reff

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeDOBHandler = this.changeDOBHandler.bind(this);
    this.changeDeptHandler = this.changeDeptHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.saveTeacher = this.saveTeacher.bind(this);
    this.cancel = this.cancel.bind(this);
}

//Change name handlers
changeNameHandler= (event) =>
{
    this.setState({name : event.target.value});
}

changeEmailHandler= (event) =>
{
    this.setState({ email : event.target.value});
}

changePasswordHandler= (event) =>
{
    this.setState({password : event.target.value});
}

changeDOBHandler= (event) =>
{
    this.setState({dob : event.target.value});
}

changeDeptHandler= (event) =>
{
    this.setState({department : event.target.value});
}

changePhoneHandler= (event) =>
{
    this.setState({phone_no : event.target.value});
}

saveTeacher= (event) =>
{
    event.preventDefault();
    let teacher = { department: this.state.department,dob: this.state.dob,email: this.state.email,
    name: this.state.name,password: this.state.password,phone_no: this.state.phone_no,
    staffId: this.state.staffId,subjects: this.state.subjects,teacher_id: this.state.teacher_id,
    user_name: this.state.user_name};
    console.log('Sending Employee => ' + JSON.stringify(teacher))

    EmployeeService.createTeacher(teacher).then(res =>{
        this.props.history.push('/employee');
    });
}

cancel= (event) =>
{
    this.setState({phone_no : event.target.value});
}

    render() {
        return (
            <div>
            <div className="container">
                <div class="row">
                    <div className = "card col-md-6 offset-md-3">

                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <form>
                                
                                <div className="form-group">
                                    <label>Name</label>
                                    <input placeholder="Name" name="name" className="form-control"
                                    value={this.state.name} onChange={this.changeNameHandler}></input>
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input placeholder="Email" name="email" type="email" className="form-control"
                                    value={this.state.email} onChange={this.changeEmailHandler}></input>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input placeholder="Password" name="password" type="password" className="form-control"
                                    value={this.state.password} onChange={this.changePasswordHandler}></input>
                                </div>

                                <div className="form-group">
                                    <label>Date Of Birth</label>
                                    <input placeholder="Date Of Birth" name="name" type="date" className="form-control"
                                    value={this.state.dob} onChange={this.changeDOBHandler}></input>
                                </div>

                                <div className="form-group">
                                    <label>Department</label>
                                    <input placeholder="Department" name="dept" className="form-control"
                                    value={this.state.department} onChange={this.changeDeptHandler}></input>
                                </div>

                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input placeholder="Phone Number" name="phone" className="form-control"
                                    value={this.state.phone_no} onChange={this.changePhoneHandler}></input>
                                </div>

                                <div className="form-group">
                                    <button class="btn btn-success" onClick={this.saveTeacher}>Save</button>
                                    <button class="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "30px" }}>Cancel</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default AddTeacher;