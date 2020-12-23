import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Form } from "react-bootstrap";

export const Compo = withRouter(({ history, location }) =>{

})

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ''
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
    // console.log('the res error', data.error);
    // console.log('data is', daata);
    // console.log('token is ', daata.data.token)
    const token = daata.data.token
    this.setState({
      error: daata.error
    })
    if(token) {
      sessionStorage.setItem("isLoggedIn", true)
      const adminSessionSet = sessionStorage.getItem("isLoggedIn")
      // const adminSessionGet = localStorage.getItem("yelloStarAdminLogin")
      if(adminSessionSet)  {
        console.log('session for yellostaradmin is set', adminSessionSet);
        this.props.history.push("/dashboard")
      }else {
           console.log('session not set')
      }
    }else {
      return <Redirect to="/" />
    }
  }

  render() {
    const { location, history } = this.props
    const loginFormSubmit = (e) => {
      e.preventDefault()

      const loginBody = {
        email: this.state.email,
        password: this.state.password,
      }
    //   this works=
      // console.log(loginBody) 
      
      this.loginfetch(loginBody)

    //   fetch(`${process.env.REACT_APP_BASE_URL}/users/v1/auths/login`, {
    //     method: "POST",
    //     headers: {
    //       "client-id": "live_95274a0b52ae18ea7349",
    //     },
    //     body: JSON.stringify(loginBody),
    //   })
    //     .then((res) => {
    //       console.log("response: ", res.json());
    //     })
    //     .then((data) => {
    //         console.log(data)
    //     })
    //     .catch((error) => {
    //       console.log("Error:", error);
    //     });
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

    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img
                    src={require("../../../assets/images/logo.svg")}
                    alt="logo"
                  />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3" onSubmit={loginFormSubmit}>
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
                  <div className="mt-3">
                    <button type="submit"
                      className="btn btn-block btn-warning btn-lg font-weight-medium auth-form-btn"
                      onClick={loginFormSubmit}
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div>
                      {/* {this.state.error ? <p>{this.state.error}</p>: ''} */}
                  </div>
                  {/* <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a
                      href="!#"
                      onClick={(event) => event.preventDefault()}
                      className="auth-link text-black"
                    >
                      Forgot password?
                    </a>
                  </div> */}
                  {/* <div className="text-center mt-4 font-weight-light">
                    Don't have an account?{" "}
                    <Link to="/user-pages/register" className="text-primary">
                      Create
                    </Link>
                  </div> */}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
