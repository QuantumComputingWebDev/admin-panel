import {fetchUtils} from "react-admin";
import {apiUrl} from "../settings";
import {uploadFile} from "../media/utils";

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
    update: async (resource, params) => {
        const props = {}
        if(params.data.src) {
            await uploadFile({rawFile: params.data.src.rawFile, isGallery: 0})
                .then(({id, src})=>{props.photoId = id})
        }
        const res = (await httpClient(`${apiUrl}/person/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({...params.data, ...props, position: 1}),
        })).json
        return {
            data: {...params.data, id: res.id},
        }
    },
}

export default staffDataProvider;