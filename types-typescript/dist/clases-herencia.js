"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//  // ----------Super Clase----------
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    //   set id(id: number) {
    //     this._id = id;
    //   }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
// get y set
// ----------Clase Picture----------
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
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
// Propiedades
Picture.photoOrientation = PhotoOrientation;
// ----------Clase Album----------
class ALbum extends Item {
    constructor(id, title) {
        super(id, title);
        this._pictures = [];
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
// picture.id = 100; // private
picture.title = "Another title"; // private
album.title = "Personal Activities"; // private
console.log("album", album);
// Probar el miembro estatico
console.log("Photoorientation", Picture.photoOrientation.Landscape);
