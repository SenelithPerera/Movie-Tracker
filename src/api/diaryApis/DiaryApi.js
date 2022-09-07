import { EndPointsHelper } from '../../helpers/ApiEndPointsHelper';
import * as ApiConnector from '../ApiConnector';

export const addToDiary = async params => {
    try {
        const response = await ApiConnector.post(EndPointsHelper.addMovieToDiary, params);
        return response;
    } catch (exception) {
        console.error('error', exception);
        return exception;
    }
}; 