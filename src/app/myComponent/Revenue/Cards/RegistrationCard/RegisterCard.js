import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RegisterCard extends Component {
    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Registration Summary </h4>
                        <p className="card-description"> 
                        <Link to="/revenue/registration">
                            Click here for more details <i className="mdi mdi-arrow-right"></i>
                        </Link>
                        </p>
                        <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th> Day Range </th>
                                <th>  </th>
                                <th>  </th>
                                <th>  </th>
                                <th>  </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="py-1" > Today's Registration </td>
                                <td>  </td>
                                <td>  </td>
                                <td>  </td>
                                <td align="right"> 0 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Registration's in the Past Week </td>
                                <td> </td>
                                <td>  </td>
                                <td>  </td>
                                <td align="right"> 0 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Registration's in the Past Month </td>
                                <td>  </td>
                                <td>  </td>
                                <td> </td>
                                <td align="right"> 0 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Registration's in the Past Two Month </td>
                                <td>  </td>
                                <td>  </td>
                                <td> </td>
                                <td align="right"> 0 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Total Registration's </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td align="right"> 9287 </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}

export default RegisterCard
