import React from 'react'
import { Avatar } from 'antd';

import './ProfileHeader.css'
import { ProfileHeaderTabs } from './ProfileHeaderTabs';

export const ProfileHeader = () => {
    return (
        <section className='profile-header'>
            <div className='profile-summary'>
                <Avatar size={100} className='profile-avatar'>U</Avatar>
                <span>Senelith</span>
                <div className='profile-stats'>
                    <h4 class="profile-statistic statistic">
                        <a href="/senelith/films/">
                            <span class="value">7</span>
                            <span class="definition">Films</span>
                        </a>
                    </h4>
                    <h4 class="profile-statistic statistic">
                        <a href="/senelith/films/">
                            <span class="value">7</span>
                            <span class="definition">This Year</span>
                        </a>
                    </h4>
                    <h4 class="profile-statistic statistic">
                        <a href="/senelith/films/">
                            <span class="value">7</span>
                            <span class="definition">Collections</span>
                        </a>
                    </h4>
                    <h4 class="profile-statistic statistic">
                        <a href="/senelith/films/">
                            <span class="value">7</span>
                            <span class="definition">Following</span>
                        </a>
                    </h4>
                    <h4 class="profile-statistic statistic">
                        <a href="/senelith/films/">
                            <span class="value">7</span>
                            <span class="definition">Followers</span>
                        </a>
                    </h4>
                </div>
            </div>
            <ProfileHeaderTabs />
        </section>
    )
}
