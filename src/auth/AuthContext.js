import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import isNull from 'lodash/isNull';
import { LocalStorageHelper } from '../helpers/LocalStorageHelper';

const AuthContext = createContext({
    auth: null,
    setAuth: () => { },
    userData: null,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(true);
    const [accessToken, setAccessToken] = useState(8298239283)
    const [userData, setUserData] = useState({username: 'senelith'});

    useEffect(() => {
        // if (!isNull(localStorage.getItem(LocalStorageHelper.mt_access_token))) {
        //     // setAccessToken()
        //     setAuth(true);
        //     setUserData(localStorage.getItem(LocalStorageHelper.mt_user_data))
        //     setAccessToken(localStorage.getItem(LocalStorageHelper.mt_access_token))
        // } else {
        //     // window.location.replace('/')
        //     // window.location.href = '/'
        // }
        //   setAccessToken(localStorage.getItem())
        // console.log('auth  ::: ', localStorage.getItem(LocalStorageHelper.mt_access_token), localStorage.getItem(LocalStorageHelper.mt_user_data))
    }, [])


    useEffect(() => {
        if (auth && accessToken) {
            localStorage.setItem(LocalStorageHelper.mt_access_token, accessToken);
            localStorage.setItem(LocalStorageHelper.mt_user_data, userData);
        }
    }, [auth, accessToken, userData]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, userData, setAccessToken, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
