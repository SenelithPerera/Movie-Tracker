import React, { createContext, useState } from 'react'

export const ProfileContext = createContext();

export const ProfileProvider = (props) => {
    return (
        <ProfileContext.Provider
            value={{

            }}
        >{props.children}</ProfileContext.Provider>
    )
}
