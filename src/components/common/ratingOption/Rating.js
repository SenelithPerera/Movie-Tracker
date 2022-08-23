import React from 'react';
import { Rate } from 'antd';

export const RatingOption = ({ setRatingValue, ratingValue }) => <Rate allowHalf onChange={setRatingValue} value={ratingValue} />