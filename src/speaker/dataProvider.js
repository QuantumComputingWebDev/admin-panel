import {fetchUtils} from "react-admin";

const apiUrl = `${window.location.origin}/api/v1`;
const httpClient = fetchUtils.fetchJson;

const speakerDataProvider = {
    getList: (resource) => {
        const url = `${apiUrl}/person/speaker/`;

        return httpClient(url).then(({headers, json}) => ({
            data: json,
            total: json.length
        }));
    },
    create: (resource, params) => {
        return httpClient(`${apiUrl}/person/`, {
            method: 'POST',
            body: JSON.stringify({...params.data, position: 0}),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id},
        }))
    },

}

export default speakerDataProvider;