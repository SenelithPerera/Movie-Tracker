import React, { createContext, useState } from 'react'

export const FilmDetailContext = createContext();

export const FilmDetailProvider = (props) => {
    return (
        <FilmDetailContext.Provider
            value={{

            }}
        >{props.children}</FilmDetailContext.Provider>
    )
}
