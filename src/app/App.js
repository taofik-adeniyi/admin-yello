import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import SettingsPanel from './shared/SettingsPanel';
import Footer from './shared/Footer';
import Login from './user-pages/Login';
import Dashboard from './dashboard/Dashboard';
import Trivia from './basic-ui/Buttons';
import WonTrivia from './basic-ui/Dropdowns';
import Prediction from './form-elements/BasicElements';
import WonPrediction from './basic-ui/WonPrediction';
import AllPlayers from './tables/BasicTable';
// import Mdi from './icons/Mdi';
// import ChartJs from './charts/ChartJs';
// import Error404 from './error-pages/Error404';
// import Error500 from './error-pages/Error500';
// import Register1 from './user-pages/Register';
import PageLayout from './Layout/PageLayout'

class App extends Component {
  // componentDidMount() {
  //   this.onRouteChanged();
  // }
  render () {
    // let navbarComponent = !this.state.isFullPageLayout ? <Navbar/> : '';
    // let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar/> : '';
    // let SettingsPanelComponent = !this.state.isFullPageLayout ? <SettingsPanel/> : '';
    // let footerComponent = !this.state.isFullPageLayout ? <Footer/> : '';
    return (
      <Switch>
          {/* <Route to="/" component={ Dashboard } /> */}
          <Route exact path="/" component={ Login } />
          <Route exact path="/dashboard" >
            <PageLayout>
              <Dashboard />
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
              <WonTrivia />
            </PageLayout>
          </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default (App)
