import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap'
import { DashboardContext } from '../../containers/dashboard/DashboardContext';

export const PostTextArea = () => {
    const { handlePostTextAreaChange, handleCancelPostBtnClick, handleSavePostBtnClick, isPostBtnVisible, postText } = useContext(DashboardContext);

    return (
        <div>
            <textarea style={{ width: '100%' }} value={postText} onChange={(e) => handlePostTextAreaChange(e)} placeholder='say what you want' />
            {isPostBtnVisible && (
                <div>
                    <Button onClick={() => handleCancelPostBtnClick()}>Cancel</Button>
                    <Button onClick={() => handleSavePostBtnClick()}>Post</Button>
                </div>
            )}
        </div>
    )
}
