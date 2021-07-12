import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Navbar from './CommonComponents/Navbar';

import AdminAuthDataService from './CommonComponents/AdminAuthDataService';


class AdminHomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            departmentNumber : "",
            classNumber : "",
            teacherNumber : "",
            studentNumber : "",
            parentNumber : ""
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    onSubmit() {

       AdminAuthDataService.getSystemStatus()
            .then((response) => {
                if (response.data == null) {
                    this.setState({ error: "Invalid credentials" })
                }
                else {
                    this.setState({  
                        departmentNumber : response.data.departmentNumber,
                        classNumber : response.data.classNumber,
                        teacherNumber : response.data.teacherNumber,
                        studentNumber : response.data.studentNumber,
                        parentNumber : response.data.parentNumber
                    })
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
        this.onSubmit()
    }

    handleChange(event)//This is a synthetic event
    {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 navbar-div">
                            <Navbar />
                        </div>
                        <div className="col-md-10 content-div">

                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-3 admin-home-content-div col1">
                                        <h4 className="admin-home-content-div-txt">Total Departments : {this.state.departmentNumber}</h4>
                                    </div>

                                    <div className="col-md-3 admin-home-content-div col2">
                                        <h4 className="admin-home-content-div-txt">Total Teachers : {this.state.teacherNumber}</h4>
                                    </div>

                                    <div className="col-md-3 admin-home-content-div col3">
                                        <h4 className="admin-home-content-div-txt">Total Students : {this.state.studentNumber}</h4>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-3 admin-home-content-div col4">
                                        <h4 className="admin-home-content-div-txt">Total Classes : {this.state.classNumber}</h4>
                                    </div>

                                    <div className="col-md-3 admin-home-content-div col5">
                                        <h4 className="admin-home-content-div-txt">Total Parents : {this.state.parentNumber}</h4>
                                    </div>

                                    {/*
                                    <div className="col-md-3 admin-home-content-div col6">
                                        <h4 className="admin-home-content-div-txt">Total studentNumber : {this.state.studentNumber}</h4>
                                    </div>
                                    */}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default AdminHomePage;