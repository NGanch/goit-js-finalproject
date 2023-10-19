import { galleryItems } from "./gallery-items.js";

const container = document.querySelector(".gallery");

function createImageCard(array) {
  const markup = array
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${preview}">
           <img class="gallery__image"
            src="${original}"
             alt="${description}" />
        </a>
     </li> `;
    })
    .join("");
  return markup;
}

container.insertAdjacentHTML("beforeend", createImageCard(galleryItems));

let gallery = new SimpleLightbox(".gallery a", { captionsData: "alt" });
