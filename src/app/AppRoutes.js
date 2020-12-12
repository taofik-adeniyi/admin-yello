import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Trivia = lazy(() => import('./basic-ui/Buttons'));
const WonTrivia = lazy(() => import('./basic-ui/Dropdowns'));

const Prediction = lazy(() => import('./form-elements/BasicElements'));
const WonPrediction = lazy(() => import('./basic-ui/WonPrediction'));

const AllPlayers = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/all-trivia" component={ Trivia } />
          <Route path="/won-trivia" component={ WonTrivia } />

          <Route path="/all-prediction" component={ Prediction } />
          <Route path="/won-prediction" component={ WonPrediction } />


          <Route path="/all-players" component={ AllPlayers } />

          <Route path="/icons/mdi" component={ Mdi } />

          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;