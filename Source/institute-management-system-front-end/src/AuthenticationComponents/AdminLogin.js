import React, { Component } from 'react';
import AuthenticationDataService from "./AuthenticationDataService"
import AuthenticationService from './AuthenticationService';
import { withRouter } from 'react-router';

import './Style.css'

class AdminLogin extends Component {



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
    }

    render() {
        return (
            <div className="container">
                <h2 class="form-heading">login</h2>
                <div class="app-cam">
                    <form>
                        <input type="text" class="text" value="E-mail address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'E-mail address';}" />
                        <input type="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" />
                        <div class="submit"><input type="submit" onclick="myFunction()" value="Login" /></div>
                        <div class="login-social-link">
                            <a href="index.html" class="facebook">
                                Facebook
                            </a>
                            <a href="index.html" class="twitter">
                                Twitter
                            </a>
                        </div>
                        <ul class="new">
                            <li class="new_left"><p><a href="#">Forgot Password ?</a></p></li>
                            <li class="new_right"><p class="sign">New here ?<a href="register.html"> Sign Up</a></p></li>
                            <div class="clearfix"></div>
                        </ul>
                    </form>
                </div>
                <div class="copy_layout login">
                    <p>Copyright &copy; 2015 Modern. All Rights Reserved | Design by <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
                </div>

            </div>
        );
    }
}



export default withRouter(AdminLogin);