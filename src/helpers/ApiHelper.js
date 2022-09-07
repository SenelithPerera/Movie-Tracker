import axios from 'axios';
import isNil from 'lodash/isNil';
import isUndefined from 'lodash/isUndefined';
import { LocalStorageHelper } from './LocalStorageHelper';

// axios.defaults.headers.common.Authorization = `token`;
axios.defaults.headers.common.api_key = '0ba84819c867aac6b14df6e7d27a120a';

axios.interceptors.request.use(
    request => {
        return request;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(response => {
    if (isNil(localStorage.getItem(LocalStorageHelper.mt_user_data))) {
        if (response.data && !isNil(response.data.user)) {
            localStorage.setItem(LocalStorageHelper.mt_user_data, JSON.stringify(response.data.user))
            console.log(response.data.user)
        }
    }

    if (isNil(localStorage.getItem(LocalStorageHelper.mt_access_token))) {
        if (response.data && !isNil(response.data.id)) {
            localStorage.setItem(LocalStorageHelper.mt_access_token, response.data.id)
        }
    }
    if (isNil(localStorage.getItem(LocalStorageHelper.mt_user_id))) {
        if (response.data && !isNil(response.data.user) && !isNil(response.data.user.username)) {
            localStorage.setItem(LocalStorageHelper.mt_access_token, response.data.user.username)
        }
    }
    if (isNil(localStorage.getItem(LocalStorageHelper.mt_user_id))) {
        if (response.data && !isNil(response.data.user) && !isNil(response.data.user.id)) {
            localStorage.setItem(LocalStorageHelper.mt_access_token, response.data.user.id)
        }
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

/**
 * get method
 * @param {*} url
 * @param {*} config
 */
export const get = (url, config) => axios.get(url, config);

/**
 * post method
 * @param {*} url
 * @param {*} body
 * @param {*} config
 */
export const post = (url, body, config) => axios.post(url, body, config);

/**
 * put method
 * @param {*} url
 * @param {*} body
 * @param {*} config
 */
export const put = (url, body, config) => axios.put(url, body, config);

/**
 * patch method
 * @param {*} url
 * @param {*} body
 * @param {*} config
 */
export const patch = (url, body, config) => axios.patch(url, body, config);

/**
 * delete method
 * @param {*} url
 * @param {*} body
 * @param {*} config
 */
export const del = (url, body, config) => axios.delete(url, config, body);