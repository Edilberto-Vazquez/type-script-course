export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  // Propiedades
  public id: number;
  public title: string;
  public orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  // Comportamiento
  public toString() {
    return `[id: ${this.id}, tittle: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class ALbum {
  // Propiedades
  public id: number;
  public title: string;
  public pictures: Picture[];

  public constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }

  // Comportamiento
  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: ALbum = new ALbum(1, "Personal Pictures");
const picture: Picture = new Picture(1, "Sessions", PhotoOrientation.Square);
album.addPicture(picture);
album.addPicture(picture);
console.log("album", album);

// Accediendo a los miembros publicos de las clases

picture.id = 100; // public
picture.title = "Another title"; // public
album.title = "Personal Activities";
console.log("album", album);
