import React from 'react'
import { ProfileHeader } from '../../components/profile/ProfileHeader'
import { ProfileProvider } from './ProfileContext'

export const Profile = () => {
    return (
        <ProfileProvider>
            <div className='content'>
                <ProfileHeader />
            </div>
        </ProfileProvider>
    )
}
