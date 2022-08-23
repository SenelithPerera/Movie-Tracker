import React from 'react'
import { Table } from 'react-bootstrap'
import { RatingOption } from '../../common/ratingOption/Rating'

export const Diary = ({ data }) => {
    return (
        <Table striped hover variant="dark">
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Day</th>
                    <th>Film</th>
                    <th>Rating</th>
                    <th>Review</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>January</td>
                    <td>23</td>
                    <td>Prey</td>
                    <td><RatingOption /></td>
                    <td>heatbreaking</td>
                </tr>
                <tr>
                    <td>January</td>
                    <td>23</td>
                    <td>Prey</td>
                    <td><RatingOption /></td>
                    <td>heatbreaking</td>
                </tr>
                <tr>
                    <td>January</td>
                    <td>23</td>
                    <td>Prey</td>
                    <td><RatingOption /></td>
                    <td>heatbreaking</td>
                </tr>
            </tbody>
        </Table>
    )
}
