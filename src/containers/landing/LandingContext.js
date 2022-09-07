import React, { createContext, useState, useEffect } from 'react'

export const LandingContext = createContext();

export const LandingProvider = (props) => {
    return (
        <LandingContext.Provider value={{}}>
            {props.children}
        </LandingContext.Provider>
    )
}