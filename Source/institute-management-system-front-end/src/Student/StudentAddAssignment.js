import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Navbar from './CommonComponents/Navbar';
import AdminAuthDataService from './CommonComponents/AdminAuthDataService';

import axios from "axios";


class StudentAddAssignment extends Component {

    custom_file_upload_url = `http://localhost:8082/uploadFile`;

    constructor(props)
    {
        super(props)

        this.state = {
            id : null,name:"",description:"",start:"",end:"",email:"",
            dropdowncontent : [], 

        }

        this.uploadJSONFiles = this.uploadJSONFiles.bind(this);
    }

      
    handleChange(event)//This is a synthetic event
    {
        this.setState({[event.target.name]:event.target.value});
        console.log(this.state)
    }



    uploadJSONFiles(event) {
      event.preventDefault();
      let formData = new FormData(); 
      let jsonBodyData = { 'someKey': 'someValue' };
      for(let key of Object.keys(event.target.files)) {
        if (key !== 'length') {
          formData.append('file', event.target.files[key]);
        }
      }
      formData.append('jsonBodyData',
        new Blob([JSON.stringify(jsonBodyData)], { 
          type: 'application/json'
        }));
      fetch('http://localhost:8082/uploadFile', { 
        method: 'POST',
        body: formData
      }).then(response => response.json())
      .then(result => console.log('Files successfully uploaded!'))
      .catch(error => console.log('error occurred!')); 
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
                          
                        <label>Upload Files</label>
                        <input type="file" onChange={(event) => this.uploadJSONFiles(event)} multiple/>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}

export default StudentAddAssignment;