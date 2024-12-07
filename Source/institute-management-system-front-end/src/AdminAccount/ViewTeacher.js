import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Navbar from './CommonComponents/Navbar';
import AdminAuthDataService from './CommonComponents/AdminAuthDataService';

class ViewTeacher extends Component {
    
    constructor(props) {
        super(props)

        let varcount = 1; 

        this.state =
        {
            tableContent: [],
            
        }
    }

    componentDidMount() {

        AdminAuthDataService.adminSeeAllTeachers().then( response => { 
            this.setState ({ tableContent : response.data }) 
            console.log( response.data )
            } )
        console.log(this.state.tableContent)
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

                            <div className="content_holder">
                                <h2>View Teacher</h2><br />

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Email</th>
                                            {/* <th scope="col">Department</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            
                                          
                                            this.state.tableContent.map(
                                                tech => 
                                                <tr>
                                                    <td>{ tech.teacher_id }</td>
                                                    <td>{ tech.name }</td>
                                                    <td>{ tech.phone_no }</td>
                                                    <td>{ tech.email }</td>
                                                </tr>
                                            )
                                            
                                        }

                                    </tbody>
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

export default ViewTeacher;