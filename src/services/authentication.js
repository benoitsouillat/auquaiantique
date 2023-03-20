import http from '../helpers/http.js';

const login = userCredentials => {
    return http.post('/login', userCredentials)
        .then(response => response.data)
        .catch(error => {
            console.error(error)
        });
};

export const authenticationService = {
    login
};