import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Login from './user-pages/Login';
import Dashboard from './myComponent/Dashboard/Dashboard';
import Trivia from './myComponent/Trivia/Alltrivia';
import Wontrivia from './myComponent/Trivia/Wontrivia';
import Prediction from './myComponent/Prediction/Allprediction';
import WonPrediction from './myComponent/Prediction/Wonprediction';
import AllPlayers from './myComponent/Users/Users';
import Revenue from './myComponent/Revenue/Revenue'
import PageLayout from './Layout/PageLayout'
import Winning from './myComponent/Revenue/Winning/Winning'
import Gamesplayed from './myComponent/Revenue/Gamesplayed/Gamesplayed'
import Registration from './myComponent/Revenue/Registration/Registration'
import Deposit from './myComponent/Revenue/Deposit/Deposit'
import GamesPlayedFilter from './myComponent/GamesPlayedFilter/GamesPlayedFilter';
import WinningFilter from './myComponent/WinningFilter/WinningFilter';
import Subscription from './myComponent/Revenue/Subscription/Subscription';

class App extends Component {
  render () {
    return (
      <Switch>
          <Route exact path="/" component={ Login } />
          
          <Route exact path="/revenue/games-played">
            <PageLayout>
              <Gamesplayed />
            </PageLayout>
          </Route>

          <Route exact path="/revenue/deposit">
            <PageLayout>
              <Deposit />
            </PageLayout>
          </Route>

          <Route exact path="/revenue/winning">
            <PageLayout>
              <Winning />
            </PageLayout>
          </Route>

          <Route exact path="/revenue/registration">
            <PageLayout>
              <Registration />
            </PageLayout>
          </Route>

          <Route exact path="/revenue/subscription">
            <PageLayout>
              <Subscription />
            </PageLayout>
          </Route>

          <Route exact path="/dashboard" >
            <PageLayout>
              <Dashboard />
            </PageLayout>
          </Route>

          <Route exact path="/revenue" >
            <PageLayout>
              <Revenue />
            </PageLayout>
          </Route>

          <Route exact path="/all-players" >
            <PageLayout>
              <AllPlayers />
            </PageLayout>
          </Route>

          <Route exact path="/all-prediction" >
            <PageLayout>
              <Prediction />
            </PageLayout>
          </Route>

          <Route exact path="/won-prediction" >
            <PageLayout>
              <WonPrediction />
            </PageLayout>
          </Route>

          <Route exact path="/all-trivia" >
            <PageLayout>
              <Trivia />
            </PageLayout>
          </Route>

          <Route exact path="/won-trivia" >
            <PageLayout>
              <Wontrivia />
            </PageLayout>
          </Route>

          <Route exact path="/games-played/listings" >
            <PageLayout>
              <GamesPlayedFilter />
            </PageLayout>
          </Route>

          <Route exact path="/winnings/listings" >
            <PageLayout>
              <WinningFilter />
            </PageLayout>
          </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default (App)
