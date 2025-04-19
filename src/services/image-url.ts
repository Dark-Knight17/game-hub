

const getCroppedImageUrl = (url:string) => {
    if(!url) return "";
    return url.indexOf("media/") > -1 ? url.replace("media/", "media/crop/600/400/") : url;
}

export default getCroppedImageUrl