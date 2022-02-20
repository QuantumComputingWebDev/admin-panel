import { fetchUtils } from 'react-admin';
import staffDataProvider from "./staff/dataProvider";
import speakerDataProvider from "./speaker/dataProvider";
import eventDataProvider from "./event/dataProvider";
import {apiUrl} from "./settings";
import dayDataProvider from "./day/dataProvider";

const httpClient = fetchUtils.fetchJson;

const defaultDataProvider = {
    getList: (resource) => {
        const url = `${apiUrl}/${resource}/`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: json.length
        }));
    },

    getOne: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        }))
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    create: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}/`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        }))
    },

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),
};


const DataProvider = new Proxy(defaultDataProvider, {
    get: function(target, name, receiver) {
        return (resource, params)=>{
            console.log("DATA PROVIDER ", name, resource, params)
            if(name === "getMany")
                name = "getList"
            if(resource === "staff")
                return  (staffDataProvider[name] || defaultDataProvider[name])("person", params)
            if(resource === "speaker")
                return  (speakerDataProvider[name] || defaultDataProvider[name])("person", params)
            if(resource === "event")
                return  (eventDataProvider[name] || defaultDataProvider[name])("event/speech", params)
            if(resource === "day")
                return (dayDataProvider[name] || defaultDataProvider[name])(`event/day`, params)
            return defaultDataProvider[name](resource, params)
        }
    },
    set: function(target, name, value, receiver) {
        return Reflect.set(target, name, value, receiver);
    }
});

export default DataProvider;
