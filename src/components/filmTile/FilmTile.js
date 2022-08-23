import React from 'react'
import {useHistory} from 'react-router-dom'
import { EndPointsHelper } from '../../helpers/ApiEndPointsHelper';

export const FilmTile = ({ data, isLarge }) => {
  const history = useHistory();
  console.log(data.original_title.replace(/\s/g, '-'))
  return (
    <div className={isLarge ? 'film-title-lg' : 'film-title-sm'} onClick={() => history.push(`/film/${data.original_title.replace(/\s/g, '-')}`)}>
      <img width={isLarge ? '150px' : '70px'} height={isLarge ? '225px': '105px'} src={EndPointsHelper.imgBaseUrl.concat(data.poster_path)} alt={data.original_title} ></img>
    </div>
  )
}
