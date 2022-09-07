import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext';
import { isAuthenticated } from '../../utility/Utility';

import { MovieLogger } from '../common/movieLogger/MovieLogger'

export const Navigation = ({ setSessionModalOpen }) => {
  const history = useHistory();
  const { auth } = useAuth();
  return (
    <div style={{ float: 'right', display: 'flex', color: 'white', marginLeft: '33em' }}>
      <ul className='nav-menu'>
        {auth ? (
          <li onClick={() => history.push(`/profile/senelith`)}>Senelith</li>
        ) : (
          <>
            <li onClick={() => setSessionModalOpen({ modal: 'signIn', open: true })}>sign in</li>
            <li onClick={() => setSessionModalOpen({ modal: 'signUp', open: true })}>sign up</li>
          </>
        )}
        <li>Films</li>
        <li>Lists</li>
        {auth && (
          <li><MovieLogger /></li>
        )}
      </ul>
    </div>

  )
}
