import React, { Component } from "react"
import {Link} from 'react-router-dom'
import  commaNumber from 'comma-number'
import SubscriberContext from '../../../../myContext/SubScriberContext'
import {Naira} from '../../../../../assets/utilities/utils'

class SubScribeCard extends Component {
  
  render() {
    const {totalAmount, totalWeekAmount, totalTwoMonthAmount, totalMonthAmount, totalTodayAmount} = this.context
    // console.log('subscribers', this.context);
    return (
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Subscription Summary </h4>
            <p className="card-description">
              <Link to="/revenue/subscription">
                Click here for more details 
                <i className="mdi mdi-arrow-right"></i>
              </Link>
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
                    <td align="right"> {Naira()}{commaNumber(totalTodayAmount)} </td>
                  </tr>
                  <tr>
                    <td className="py-1"> Subscription's in the Past Week </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td align="right"> {Naira()}{commaNumber(totalWeekAmount)} </td>
                  </tr>
                  <tr>
                    <td className="py-1"> Subscription's in the Past Month </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td align="right"> {Naira()}{commaNumber(totalMonthAmount)} </td>
                  </tr>
                  <tr>
                    <td className="py-1">
                      {" "}
                      Subscription's in the Past Two Month{" "}
                    </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td align="right"> {Naira()}{commaNumber(totalTwoMonthAmount)} </td>
                  </tr>
                  <tr>
                    <td className="py-1"> Total Subscription's </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td align="right"> {Naira()}{commaNumber(totalAmount)} </td>
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
  totalTodayAmount: 0
}
SubScribeCard.contextType = SubscriberContext
export default SubScribeCard;
