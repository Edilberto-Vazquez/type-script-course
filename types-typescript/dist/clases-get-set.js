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
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    // Comportamiento
    toString() {
        return `[id: ${this.id}, tittle: ${this.title}, orientation: ${this.orientation}]`;
    }
}
class ALbum {
    constructor(id, title) {
        this._id = id;
        this._title = title;
        this._pictures = [];
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get pictures() {
        return this._pictures;
    }
    set pictures(pictures) {
        this._pictures = pictures;
    }
    // Comportamiento
    addPicture(picture) {
        this._pictures.push(picture);
    }
}
const album = new ALbum(1, "Personal Pictures");
const picture = new Picture(1, "Sessions", PhotoOrientation.Square);
album.addPicture(picture);
album.addPicture(picture);
console.log("album", album);
// Accediendo a los mienbros publicos
picture.id = 100; // private
picture.title = "Another title"; // private
album.title = "Personal Activities"; // private
console.log("album", album);
