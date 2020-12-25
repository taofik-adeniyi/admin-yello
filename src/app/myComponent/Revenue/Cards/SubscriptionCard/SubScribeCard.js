import React, { Component } from "react"
import {Link} from 'react-router-dom'
import  commaNumber from 'comma-number'

class SubScribeCard extends Component {
  
  render() {
    const {totalAmount, totalTwoMonthAmount, totalWeekAmount, totalMonthAmount, todayAmount} = this.props
    return (
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Subscription Summary </h4>
            <p className="card-description">
              <Link to="/revenue/subscription">
                Click here for more details 
                {/* {username} {" "} */}
                {/* {isAutheticated? 'is Autheticated': 'is Un Autheticated'} */}
                <i className="mdi mdi-arrow-right"></i>
              </Link>
              {/* <button onClick={logIn}>logIn</button>
              <button onClick={logOut}>logOut</button> */}
            </p>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Day Range </th>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-1"> Today's Subscription </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td align="right"> ₦{todayAmount} </td>
                  </tr>
                  <tr>
                    <td className="py-1"> Subscription's in the Past Week </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td align="right"> ₦{commaNumber(totalWeekAmount)} </td>
                  </tr>
                  <tr>
                    <td className="py-1"> Subscription's in the Past Month </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td align="right"> ₦{totalMonthAmount} </td>
                  </tr>
                  <tr>
                    <td className="py-1">
                      {" "}
                      Subscription's in the Past Two Month{" "}
                    </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td align="right"> ₦{totalTwoMonthAmount} </td>
                  </tr>
                  <tr>
                    <td className="py-1"> Total Subscription's </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td align="right"> ₦{commaNumber(totalAmount)} </td>
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
SubScribeCard.defaultProps = {
  totalAmount: 0,
  totalWeekAmount: 0,
  totalMonthAmount: 0,
  totalTwoMonthAmount: 0,
  todayAmount: 0
}
export default SubScribeCard;
