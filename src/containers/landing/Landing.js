import React from 'react'
import { LandingProvider } from './LandingContext'

export const Landing = () => {
  return (
    <LandingProvider>
        <div className='landing-backdrop'></div>
    </LandingProvider>
  )
}
