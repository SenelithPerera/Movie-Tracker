import React from 'react'
import { ProfileHeader } from '../../components/profile/ProfileHeader'
import { ProfileProvider } from './ProfileContext'

export const Profile = () => {
    return (
        <ProfileProvider>
            <ProfileHeader />
        </ProfileProvider>
    )
}
