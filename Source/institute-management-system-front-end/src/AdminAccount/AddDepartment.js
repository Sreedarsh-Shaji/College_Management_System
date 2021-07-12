import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Navbar from './CommonComponents/Navbar';
import AdminAuthDataService from './CommonComponents/AdminAuthDataService';

class AddDepartment extends Component {


    constructor(props)
    {
        super(props)

        this.state = {
            id : null,
            description : "",
            message:null
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

      
    handleChange(event)//This is a synthetic event
    {
        this.setState({[event.target.name]:event.target.value});
    }


    onSubmit(values) {

        const { history } = this.props;

        AdminAuthDataService.addDepartment(this.state.description)
        .then((response) => { 
                if(response.data == null)
                {
                    alert("Invalid credentials");
                    this.setState({message:"Invalid credentials"})
                } 
                else{  
                    alert("Added data successfully");
                    this.setState({message:"Valid credentials"})
                    //history.push('/Agency/Home');
                }
                console.log(response.data) })
        .catch(  
        err=>{
            console.log(err)
            this.setState({error:"Invalid credentials"})
        } )
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
                            <h2>Add Department</h2><hr/>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Department Name</label>
                                    <input type="text" class="form-control" name="description" 
                                    onChange={this.handleChange} value={this.state.description} placeholder="Enter department" />
                                </div>
                                <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default AddDepartment;