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
        console.log(params)
        return httpClient(`${apiUrl}/person/`, {
            method: 'POST',
            body: JSON.stringify({...params.data, position: 1}),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id},
        }))
    },
    update: (resource, params) => {
        console.log('update', params)
        const formData  = new FormData();
        formData.append("blah blah", params.data.src.rawFile)
        fetch(`${apiUrl}/media/?gallery=0`, {
            method: "POST",
            body: formData
        })
            .then(res=>res.json())
            .then(({src, id})=>(
                httpClient(`${apiUrl}/person/${params.id}`, {
                    method: 'PUT',
                    body: JSON.stringify({...params.data, photoId: id, position: 1}),
                }).then(({ json }) => ({
                    data: { ...params.data, id: json.id},
                }))
            ))
    },
}

export default staffDataProvider;