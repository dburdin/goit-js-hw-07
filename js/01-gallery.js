import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", handleClickOnGalleryItem);

function handleClickOnGalleryItem(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  createModalWhileClickOnItem(e.target.dataset.source);
}
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
         </a>
    </div>`;
    })
    .join("");
}

function createModalWhileClickOnItem(largeImg) {
  const instance = basicLightbox.create(
    ` <img src="${largeImg}" width="800" height="600">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", closeModalOnEsc);
        function closeModalOnEsc(e) {
          if (e.code === "Escape") {
            instance.close();
            document.removeEventListener("keydown", closeModalOnEsc);
          }
        }
      },
    }
  );

  instance.show();
}
