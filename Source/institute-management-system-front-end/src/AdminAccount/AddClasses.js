import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Navbar from './CommonComponents/Navbar';
import AdminAuthDataService from './CommonComponents/AdminAuthDataService';

class AddClasses extends Component {


    constructor(props) {
        super(props)

        this.state = {
            id: null, name: "", strength: 0, dep: "",
            dropdowncontent: [],

        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event)//This is a synthetic event
    {
        this.setState({ [event.target.name]: event.target.value });
    }


    onSubmit(values) {

        const { history } = this.props;

        AdminAuthDataService.addClass(this.state)
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
        AdminAuthDataService.adminSeeAllDepartments().then(response => {
            this.setState({ dropdowncontent: response.data })
            console.log(response.data)
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row ">
                        {/* <div className="col-md-2 navbar-div">
                            <Navbar />
                        </div> */}
                        <div className="col-md-12 content-div">

                            <div className="content_holder">
                                <h2>Add Classes</h2><hr />
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Class Name</label>
                                    <input type="text" class="form-control" name="name"
                                        onChange={this.handleChange} value={this.state.name} placeholder="Enter name" />
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Strength</label>
                                    <input type="number" class="form-control" name="strength"
                                        onChange={this.handleChange} value={this.state.strength} placeholder="Enter Strength" />
                                </div>


                                <div class="form-group">
                                    <label for="exampleInputEmail1">Department Name</label>
                                    <select type="email" class="form-control" name="dep"
                                        onChange={this.handleChange} value={this.state.dep} placeholder="Enter email">
                                        {

                                            this.state.dropdowncontent.map(
                                                dept =>
                                                    <option value={dept.id}>{dept.name}</option> )

                                        }
                                    </select>
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

export default AddClasses;