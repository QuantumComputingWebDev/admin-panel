import { fetchUtils } from 'react-admin';
import {uploadFile} from "../media/utils";

const apiUrl = `${window.location.origin}/api/v1`;
const httpClient = fetchUtils.fetchJson;

const dayDataProvider = {
    getList: (resource) =>
        httpClient(`${apiUrl}/event/`).then(({ headers, json }) => {
            return {
                data: json,
                total: json.length
            }
        }),

    update: async (resource, params) => {
        const props = {}
        if(params.data.posterSrc) {
            await uploadFile({rawFile: params.data.posterSrc.rawFile, isGallery: 0})
                .then(({id, src})=>{props.posterId = id})
        }
        const res = (await httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({...params.data, ...props}),
        })).json
        return {
            data: {...params.data, id: res.id},
        }
    },


    create: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}/${params.data.date.replaceAll('-', '/')}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        }))
    },
    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({json}) => ({data: json})),
};

export default dayDataProvider;
