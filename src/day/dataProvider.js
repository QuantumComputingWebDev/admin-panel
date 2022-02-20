import { fetchUtils } from 'react-admin';

const apiUrl = `${window.location.origin}/api/v1`;
const httpClient = fetchUtils.fetchJson;

const dayDataProvider = {
    getList: (resource) =>
        httpClient(`${apiUrl}/event/`).then(({ headers, json }) => ({
            data: json,
            total: json.length
        })),
    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.data.date.replaceAll('-', '/')}`).then(({ json }) => ({
            data: json,
        })),
    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.data.date.replaceAll('-', '/')}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    create: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}/${params.data.date.replaceAll('-', '/')}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        }))
    },
    delete: (resource, params) => {
        httpClient(`${apiUrl}/${resource}/${params.previousData.date.replaceAll('-', '/')}`, {
            method: 'DELETE',
        }).then(({json}) => ({data: json}))
    },
};

export default dayDataProvider;
