import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galletyItem = `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image"
    src="${item.preview}" 
    data-source="${item.original}" 
    alt="${item.description}" /></a></div>`;
  gallery.insertAdjacentHTML("beforeend", galletyItem);
});
document.querySelector(".gallery").onclick = (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(
    `
      <img width="1400" height="900" src="${event.target.dataset.source}">
      `
  );
  instance.show();
};
