import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class GameCard extends Component {
    render() {
        return (
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
        )
    }
}

export default GameCard
