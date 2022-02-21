import { fetchUtils } from 'react-admin';
import {uploadFile} from "../media/utils";

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
        return httpClient(`${apiUrl}/event/speech/${params.data.day}/`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        }))
    },
    update: async (resource, params) => {
        const props = {}
        if(params.data.posterSrc) {
            await uploadFile({rawFile: params.data.posterSrc.rawFile, isGallery: 0})
                .then(({id, src})=>{props.posterId = id})
        }
        const res = (await httpClient(`${apiUrl}/event/speech/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({...params.data, ...props}),
        })).json
        return {
            data: {...params.data, id: res.id},
        }
    },
};

export default eventDataProvider;
