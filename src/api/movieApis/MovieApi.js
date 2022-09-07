import { EndPointsHelper } from '../../helpers/ApiEndPointsHelper';
import * as ApiConnector from '../ApiConnector';

export const searchMovie = async params => {
    try {
        const response = await ApiConnector.get(EndPointsHelper.movieSearch, params);
        return response;
    } catch (exception) {
        console.error('error', exception);
        return exception;
    }
}; 