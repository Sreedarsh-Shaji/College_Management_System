import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Navbar from './CommonComponents/Navbar';

class ViewDepertment extends Component {
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
                        <h2>View Department</h2><hr/>
                            
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
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

export default ViewDepertment;