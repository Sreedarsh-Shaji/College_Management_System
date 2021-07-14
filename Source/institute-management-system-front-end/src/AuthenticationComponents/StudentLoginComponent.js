import React, { Component } from 'react';
import AuthenticationDataService from './AuthenticationDataService';
import AuthenticationService from './AuthenticationService';

import './Style.css';

class StudentLoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            error: false,
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSubmit(values) {

        const { history } = this.props;

        AuthenticationDataService.studentLogin(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulStudentLogin(response.data);
                if (response.data.student_id == null) {
                    this.setState({ error: "Invalid credentials" })
                }
                else {
                    this.setState({ error: "Valid credentials" })
                    history.push('/Student/Home');
                }
                console.log(response.data)
            })
            .catch(
                err => {
                    console.log(err)
                    this.setState({ error: "Invalid credentials" })
                })
    }


    componentDidMount() {
        console.log("Admin component did mount");
    }

    handleChange(event)//This is a synthetic event
    {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    }

    render() {
        return (
            <>
                
                    

                    
                <div className="container login-style login-div">

                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 heading-div"> STUDENT  </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 Signup-div">
                                <h3>Sign In</h3>

                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" name="username" placeholder="Enter email" onChange={this.handleChange}/>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password"  placeholder="Enter password" onChange={this.handleChange}/>
                                </div>

                                <div className="form-group">
                                    <strong>New user !</strong> Initial password is dob in yyyy-mm-dd format!
                                </div>

                                <button type="submit" className="btn btn-primary btn-block" onClick={this.onSubmit}>Submit</button>
                            
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>

                
                <div className="row failure-message">

                    <div className="col-md-2"></div>
                    <div className="col-md-8">

                        {this.state.error && <div className="alert alert-danger" role="alert">
                            {this.state.error}
                        </div>}

                    </div>
                    <div className="col-md-2"></div>
                </div>
            
            </>
        );
    }


    userSelect(user) {
        this.setState(prevState => ({
            usertype: user
        }));
    }
}

export default StudentLoginComponent;