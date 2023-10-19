import { galleryItems } from "./gallery-items.js";

const container = document.querySelector(".gallery");

function createImageCard(array) {
  const markup = array
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class = "gallery__link" href ="${preview}">
   <img
   class= "gallery__image"
   href ="${original}"
   src="${preview}"
   data-source="${original}"
   alt="${description}"
 />
</a> </li>`;
    })
    .join("");
  return markup;
}

container.insertAdjacentHTML("beforeend", createImageCard(galleryItems));

container.addEventListener("click", onClick);
function onClick(evt) {
  evt.preventDefault();
  const galleryImg = evt.target.classList.contains("gallery__image");

  if (!galleryImg) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`
  );

  instance.show();
}
