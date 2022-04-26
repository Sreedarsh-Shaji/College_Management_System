import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Navbar from './CommonComponents/Navbar';
import AdminAuthDataService from './CommonComponents/AdminAuthDataService';

class AddParent extends Component {


    constructor(props)
    {
        super(props)

        this.state = {
            id : null,name:"",dep:0,phoneNo:"",dob:"",email:"",
            dropdowncontent : [], 

        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

      
    handleChange(event)//This is a synthetic event
    {
        this.setState({[event.target.name]:event.target.value});
        console.log(this.state)
    }


    onSubmit(values) {

        const { history } = this.props;

        AdminAuthDataService.addParent(this.state)
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
    componentDidMount()
    {
        AdminAuthDataService.adminSeeAllStudents().then( response => { 
            this.setState ({ dropdowncontent : response.data }) 
            console.log( response.data )
            } )
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        {/* <div className="col-md-2 navbar-div">
                            <Navbar />
                        </div> */}
                        <div className="col-md-10 content-div">

                            <div className="content_holder">
                            <h2>Add Parent</h2><hr/>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Parent Name</label>
                                    <input type="text" class="form-control" name="name" 
                                    onChange={this.handleChange} value={this.state.name} placeholder="Enter name" />
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" class="form-control" name="email" 
                                    onChange={this.handleChange} value={this.state.email} placeholder="Enter mail" />
                                </div>


                                <div class="form-group">
                                    <label for="exampleInputEmail1">Student Name</label>
                                    <select type="email" class="form-control" name="dep" 
                                    onChange={this.handleChange} value={this.state.dep} placeholder="Enter email">
                                             {
                                          
                                          this.state.dropdowncontent.map(
                                              student => 
                                                <option value={student.student_id}>{ student.name }</option>
                                              
                                          )
                                          
                                      }
                                        </select>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Phone number</label>
                                    <input type="number" class="form-control" name="phoneNo" 
                                    onChange={this.handleChange} value={this.state.phoneNo} placeholder="Enter phone number" />
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1">DOB</label>
                                    <input type="date" class="form-control" name="dob" 
                                    onChange={this.handleChange} value={this.state.dob} placeholder="Enter dob" />
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

export default AddParent;