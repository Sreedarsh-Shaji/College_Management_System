import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Navbar from './CommonComponents/Navbar';

class AddDepartment extends Component {
    render() {
        return (
            <div>
                <Header/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 navbar-div">
                                <Navbar/>
                            </div>
                            <div className="col-md-10 content-div"></div>
                        </div>
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default AddDepartment;