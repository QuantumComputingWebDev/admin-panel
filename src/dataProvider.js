import { fetchUtils } from 'react-admin';

const apiUrl = `${window.location.origin}/api/v1`;
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
    getList: (resource) => {
        const url = `${apiUrl}/${resource}/`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: json.length
        }));
    },

    getOne: (resource, params) => {
        if(resource === "event") {
            resource = "event/speech";
        }
        return httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        }))
    },

    getMany: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/`).then(({ json }) => ({
            data: json,
        })),

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    create: (resource, params) => {
        if (resource === "event") {
            return httpClient(`${apiUrl}/${resource}/day/${params.data.date.replaceAll('-', '/')}/`, {
                method: 'POST',
                body: JSON.stringify(params.data),
            }).then(({ json }) => ({
                data: { ...params.data, id: json.id },
            }))
        } else {
            return httpClient(`${apiUrl}/${resource}/`, {
                method: 'POST',
                body: JSON.stringify(params.data),
            }).then(({ json }) => ({
                data: { ...params.data, id: json.id },
            }))
        }
    },

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),
};

export default dataProvider;
