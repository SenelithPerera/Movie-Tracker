import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FilmTile } from '../filmTile/FilmTile'
import { Post } from '../post/Post'

export const LandingPage = () => {
    return (
        <div className='content'>
            <h1>Welcome back, senelith. kcmldkcmldkfc</h1>
            <Row>
                <Col sm="7" md="7" lg="8" xl="8">
                    <textarea placeholder='say what you want' />
                    <Post />
                </Col>
                <Col sm="5" md="5" lg="4" xl="4">
                    <div>
                        {[1, 2, 3, 4, 5, 6, 7].map((movie, index) => {
                            return (
                                <FilmTile />
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </div>
    )
}
