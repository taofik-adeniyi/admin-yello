import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Revenue extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div>
                        <h2>Revenue Services: For Administrative purpose</h2>
                    </div>
                </div>
                <div className="page-header">
                <h3 className="page-title"> 
                    <Button variant="warning">Back</Button>&nbsp;&nbsp;
                    Revenue Total:
                </h3>
                </div>
                <div className="tabular">
                    <h3>Registration summary</h3>
                    <div>Today</div>
                    <div>Past 7 days</div>
                    <div>Past 30 days</div>
                    <div>Past 2 months</div>
                    <div>Total Registration</div>
                    <Link to="/revenue/registration">Click to view more</Link>
                </div>

                <div className="tabular">
                    <h3>Games palyed amount summary</h3>
                    <div>Today &nbsp; Past 7 days &nbsp; Past 30 days &nbsp; Past 2 months &nbsp; Total</div>
                    <div>Trivia</div>
                    <div>Prediction</div>
                    <div>Ratata</div>
                    <div>TOTAL</div>
                    <Link to="/revenue/games-played">Click to view more</Link>
                </div>

                <div className="tabular">
                    <h3>Deposits summary</h3>
                    <div>Today's</div>
                    <div>Past 7 days</div>
                    <div>Past 30 days</div>
                    <div>Past 2 months</div>
                    <div>Total Deposits</div>
                    <Link to="/revenue/deposit">Click to view more</Link>
                </div>

                <div className="tabular">
                    <h3>Winning amount summary</h3>
                    <div>Today &nbsp; Past 7 days &nbsp; Past 30 days &nbsp; Past 2 months &nbsp; Total</div>
                    <div>Trivia</div>
                    <div>Prediction</div>
                    <div>Ratata</div>
                    <div>TOTAL</div>
                    <Link to="revenue/winning">Click to view more</Link>
                </div>
            </div>
        )
    }
}


export default Revenue