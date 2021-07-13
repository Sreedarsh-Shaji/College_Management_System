import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Navbar from './CommonComponents/Navbar';
import AdminAuthDataService from './CommonComponents/AdminAuthDataService';

class AddSession extends Component {


    constructor(props)
    {
        super(props)

        this.state = {
            id : null,name:"",classname:"",period:"",time:"",email:"",
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

        AdminAuthDataService.addSesson(this.state)
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
                        <h2>Add Session</h2><hr/>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Session Name</label>
                                <input type="text" class="form-control" name="name" 
                                onChange={this.handleChange} value={this.state.name} placeholder="Enter name" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Class Name</label>
                                <select type="email" class="form-control" name="classname" 
                                onChange={this.handleChange} value={this.state.classname} placeholder="Enter email">
                                         {
                                      
                                      this.state.dropdowncontent.map(
                                          dept => 
                                            <option value={dept.id}>{ dept.name }</option>
                                          
                                      )
                                      
                                  }
                                    </select>
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Period</label>
                                <input type="number" class="form-control" name="period" 
                                onChange={this.handleChange} value={this.state.period} placeholder="Enter Period" />
                            </div>


                            <div class="form-group">
                                <label for="exampleInputEmail1">Time</label>
                                <input type="datetime-local" class="form-control" name="time" 
                                onChange={this.handleChange} value={this.state.time} placeholder="Enter time number" />
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

export default AddSession;