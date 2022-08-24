import React from 'react'
import { MovieLogger } from '../common/movieLogger/MovieLogger'

export const Navigation = () => {
  return (
    <div style={{float:'right', display: 'flex', color: 'white', marginLeft: '33em'}}>
        <ul>
          <li>Senelith</li>
        </ul>
        <ul>
          <li>Films</li>
        </ul>
        <ul>
          <li>Lists</li>
        </ul>
        <ul>
          <li><MovieLogger /></li>
        </ul>

    </div>

  )
}
