import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { DataVisualizer } from './dataVisualizer/DataVisualizer'
import { Diary } from './diary/Diary'
import { WatchedFilmList } from './films/WatchedFilmList'
import { Lists } from './lists/Lists'
import { ReviewList } from './reviews/ReviewList'
import { WatchList } from './watchList/WatchList'


export const ProfileHeaderTabs = () => {
    return (
        <Tabs
            defaultActiveKey="films"
            className="mb-3"
        >
            <Tab eventKey="films" title="Films">
                <WatchedFilmList />
            </Tab>
            <Tab eventKey="diary" title="Diary">
                <Diary />
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
                <ReviewList />
            </Tab>
            <Tab eventKey="watch-list" title="Watch List">
                <WatchList />
            </Tab>
            <Tab eventKey="lists" title="Lists">
                <Lists />
            </Tab>
            <Tab eventKey="visualizer" title="Data Visualizer">
                <DataVisualizer />
            </Tab>
        </Tabs>
    )
}
