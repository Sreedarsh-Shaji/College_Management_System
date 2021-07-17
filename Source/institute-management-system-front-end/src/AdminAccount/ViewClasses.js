import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Navbar from './CommonComponents/Navbar';
import AdminAuthDataService from './CommonComponents/AdminAuthDataService';

class ViewClasses extends Component {
    
    constructor(props) {
        super(props)

        let varcount = 1; 

        this.state =
        {
            tableContent: [],
        }

        let rowCount = 1;

    }

    componentDidMount() {

        AdminAuthDataService.adminSeeAllClasses().then( response => { 
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
                                <h2>View Classes</h2><br />

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Strength</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.tableContent.map(
                                                classes => 
                                                <tr>
                                                    <td>{ classes.id }</td>
                                                    <td>{ classes.id }</td>
                                                    <td>{ classes.name }</td>
                                                    <td>{ classes.maxStrength }</td>
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

export default ViewClasses;