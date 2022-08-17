import React from 'react'
import { Navigation } from './Navigation'

export const Header = () => {
    return (
        <header>
            <section>
                {/* <h1 className='site-logo'>Movie Tracker</h1> */}
                <div className='site-logo'>Movie Tracker</div>
            </section>
            <Navigation />
        </header>
    )
}
