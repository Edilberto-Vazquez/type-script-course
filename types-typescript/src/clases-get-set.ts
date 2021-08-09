export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  // Propiedades
  private _id: number;
  private _title: string;
  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
  }

  get id() {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation;
  }

  // Comportamiento
  public toString() {
    return `[id: ${this.id}, tittle: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class ALbum {
  // Propiedades
  private _id: number;
  private _title: string;
  private _pictures: Picture[];

  public constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this._pictures = [];
  }

  get id() {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get pictures() {
    return this._pictures;
  }

  set pictures(pictures: Picture[]) {
    this._pictures = pictures;
  }

  // Comportamiento
  public addPicture(picture: Picture) {
    this._pictures.push(picture);
  }
}

const album: ALbum = new ALbum(1, "Personal Pictures");
const picture: Picture = new Picture(1, "Sessions", PhotoOrientation.Square);
album.addPicture(picture);
album.addPicture(picture);
console.log("album", album);

// Accediendo a los mienbros publicos
picture.id = 100; // private
picture.title = "Another title"; // private
album.title = "Personal Activities"; // private
console.log("album", album);
