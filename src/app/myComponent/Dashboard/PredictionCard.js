import React, { Component } from "react";
import { Link } from "react-router-dom";
import PredictionContext from "../../myContext/PredictionContext";

class PredictionCard extends Component {
  render () {
    const { total } = this.context

    return (
      <div className="col-md-3 grid-margin stretch-card">
        <div className="card" style={{ color: "black" }}>
          <div className="card-body">
            <Link to="/all-prediction">
              <div className="d-flex justify-content-between pb-2 align-items-center">
                <h3 className="font-weight-semibold mb-0">Prediction</h3>
                <div className="icon-holder">
                  <i className="mdi mdi-briefcase-outline"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="font-weight-semibold mb-0"> { total } </h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

PredictionCard.contextType = PredictionContext
export default PredictionCard;
