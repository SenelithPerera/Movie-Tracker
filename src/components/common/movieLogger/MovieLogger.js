import React, { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import isNil from 'lodash/isNil';
import debounce from 'lodash/debounce';

import * as MovieApi from '../../../api/movieApis/MovieApi'
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

    const [showSearchResults, setShowSearchResults] = useState(false);



    const handleMovieSelected = (movie) => {
        setSelectedMovie(movie)
        setIsMovieSelected(true)
        setShowSearchResults(false)
    }

    const searchMovie = debounce((value) => {
        setShowSearchResults(true);
        const params = { filter: { name: value } }
        MovieApi.searchMovie({ params })
            .then(response => {
                if (!isNil(response.data)) {
                    setMovieListOptions(response.data.results.map(movie => ({ ...movie, value: movie.id, label: movie.title })))
                } else {
                    setMovieListOptions([])
                }
            })
            .catch(err => console.log(err))

    }, 1000)
    console.log(movieListOptions);
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
                        // <CustomSelect
                        //     options={movieListOptions}
                        //     onChange={(data) => handleMovieSelected(data)}
                        //     value={selectedMovie}
                        //     onKeyDown={(event) => searchMovie(event.target.value)}
                        // />
                        <>
                            <input type="text" onChange={(event) => searchMovie(event.target.value)} />
                            {showSearchResults && <div><ul>{movieListOptions.map(option => <li onClick={() => handleMovieSelected(option)}>{option.label}</li>)}</ul></div>}
                        </>
                    ) : (
                        <MovieLogForm movie={selectedMovie}/>
                    )}
                </CommonModal>
            )}
        </>
    )
}
