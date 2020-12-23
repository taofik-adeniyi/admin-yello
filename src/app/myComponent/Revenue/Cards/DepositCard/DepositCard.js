import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class DepositCard extends Component {
    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Deposits Summary </h4>
                        <p className="card-description"> 
                            <Link to="/revenue/deposit">
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
                                <td className="py-1" > Today's Deposit </td>
                                <td>  </td>
                                <td>  </td>
                                <td>  </td>
                                <td align="right"> ₦987 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Deposit's in the Past Week </td>
                                <td> </td>
                                <td>  </td>
                                <td>  </td>
                                <td align="right"> ₦987 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Deposit's in the Past Month </td>
                                <td>  </td>
                                <td>  </td>
                                <td> </td>
                                <td align="right"> ₦987 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Deposit's in the Past Two Month </td>
                                <td>  </td>
                                <td>  </td>
                                <td> </td>
                                <td align="right"> ₦987 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Total Deposit's </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td align="right"> ₦987 </td>
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

export default DepositCard
