import React, { useState, createContext } from 'react'

export const TriviaContext = createContext()

export const TriviaProvider = (props) => {
    return (
        <TriviaContext.Provider value={'Taofik'}>
            { props.children }
        </TriviaContext.Provider>
    )
}