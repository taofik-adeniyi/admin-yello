import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Deposit extends Component {
    render() {
        return (
            <div>
                <h1>Deposit</h1>
                <div className="page-header">
                < h3 className="page-title"> 
                <Button variant="warning">Back</Button>&nbsp;&nbsp;
                All Predictions: </h3>
                </div>
            </div>
        )
    }
}

export default Deposit
