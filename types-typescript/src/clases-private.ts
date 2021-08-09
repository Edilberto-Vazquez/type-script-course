export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  // Propiedades
  private id: number;
  private title: string;
  private orientation: PhotoOrientation;

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
  private id: number;
  private title: string;
  private pictures: Picture[];

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

// picture.id = 100; // private
// picture.title = "Another title"; // private
// album.title = "Personal Activities"; // private
console.log("album", album);
