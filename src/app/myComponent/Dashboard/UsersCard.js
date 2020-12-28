import React from 'react'
import { Link } from 'react-router-dom'

function UsersCard() {
    return (
        <>
            <div className="col-md-3 grid-margin stretch-card">
            <div className="card" style={{color: "black"}}>
              <div className="card-body">
                <Link to="/all-players">
                  <div className="d-flex justify-content-between pb-2 align-items-center">
                    <h2 className="font-weight-semibold mb-0">Users</h2>
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
        </>
    )
}

export default UsersCard
