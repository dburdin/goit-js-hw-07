import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image" src="${preview}" alt="${description}"
            />
         </a>
    </div>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionsDelay: "250",
});
