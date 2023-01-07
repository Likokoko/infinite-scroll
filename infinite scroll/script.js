const count = 10;
const apiKey = "UzumzEF07w1ki3Ea6bkilNCPB0ag_Ubpn2ORamZe0Mc";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let photoArray = [];
const createPhotoList = document.querySelector(".createPhotoList");

function createPhoto() {
  photoArray.forEach((photo) => {
    console.log(photo);
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    item.appendChild(img);
    createPhotoList.appendChild(item);
  });
}

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();
    createPhoto();
  } catch (error) {}
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
    console.log("load more");
  }
});

getPhotos();
