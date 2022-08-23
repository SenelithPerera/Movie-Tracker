import * as ApiHelper from '../helpers/ApiHelper';

const request = requestToExecute => {
    // if (checkSessionExpireStatus() && tokenExpiredStatus === null) {
    //     localStorageConfig.setSingleData(
    //         LocalStorageHelper.SMP_TOKEN_EXPIRED_STATUS,
    //         true
    //     );
    //     window.location.reload(true);
    // }
    return requestToExecute.catch(err => {
        handleRequestFailure(err);
    });
};

const handleRequestFailure = error => {
    const { response } = error;
    if (response && response.status === 401) {
        console.log('unauthorized');
        //   handleUnauthorized();
        throw response.status;
    } else if (response && response.data) {
        throw response.data;
    } else {
        if (response === undefined) {
            // handleUnauthorized();
            if (error.message === "Network Error") {
                console.log(error.message)
            }
        }
        throw new Error(error);
    }
};

export const get = (url, config = {}) => request(ApiHelper.get(url, config));

export const post = (url, body, config) => request(ApiHelper.post(url, body, config));

export const put = (url, body, config) => request(ApiHelper.put(url, body, config));

export const patch = (url, body, config) => request(ApiHelper.patch(url, body, config));

export const del = (url, body, config) => request(ApiHelper.del(url, body, config));

// export const putWithoutAuth = (url, body, config) => request(ApiHelper.putWithoutAuth(url, body, config));