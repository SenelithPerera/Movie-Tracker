import React, { useState } from 'react'
import { Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { FilmTile } from '../../filmTile/FilmTile'
import { CustomDatePicker } from '../datePicker/DatePicker'
import { RatingOption } from '../ratingOption/Rating'



const mockData = {
    "adult": false,
    "backdrop_path": "/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg",
    "genre_ids": [
        28,
        878,
        27
    ],
    "id": 766507,
    "original_language": "en",
    "original_title": "Prey",
    "overview": "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
    "popularity": 9839.591,
    "poster_path": "/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
    "release_date": "2022-08-02",
    "title": "Prey",
    "video": false,
    "vote_average": 8.1,
    "vote_count": 2894
}

export const MovieLogForm = ({ movie }) => {

    const [isDateVisible, setDateVisible] = useState(false);
    const [watchDate, setWatchDate] = useState(new Date());

    const initialValues = {
        date: new Date(),
        review: '',
        rating: 0
    }

    const handleOnsubmit = (values) => {
        console.log(values)
    }

    return (
        <Row>
            <Col lg="4" md="4">
                <FilmTile data={movie} isLarge={true} isUnresponsive />
            </Col>
            <Col lg="8" md="8">
                <h5>I watched</h5>
                <h6>{movie.title}</h6>
                <Formik
                    initialValues={initialValues}
                    validationSchema={yup.object().shape({
                        date: yup.string().required('date is required'),
                        review: yup.string().max(1000, 'Do not exceed 1000 char limit'),
                        rating: yup.number()
                    })} string
                    onSubmit={handleOnsubmit}
                    render={props => (
                        <FormikForm onSubmit={props.handleSubmit}>
                            {console.log('values : ', props.values, watchDate)}
                            <CustomDatePicker
                                name="date"
                                value={props.values.date}
                                onChange={(date) => { props.setFieldValue('date', date.toLocaleDateString("en-US")); setWatchDate(date) }}
                                className="form-control mb-3"
                            />

                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    name='review'
                                    as="textarea"
                                    placeholder="Review"
                                    style={{ height: '100px' }}
                                    onChange={props.handleChange}
                                    value={props.values.review}
                                />
                            </FloatingLabel>
                            <label>Rating</label>
                            <RatingOption name="rating" ratingValue={props.values.rating} setRatingValue={(value) => props.setFieldValue('rating', value)} />
                            <Row><Button type='submit'>Save</Button></Row>
                        </FormikForm>
                    )}
                />

            </Col>
        </Row >
    )
}
