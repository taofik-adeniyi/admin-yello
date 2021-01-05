import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Trans } from 'react-i18next';

export const Compo = withRouter(({ history, location }) =>{

})

class SignOut extends Component {
    render() {
        const signOutHandler = () => {
            const sessionName = sessionStorage.getItem('isLoggedIn')
            // console.log('is loggine = ', sessionName)
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('role');
            this.props.history.push("/")
            // alert('Log out Succesfull')
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
