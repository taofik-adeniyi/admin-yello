import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const GoBack = () => {
        const history = useHistory()

        const goBack = () => {
            history.goBack()
        }
        
        return (
            <>
              <Button variant="warning" onClick={goBack}>Back</Button>&nbsp;&nbsp;
            </>
        )
}

export default GoBack
