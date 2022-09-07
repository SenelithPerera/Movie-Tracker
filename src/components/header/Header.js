import React, { useState } from 'react'
import * as CommonApi from '../../api/commonApis/CommonApi'
import { useHistory } from 'react-router-dom'
import { CommonModal } from '../common/CommonModal/CommonModal'
import { LoginForm } from '../login-signup/LoginForm'
import { SignUpForm } from '../login-signup/SignUpForm'
import { Navigation } from './Navigation'
import { useAuth } from '../../auth/AuthContext'

const initialState = { modal: null, open: false }

export const Header = () => {
    const { setAuth, setUserData, setAccessToken } = useAuth()
    const [isSessionModalOpen, setSessionModalOpen] = useState(initialState)

    const handleOnSubmit = async (value) => {
        // console.log(value, isSessionModalOpen)
        if (isSessionModalOpen.modal == 'signUp') {
            const response = await CommonApi.userSignUp(value);
            // TODO: alert
            setSessionModalOpen({ open: true, modal: 'signIn' })
        } else {
            const response = await CommonApi.userSignIn(value);
            // TODO: alert
            setAccessToken(response.data.id);
            setAuth(true);
            setUserData(response.data.user);
            setSessionModalOpen(initialState)
        }
    }

    const history = useHistory();
    return (
        <>
            <header>
                <section>
                    {/* <h1 className='site-logo'>Movie Tracker</h1> */}
                    <div onClick={() => history.push('/dashboard')} className='site-logo'>Movie Tracker</div>
                    <Navigation setSessionModalOpen={setSessionModalOpen} />
                </section>
            </header>
            {isSessionModalOpen.open && (
                <CommonModal
                    title={isSessionModalOpen.modal == 'signIn' ? 'Sign In' : 'Sign Up'}
                    show={isSessionModalOpen.open}
                    closeModal={() => setSessionModalOpen(initialState)}
                    size="md"
                >
                    {isSessionModalOpen.modal == 'signIn' ?
                        <LoginForm
                            handleOnSubmit={handleOnSubmit}
                            setSessionModalOpen={setSessionModalOpen}
                        />
                        : <SignUpForm
                            handleOnSubmit={handleOnSubmit}
                            setSessionModalOpen={setSessionModalOpen}
                        />}
                </CommonModal>
            )}
        </>
    )
}
