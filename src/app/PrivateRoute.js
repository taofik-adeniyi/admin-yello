import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const getAuthToken = () => {
  const checkToken = sessionStorage.getItem('token')
  return checkToken
}

const isAuthenticated = getAuthToken()

function PrivateRoute(props) {
  if (isAuthenticated) {
    return(
      <Route exact={props.exact} path={props.path}>
        {props.children}
      </Route>
    );
  }else return (
    <Redirect to="/not-found" />
  )
}

export default PrivateRoute;