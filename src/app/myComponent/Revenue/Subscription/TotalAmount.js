import React, { Component } from 'react'
import SubscriberContext from '../../../myContext/SubScriberContext'
import commaNumber from 'comma-number'
import { Naira } from '../../../../assets/utilities/utils'

class TotalAmount extends Component {
    render() {
        const {totalAmount} = this.context

        return (
            <td>
                {Naira()}{commaNumber(totalAmount)}
            </td>
        )
    }
}
TotalAmount.contextType = SubscriberContext
export default TotalAmount
