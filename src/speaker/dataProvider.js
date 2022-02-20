import {fetchUtils} from "react-admin";
import {apiUrl} from "../settings";
import {uploadFile} from "../media/utils";

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
    update: async (resource, params) => {
        const props = {}
        if(params.data.personSrc) {
            await uploadFile({rawFile: params.data.personSrc.rawFile, isGallery: 0})
                .then(({id, src})=>{props.photoId = id})
        }
        if(params.data.posterSrc) {
            await uploadFile({rawFile: params.data.posterSrc.rawFile, isGallery: 0})
                .then(({id, src})=>{props.posterId = id})
        }
        const res = (await httpClient(`${apiUrl}/person/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({...params.data, ...props, position: 0}),
        })).json
        return {
            data: {...params.data, id: res.id},
        }
    },
}

export default speakerDataProvider;