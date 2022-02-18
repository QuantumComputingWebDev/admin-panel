import { fetchUtils } from 'react-admin';
import Cookies from 'universal-cookie';

const apiUrl = 'http://localhost:8888/api/v1';
const httpClient = fetchUtils.fetchJson;
const cookies = new Cookies();

export default {
    login: ({ username, password }) => {
        fetch(`${apiUrl}/auth/login`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username, password})}).
        then((response) => {
            cookies.set('auth', response);
            localStorage.setItem('username', username);
            console.log(response)
            return Promise.resolve();
        }).catch((err) => {
            console.log(err)
            return Promise.reject(err);
        })
    },
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
};