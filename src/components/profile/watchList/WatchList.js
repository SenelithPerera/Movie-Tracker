import React from 'react'

import * as mockData from '../../../helpers/MockData';
import { FilmTile } from '../../filmTile/FilmTile';


export const WatchList = () => {
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
