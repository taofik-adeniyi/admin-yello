import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
// import Login from './user-pages/Login';
import Login from "./myComponent/Login/Login";
import Dashboard from "./myComponent/Dashboard/Dashboard";
import Trivia from "./myComponent/Trivia/Alltrivia";
import Wontrivia from "./myComponent/Trivia/Wontrivia";
import Prediction from "./myComponent/Prediction/Allprediction";
import WonPrediction from "./myComponent/Prediction/Wonprediction";
import AllPlayers from "./myComponent/Users/Users";
import Revenue from "./myComponent/Revenue/Revenue";
import PageLayout from "./Layout/PageLayout";
import Winning from "./myComponent/Revenue/Winning/Winning";
import Gamesplayed from "./myComponent/Revenue/Gamesplayed/Gamesplayed";
import Registration from "./myComponent/Revenue/Registration/Registration";
import Deposit from "./myComponent/Revenue/Deposit/Deposit";
import GamesPlayedFilter from "./myComponent/GamesPlayedFilter/GamesPlayedFilter";
import WinningFilter from "./myComponent/WinningFilter/WinningFilter";
import Subscription from "./myComponent/Revenue/Subscription/Subscription";
import SubScriberContext, {
  SubScriberProvider,
} from "./myContext/SubScriberContext";
import ErrorPage from "./myComponent/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./myContext/AuthContext";

class App extends Component {
  render() {
    const show = false;
    return (
      <Switch>
        <Route exact path="/">
          <AuthProvider>
            <Login />
          </AuthProvider>
        </Route>

        <Route exact path="/not-found" component={ErrorPage} />

        <PrivateRoute exact path="/revenue/games-played">
          <PageLayout>
            <Gamesplayed />
          </PageLayout>
        </PrivateRoute>

        <PrivateRoute exact path="/revenue/deposit">
          <PageLayout>
            <Deposit />
          </PageLayout>
        </PrivateRoute>

        <PrivateRoute exact path="/revenue/winning">
          <PageLayout>
            <Winning />
          </PageLayout>
        </PrivateRoute>

        <PrivateRoute exact path="/revenue/registration">
          <PageLayout>
            <Registration />
          </PageLayout>
        </PrivateRoute>

        <PrivateRoute exact path="/revenue/subscription">
          <PageLayout>
            <Subscription />
          </PageLayout>
        </PrivateRoute>

        <PrivateRoute exact path="/dashboard">
          <PageLayout>
            <Dashboard />
          </PageLayout>
        </PrivateRoute>

        <PrivateRoute exact path="/revenue">
          <PageLayout>
            <SubScriberProvider>
              <Revenue />
            </SubScriberProvider>
          </PageLayout>
        </PrivateRoute>

        <PrivateRoute exact path="/all-players">
          <PageLayout>
            <AllPlayers />
          </PageLayout>
        </PrivateRoute>

        <PrivateRoute exact path="/all-prediction">
          <PageLayout>
            <Prediction />
          </PageLayout>
        </PrivateRoute>

        <PrivateRoute exact path="/won-prediction">
          <PageLayout>
            <WonPrediction />
          </PageLayout>
        </PrivateRoute>

        <PrivateRoute exact path="/all-trivia">
          <PageLayout>
            <Trivia />
          </PageLayout>
        </PrivateRoute>

        <PrivateRoute exact path="/won-trivia">
          <PageLayout>
            <Wontrivia />
          </PageLayout>
        </PrivateRoute>

        <PrivateRoute exact path="/games-played/listings">
          <PageLayout>
            <GamesPlayedFilter />
          </PageLayout>
        </PrivateRoute>

        <PrivateRoute exact path="/winnings/listings">
          <PageLayout>
            <WinningFilter />
          </PageLayout>
        </PrivateRoute>

        <Redirect to="not-found" />
      </Switch>
    );
  }
}

export default App;
