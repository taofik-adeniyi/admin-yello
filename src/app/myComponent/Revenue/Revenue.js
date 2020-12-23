import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import { Button, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './revenue.css'
import GoBack from '../GoBack/GoBack'
import SubScribeCard from './Cards/SubscriptionCard/SubScribeCard'
import RegisterCard from './Cards/RegistrationCard/RegisterCard'
import GameCard from './Cards/GameCard/GameCard'
import DepositCard from './Cards/DepositCard/DepositCard'
import SubscriberContext from '../../myContext/SubScriberContext'

class Revenue extends Component {
    render() {
        // console.log(this.context);
        const {username, isAutheticated, logIn, logOut, totalAmount, total} = this.context
        return (
            <div>
                <div className="row">
                </div>
                <div className="page-header">
                    <h3 className="page-title px-3"> 
                        <GoBack />
                        Revenue Overview
                    </h3>
                </div>
                
                <RegisterCard />

                <SubScribeCard 
                    username={username} 
                    isAutheticated={isAutheticated}
                    logIn={logIn}
                    logOut={logOut}
                    totalAmount={totalAmount}
                    total={total}
                />

                <GameCard />

                <DepositCard />

            </div>
        )
    }
}
Revenue.contextType = SubscriberContext

export default Revenue