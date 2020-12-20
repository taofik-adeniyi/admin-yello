import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import { Button, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './revenue.css'
import GoBack from '../GoBack/GoBack'

class Revenue extends Component {
    render() {
        return (
            <div>
                <div className="row">
                </div>
                <div className="page-header">
                <h3 className="page-title px-3"> 
                    <GoBack />
                    Revenue Overview
                </h3>
                </div>
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

                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Subscription Summary </h4>
                        <p className="card-description"> 
                        <Link to="/revenue/subscription">
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
                                <td className="py-1" > Today's Subscription </td>
                                <td>  </td>
                                <td>  </td>
                                <td>  </td>
                                <td align="right"> 0 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Subscription's in the Past Week </td>
                                <td> </td>
                                <td>  </td>
                                <td>  </td>
                                <td align="right"> 0 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Subscription's in the Past Month </td>
                                <td>  </td>
                                <td>  </td>
                                <td> </td>
                                <td align="right"> 0 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Subscription's in the Past Two Month </td>
                                <td>  </td>
                                <td>  </td>
                                <td> </td>
                                <td align="right"> 0 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Total Subscription's </td>
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


                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Games played summary</h4>
                        <p className="card-description"> 
                            <Link to="/revenue/games-played">
                                Click here for more details <i className="mdi mdi-arrow-right"></i>
                            </Link>
                        </p>
                        <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th> Today </th>
                                <th> Past Week name </th>
                                <th> Past Month </th>
                                <th> Past Two Month </th>
                                <th> Total </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="py-1">
                                Trivia
                                </td>
                                <td> ₦178 </td>
                                <td> ₦4,765 </td>
                                <td> ₦777.99 </td>
                                <td> ₦15,2015 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Prediction </td>
                                <td> ₦101  </td>
                                <td> ₦3,657 </td>
                                <td> ₦245.30 </td>
                                <td> ₦1,2015 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Ratata </td>
                                <td> ₦567 </td>
                                <td> ₦3,145 </td>
                                <td> ₦138.00 </td>
                                <td> ₦7,9015 </td>
                            </tr>
                            <tr>
                                <td className="py-1"> Total </td>
                                <td> ₦987 </td>
                                <td> ₦2,345 </td>
                                <td> ₦15000 </td>
                                <td> ₦2,015 </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>

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

                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Winning summary</h4>
                            <p className="card-description">   
                                <Link to="/revenue/winning">
                                    Click here for more details <i className="mdi mdi-arrow-right"></i>
                                </Link>
                            </p>
                            <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th> Games </th>
                                    <th> Today </th>
                                    <th> Past Week </th>
                                    <th> Past Month </th>
                                    <th> Past Two Month </th>
                                    <th> Total </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="py-1">
                                    Trivia
                                    </td>
                                    <td> ₦178 </td>
                                    <td> ₦4,765 </td>
                                    <td> ₦777.99 </td>
                                    <td> ₦15,2015 </td>
                                    <td> ₦15,2015 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Prediction </td>
                                    <td> ₦101  </td>
                                    <td> ₦3,657 </td>
                                    <td> ₦245.30 </td>
                                    <td> ₦1,2015 </td>
                                    <td> ₦15,2015 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Ratata </td>
                                    <td> ₦567 </td>
                                    <td> ₦3,145 </td>
                                    <td> ₦138.00 </td>
                                    <td> ₦7,9015 </td>
                                    <td> ₦7,9015 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Total </td>
                                    <td> ₦987 </td>
                                    <td> ₦2,345 </td>
                                    <td> ₦15000 </td>
                                    <td> ₦2,015 </td>
                                    <td> ₦2,015 </td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Revenue