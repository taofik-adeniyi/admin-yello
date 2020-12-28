import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Form } from "react-bootstrap";
// import AuthContext from "../../myContext/Auth";

export const Compo = withRouter(({ history, location }) =>{

})

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: '',
    emailError: '',
    passwordError: ''
  };

  componentDidMount() {
    this.checkForSession()
  }

  checkForSession = () => {
    const sessionCheck = sessionStorage.getItem('isLoggedIn')
    if (sessionCheck) {
      this.props.history.push("/dashboard") 
    }else {
      this.props.history.push("/")
    }
  }

  loginfetch = async (parameters) => {
    // console.log("Posting",parameters, "to login endpoint");
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/users/v1/auths/login`,
      {
        method: "POST",
        headers: {
          "client-id": "live_95274a0b52ae18ea7349",
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify(parameters)
      }
    );

    const daata = await response.json();
    const token = daata.data.token
    
    if(token) {
      sessionStorage.setItem("isLoggedIn", token)
      const adminSessionSet = sessionStorage.getItem("isLoggedIn")
      // const adminSessionGet = localStorage.getItem("yelloStarAdminLogin")
      if(adminSessionSet)  {
        // console.log('session for yellostaradmin is set', adminSessionSet);
        this.props.history.push("/dashboard")
      }else {
           console.log('session not set')
           this.setState({
            error: daata.error
          })
      }
    }else {
      return <Redirect to="/" />
    }
  }
  
  
  
  render() {
   
    const { location, history } = this.props

    const loginFormSubmit = (e) => {
      e.preventDefault()

      if(this.state.email == "" && this.state.password == "") {
          this.setState({
            emailError: 'Type in your email',
            passwordError: 'Type in password'
          })
      }else {
        const loginBody = {
          email: this.state.email,
          password: this.state.password,
        }
        this.loginfetch(loginBody)
      }
    }

    const emailChange = (e) => {
      this.setState({
        email: e.target.value,
      });
    };
    const passwordChange = (e) => {
      this.setState({
        password: e.target.value,
      });
    };

    // const {isAutheticated} = this.context

    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3" onSubmit={loginFormSubmit}>
                  <div className="col-lg-12">
                    <Form.Group className="d-flex search-field">
                      <Form.Control
                        onChange={emailChange}
                        type="email"
                        value={this.state.email}
                        placeholder="Email"
                        size="lg"
                        className="h-auto"
                      />
                    </Form.Group>
                  </div>
                  <div className="row" style={{textAlign: 'center', color: 'red', marginLeft: 20}}>
                    {this.state.emailError ? this.state.emailError: null}
                  </div>
                  <div className="col-lg-12">
                    <Form.Group className="d-flex search-field">
                      <Form.Control
                        onChange={passwordChange}
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        size="lg"
                        className="h-auto"
                      />
                    </Form.Group>
                  </div>
                  <div className="row" style={{textAlign: 'center', color: 'red', marginLeft: 20}}>
                    {this.state.passwordError ? this.state.passwordError: null}
                  </div>
                  <div className="mt-3">
                    <button type="submit"
                      className="btn btn-block btn-warning btn-lg font-weight-medium auth-form-btn"
                      onClick={loginFormSubmit}
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div> {this.state.error ? this.state.error : null} </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Login.contextType = AuthContext
export default withRouter(Login);
