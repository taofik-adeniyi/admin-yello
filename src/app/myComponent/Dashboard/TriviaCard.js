import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { TriviaContext } from '../../myContext/TriviaContext'

function TriviaCard() {
    const value = useContext(TriviaContext)
    return (
        <React.Fragment>
            <div className="col-md-3 grid-margin stretch-card">
                <div className="card" style={{color: "black"}}>
                  <div className="card-body">
                    <Link to="/all-trivia">
                      <div className="d-flex justify-content-between pb-2 align-items-center">
                        <h3 className="font-weight-semibold mb-0">Trivia</h3>
                        <div className="icon-holder">
                          <i className="mdi mdi-briefcase-outline"></i>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5 className="font-weight-semibold mb-0">4,624</h5>
                      </div>
                    </Link>
                  </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TriviaCard
