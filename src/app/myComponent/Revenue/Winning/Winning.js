import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Winning extends Component {
    render() {
        return (
            <div>
                <h1>Winning</h1>
                <div className="page-header">
          < h3 className="page-title"> 
          <Button variant="warning">Back</Button>&nbsp;&nbsp;
          All Predictions:  </h3>
        </div>
            </div>
        )
    }
}

export default Winning
