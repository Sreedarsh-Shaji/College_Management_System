import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Navbar from './CommonComponents/Navbar';
import AdminAuthDataService from './CommonComponents/AdminAuthDataService';

class AddExamSchedule extends Component {


    constructor(props)
    {
        super(props)

        this.state = {
            id : null,name:"",description:"",start:"",end:"",email:"",date:"",
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

        AdminAuthDataService.addExam(this.state)
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
        AdminAuthDataService.adminSeeAllClasses().then( response => { 
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
                    <div className="col-md-2 navbar-div">
                        <Navbar />
                    </div>
                    <div className="col-md-10 content-div">

                        <div className="content_holder">
                        <h2>Add Exam Schedule</h2><hr/>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" class="form-control" name="name" 
                                onChange={this.handleChange} value={this.state.name} placeholder="Enter Name" />
                            </div>


                            <div class="form-group">
                                <label for="exampleInputEmail1"> Date</label>
                                <input type="date" class="form-control" name="date" 
                                onChange={this.handleChange} value={this.state.date} placeholder="Enter description" />
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

export default AddExamSchedule;