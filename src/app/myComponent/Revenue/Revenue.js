import React, { Component } from 'react'
import './revenue.css'
import GoBack from '../GoBack/GoBack'
import SubScribeCard from './Cards/SubscriptionCard/SubScribeCard'
import RegisterCard from './Cards/RegistrationCard/RegisterCard'
import GameCard from './Cards/GameCard/GameCard'
import DepositCard from './Cards/DepositCard/DepositCard'
import {SubScriberProvider} from '../../myContext/SubScriberContext'

class Revenue extends Component {
    render() {
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
                
                <SubScriberProvider>
                    <SubScribeCard />
                </SubScriberProvider>

                <GameCard />

                <DepositCard />

            </div>
        )
    }
}

export default Revenue