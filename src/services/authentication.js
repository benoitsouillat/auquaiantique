import http from '../helpers/http.js';

const login = userCredentials => {
    return http.post('/login', userCredentials)
        .then(response => response.data)
        .catch(error => {
            console.error(error.response.data.message)
        });
};

export const authenticationService = {
    login
};