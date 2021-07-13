import React, { Component } from 'react';
import AuthenticationDataService from './AuthenticationDataService';
import AuthenticationService from './AuthenticationService';

import './Style.css';

class TeacherLoginComponent extends Component {


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

        AuthenticationDataService.adminLogin(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulAdminLogin(response.data);
                if (response.data.adminEmail == null) {
                    this.setState({ error: "Invalid credentials" })
                }
                else {
                    this.setState({ error: "Valid credentials" })
                    history.push('/Admin/Home');
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
                <div className="container login-style">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 heading-div"> TEACHER </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 Signup-div">
                            <form>
                                <h3>Sign In</h3>

                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
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

export default TeacherLoginComponent;