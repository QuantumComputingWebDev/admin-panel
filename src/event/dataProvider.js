import { fetchUtils } from 'react-admin';

const apiUrl = `${window.location.origin}/api/v1`;
const httpClient = fetchUtils.fetchJson;

const eventDataProvider = {
    getList: (resource) =>
        httpClient(`${apiUrl}/event/`).then(({ headers, json }) => {
            console.log(json)
            const res = []
            for(let day of json) {
                for(let sp of day.speechs) {
                    res.push({...sp, date: day.date})
                }
            }
            console.log(res)
            return {
                data: res,
                total: res.length
            }
        }),
    create: (resource, params) => {
        return httpClient(`${apiUrl}/event/speech/${params.data.date.replaceAll('-', '/')}/`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        }))
    },

    update: (resource, params) => {
        return httpClient(`${apiUrl}/event/speech/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        }))
    }
};

export default eventDataProvider;
