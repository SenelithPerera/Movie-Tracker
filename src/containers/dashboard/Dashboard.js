import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { FilmTile } from '../../components/filmTile/FilmTile';
import { Post } from '../../components/post/Post';
import { PostTextArea } from '../../components/post/PostTextArea';
import { DashboardProvider } from './DashboardContext';


// mockdata
import * as mockData from '../../helpers/MockData';

export const Dashboard = () => {
    return (
        <DashboardProvider>
            <div className='content'>
                <h1>Welcome back, senelith. kcmldkcmldkfc</h1>
                <Row>
                    <Col sm="7" md="7" lg="8" xl="8">
                        <PostTextArea />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        
                    </Col>
                    <Col sm="5" md="5" lg="4" xl="4">
                        <div>
                            {mockData.popularMovies.results.map((movie, index) => {
                                console.log(movie)
                                return (
                                    <FilmTile data={movie} isLarge={true} />
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </div>
        </DashboardProvider>
    )
}

