import React, { createContext, useState, useEffect } from 'react'
import * as CommonApi from '../../api/commonApis/CommonApi';

export const DashboardContext = createContext();

export const DashboardProvider = (props) => {
    const [isPostBtnVisible, setPostBtnVisible] = useState(false);
    const [postText, setPostText] = useState('');
    const [postListData, setPostListData] = useState({ list: [], meta: null })

    useEffect(() => {
        // (async () => {
        //     const response = await CommonApi.getPopularMovies({ page: 1 });
        //     console.log(response)
        // })()

    }, [])


    const handlePostTextAreaChange = (event) => {
        // console.log(event.target.value)
        if (event.target.value != "") {
            setPostBtnVisible(true);
        } else {
            setPostBtnVisible(false);
        }
    }

    const handleCancelPostBtnClick = () => {
        setPostBtnVisible(false);
        setPostText('');
    }

    const handleSavePostBtnClick = () => {
        // save post api call

        // setPostListData()
    }

    return (
        <DashboardContext.Provider
            value={{
                handlePostTextAreaChange,
                handleCancelPostBtnClick,
                isPostBtnVisible,
                setPostBtnVisible,
                postText,
                setPostText,
                handleSavePostBtnClick
            }}>
            {props.children}
        </DashboardContext.Provider>
    )
}
