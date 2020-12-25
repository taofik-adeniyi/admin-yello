import { render } from "node-sass";
import React, { Component } from "react";

const AuthContext = React.createContext();


export class AuthProvider extends Component{
  state = {
    isAutheticated: false
  }

  render() {
    const { isAutheticated } = this.state
    return (
      <AuthContext.Provider value={{
        isAutheticated
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
};

export default AuthContext