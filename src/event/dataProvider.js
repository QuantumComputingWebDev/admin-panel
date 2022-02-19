import { fetchUtils } from 'react-admin';

const apiUrl = `${window.location.origin}/api/v1`;
const httpClient = fetchUtils.fetchJson;

const eventDataProvider = {
    getList: (resource) => {
        const url = `${apiUrl}/event/`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: json.length
        }));
    },

    create: (resource, params) => {
        return httpClient(`${apiUrl}/event/speech/${params.data.date.replaceAll('-', '/')}/`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        }))
    },
};

export default eventDataProvider;
