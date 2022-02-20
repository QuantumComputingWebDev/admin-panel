import {apiUrl} from "../settings";

export async function uploadFile({rawFile, isGallery}) {
    if(!rawFile)
        return null;
    const formData  = new FormData();
    formData.append('photo', rawFile)
    const res = await fetch(`${apiUrl}/media/?gallery=${isGallery}`, {
        method: "POST",
        body: formData
    })
    return await res.json()
}