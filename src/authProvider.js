import { fetchUtils } from 'react-admin';
import Cookies from 'universal-cookie';

const apiUrl = `${window.location.origin}/api/v1`;
const httpClient = fetchUtils.fetchJson;
const cookies = new Cookies();

export default {
    login: async ({ username, password }) => {
        return await fetch(`${apiUrl}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) }).
            then(async (response) => {
                if (response.status != 200) throw new Error('invalid username or password')
                const data = await response.text();
                cookies.set('auth', data);
                localStorage.setItem('username', username);
                localStorage.setItem('auth', data)
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