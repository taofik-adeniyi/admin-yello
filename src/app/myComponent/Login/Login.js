import React, { Component } from "react";
import { Form } from "react-bootstrap";
import AuthContext from "../../myContext/AuthContext";


class Login extends Component {
  componentDidMount() {
    console.log('login componenet');
    // if (sessionStorage.getItem('token')) {
    //   window.location.href = "/dashboard"
    // } else {
    //   window.location.href = "/"
    // }
  }
  

  render() {
    // if (sessionStorage.getItem('token')) {
    //   window.location.href = "/dashboard"
    // } else {
    //   window.location.href = "/"
    // }
    const { emailChange, onSubmit, passwordChange, error, passwordError, emailError, email, password} = this.context

    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3" 
                onSubmit={onSubmit}
                >
                  <div className="col-lg-12">
                    <Form.Group className="d-flex search-field">
                      <Form.Control
                        onChange={emailChange}
                        type="email"
                        value={email}
                        placeholder="Email"
                        size="lg"
                        className="h-auto"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      />
                    </Form.Group>
                  </div>
                  <div className="row" style={{textAlign: 'center', color: 'red', marginLeft: 20}}>
                    {emailError ? emailError: null}
                  </div>
                  <div className="col-lg-12">
                    <Form.Group className="d-flex search-field">
                      <Form.Control
                        onChange={passwordChange}
                        type="password"
                        value={password}
                        placeholder="Password"
                        size="lg"
                        className="h-auto"
                      />
                    </Form.Group>
                  </div>
                  <div className="row" style={{textAlign: 'center', color: 'red', marginLeft: 20}}>
                    {passwordError ? passwordError: null}
                  </div>
                  <div className="mt-3">
                    <button type="submit"
                      className="btn btn-block btn-warning btn-lg font-weight-medium auth-form-btn"
                      onClick={onSubmit}
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div> {error ? error : null} </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.contextType = AuthContext
export default Login;
