import ImageService from "../services/ImageService.js";

let _is = new ImageService()

function _drawImage() {
    document.body.style.backgroundImage = _is.Image.url
}

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
    constructor() {
        _is.addSubscriber('image', _drawImage)
        _is.getImage()
    }

}

