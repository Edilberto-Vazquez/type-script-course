export {};

// Funcion para mostrar una fotografia

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
  console.log(
    `[title: ${picture.title}, date:${picture.date}, orientation: ${picture.orientation}]`
  );
}

let myPic = {
  title: "Test Title",
  date: "2020-03",
  orientation: PhotoOrientation.Landscape,
};

showPicture(myPic);
showPicture({
  title: "Test Title",
  date: "2020-12",
  orientation: PhotoOrientation.Portrait,
  //   extra: "test" //Error
});

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const pic = { title: "Default", date: "2020-03" };
  if (config.title) {
    pic.title = config.title;
  }
  if (config.date) {
    pic.date = config.date;
  }

  return pic;
}

let picture = generatePicture({});
console.log("picture", picture);
picture = generatePicture({ title: "travel pic" });
console.log("picture", picture);
picture = generatePicture({ title: "travel pic", date: "2021-06" });
console.log("picture", picture);

// Interfaz: Usuario

interface User {
  readonly id: number; // solo lectura
  username: string;
  isPro: boolean;
}

let user: User;
user = { id: 10, username: "Edilberto", isPro: true };
console.log("user", user);
user.username = "María";
// user.id = 20; // Error
console.log("user", user);
