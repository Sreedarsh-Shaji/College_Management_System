import React, { Component } from 'react';

class EmptyComponent extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                
                <h2>Employee List</h2>
                <div className = "row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Admin id </th>
                                <th> Admin Name </th>
                                <th> Admin User name </th>
                                <th> Password </th>
                                <th> Email </th>
                                <th> D.O.B </th>
                                <th> Phone Number </th>
                            </tr>
                        </thead>
                       
                    </table>
                </div>

            </div> 
            </div>
        );
    }
}

export default EmptyComponent