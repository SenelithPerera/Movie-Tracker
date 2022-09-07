import isNil from 'lodash/isNil';
import { LocalStorageHelper } from "../helpers/LocalStorageHelper";

export const isAuthenticated = () => {
    // if(isNil(localStorage.getItem(LocalStorageHelper.mt_access_token))) {
    //     return false;
    // }
    return true;
}