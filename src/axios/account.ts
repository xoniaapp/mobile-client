import api from './api';

function loginfunc(UserCredentials: any) {
    const response = {
        headers: {},
        data: {},
        status: 0
    };
    api.post('/account/login', UserCredentials).then(res => {
        response.status = res.status;
        response.data = res.data;
        response.headers = res.headers;
    });
    return response;
}

const exports = {
    login: loginfunc
};

export default exports;