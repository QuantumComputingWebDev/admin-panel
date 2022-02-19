import {fetchUtils} from "react-admin";

const apiUrl = `${window.location.origin}/api/v1`;
const httpClient = fetchUtils.fetchJson;

const staffDataProvider = {
    getList: (resource) => {
        const url = `${apiUrl}/person/staff/`;

        return httpClient(url).then(({headers, json}) => ({
            data: json,
            total: json.length
        }));
    },
    create: (resource, params) => {
        return httpClient(`${apiUrl}/person/`, {
            method: 'POST',
            body: JSON.stringify({...params.data, position: 1}),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id},
        }))
    },
}

export default staffDataProvider;