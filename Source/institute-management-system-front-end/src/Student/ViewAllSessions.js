import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Navbar from './CommonComponents/Navbar';
import AdminAuthDataService from './CommonComponents/AdminAuthDataService';

import Cookies from 'universal-cookie';

class ViewAllSessions extends Component {


    constructor(props) {
        super(props)


        this.state = {
            id: null, name: "", description: "", start: "", end: "", email: "", date: "",
            tableContent: [],

        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.markAttendance = this.markAttendance.bind(this);
    }


    handleChange(event)//This is a synthetic event
    {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state)
    }


    onSubmit(values) {

        const { history } = this.props;

        AdminAuthDataService.addExam(this.state)
            .then((response) => {
                if (response.data == null) {
                    alert("Invalid credentials");
                    this.setState({ message: "Invalid credentials" })
                }
                else {
                    alert("Added data successfully");
                    this.setState({ message: "Valid credentials" })
                    //history.push('/Agency/Home');
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

        const cookies = new Cookies();
        this.setState({ Student: cookies.get('Student') })

        AdminAuthDataService.adminSeeAllSessions().then(response => {
            this.setState({ tableContent: response.data })
            console.log(response.data)
        })
    }

    markAttendance(sid)
    {
        const cookies = new Cookies();
       let stdId = cookies.get('Student').student_id
        AdminAuthDataService.addAttendance(sid,stdId).then(response => {
            alert('Attendance marked in system');
        })
    }

    render() {

        let rowcount = 1;

        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 navbar-div">
                            <Navbar />
                        </div>
                        <div className="col-md-10 content-div">

                            <div className="content_holder">
                                <h2>View all sessions</h2>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Period</th>
                                            <th>Time</th>
                                            <th>Url</th>
                                        </tr>
                                        {

                                            
                                        this.state.tableContent.map(
                                    session =>
                                    
                                    (<tr>
                                         <td>{ rowcount++ }</td>
                                         <td>{ session.period }</td>
                                         <td>{ session.time }</td>
                                         <td><button className="btn btn-link" onClick={()=> {window.open( session.urlToSession, "_blank");this.markAttendance(session.sessionId);}}>Join session</button></td> 
                                    </tr>)
                                    
                                    )
                                        }
                                   
                                    </thead>
                                </table>


                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ViewAllSessions;