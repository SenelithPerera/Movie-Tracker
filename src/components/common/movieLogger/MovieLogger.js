import React, { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import debounce from 'lodash/debounce';
import { CommonModal } from '../CommonModal/CommonModal';
import { CustomSelect } from '../customSelect/CustomSelect';
import { FilmTile } from '../../filmTile/FilmTile';
import { CustomDatePicker } from '../datePicker/DatePicker';
import { MovieLogForm } from './MovieLogForm';

const options = [{ value: 1, label: 'prey' }, { value: 2, label: 'Topgun' }]


export const MovieLogger = () => {
    const [isMovieLoggerModalOpen, setMovieLoggerModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isMovieSelected, setIsMovieSelected] = useState(false);
    const [movieListOptions, setMovieListOptions] = useState([])



    const handleMovieSelected = (movie) => {
        console.log(movie)
        setSelectedMovie(movie)
        setIsMovieSelected(true)
    }

    const searchMovie = debounce((value) => {
        console.log(value)
    }, 1000)

    return (
        <>
            <Button onClick={() => setMovieLoggerModalOpen(true)}>+ Log</Button>
            {isMovieLoggerModalOpen && (
                <CommonModal
                    title={'Add movie to your list...'}
                    className=""
                    show={isMovieLoggerModalOpen}
                    closeModal={() => setMovieLoggerModalOpen(false)}
                    size="lg"
                    centered
                >
                    {!isMovieSelected ? (
                        <CustomSelect
                            options={options}
                            onChange={(data) => handleMovieSelected(data)}
                            value={selectedMovie}
                            onKeyDown={(event) => searchMovie(event.target.value)}
                        />
                    ) : (
                        <MovieLogForm />
                    )}
                </CommonModal>
            )}
        </>
    )
}
