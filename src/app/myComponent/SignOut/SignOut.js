import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Trans } from 'react-i18next';

export const Compo = withRouter(({ history, location }) =>{

})

class SignOut extends Component {
    render() {
        const signOutHandler = () => {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('role');
            this.props.history.push("/")
        }
        return (
            <>
                <Trans >
                    <div onClick={signOutHandler}>
                    Sign Out
                    </div>
                </Trans>
            </>
        )
    }
}

export default withRouter(SignOut)
