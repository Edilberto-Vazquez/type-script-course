"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    // Comportamiento
    toString() {
        return `[id: ${this.id}, tittle: ${this.title}, orientation: ${this.orientation}]`;
    }
}
class ALbum {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    // Comportamiento
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new ALbum(1, "Personal Pictures");
const picture = new Picture(1, "Sessions", PhotoOrientation.Square);
album.addPicture(picture);
album.addPicture(picture);
console.log("album", album);
// Accediendo a los miembros publicos de las clases
// picture.id = 100; // private
// picture.title = "Another title"; // private
// album.title = "Personal Activities"; // private
console.log("album", album);
