import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url:string) => {
    if(!url) return noImage;
    return url.indexOf("media/") > -1 ? url.replace("media/", "media/crop/600/400/") : url;
}

export default getCroppedImageUrl