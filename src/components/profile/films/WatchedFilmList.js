import React from 'react'
import { FilmTile } from '../../filmTile/FilmTile'


// mockdata
import * as mockData from '../../../helpers/MockData';

export const WatchedFilmList = (data) => {
    return (
        <div>
            {mockData.popularMovies.results.map((movie, index) => {
                return (
                    <FilmTile data={movie} isLarge={false} />
                )
            })}
        </div>
    )
}
