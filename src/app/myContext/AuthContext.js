import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const AuthContext = React.createContext();


export class AuthProvider extends Component{
  state = {
    isAutheticated: false,
    token: '',
    username: '',
    password: '',
    email: '',
    emailError: '',
    error: '',
    passwordError: ''
  }
  
  componentDidMount() {
    // this.handleAuth()
  }
  
  handleAuth = () => {
    const token = sessionStorage.getItem('token')
    if(!token){
      window.location.href = "/";
    }else {
      window.location.href = "/dashboard"
    }
  }


  

  loginfetch = async (parameters) => {
    try {
    // console.log("Posting",parameters, "to login endpoint");
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/users/v1/auths/login`,
      {
        method: "POST",
        headers: {
          "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify(parameters)
      }
    );

    const data = await response.json();
    console.log('wrong inputs', data.data);
    const authtoken = data.data.token
    const authemail = data.data.user.email
    const authrole = data.data.user.roleName
    
    if(authtoken) {
      sessionStorage.setItem("token", authtoken)
      sessionStorage.setItem("email", authemail)
      sessionStorage.setItem("role", authrole)
      window.location.href = "/dashboard"
    }else {
      this.setState({
        error: data.error
      })
      return <Redirect to="/" />
    }
    } catch (error) {
      this.setState({
        error: "Email or Password or Server error"
      })
    }

  }
  onSubmit = (e) => {
    e.preventDefault()
    if(this.state.email == "" && this.state.password == "") {
        this.setState({
          emailError: 'Type in your email',
          passwordError: 'Type in password'
        })
    }else if (this.state.email !== "" && this.state.password !== "") {
      const loginBody = {
        email: this.state.email,
        password: this.state.password,
      }
      this.loginfetch(loginBody)
    }
    else{
      this.setState({
        error: "Invalid Username or Email"
      })
    }
  }

  emailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  passwordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {

    const { isAutheticated, username, token, password, email, emailError, error, passwordError } = this.state
    const { emailChange, passwordChange, onSubmit, signOutAuth, handleAuth, loginfetch} = this

    return (
      <AuthContext.Provider value={{
        isAutheticated, username, email, token, password, error, passwordError,
        emailChange, passwordChange, onSubmit, signOutAuth, handleAuth, loginfetch
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
};

export default AuthContext