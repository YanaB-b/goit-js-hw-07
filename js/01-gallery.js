import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
  }).join('');
}

galleryRef.addEventListener("click", galleryClick);

let modalGallery;

function ogalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  modalGallery = basicLightbox.create(
    `<img src='${event.target.dataset.source}' width="800" height="600">`,
  
 { onShow : modalGallery =>
  {window.addEventListener("keydown", onEscKeyPress);
},
onclose : modalGallery =>
  {window.removeEventListener("keydown", onEscKeyPres);
},
 }
 );
  function onEscKeyPress(e) {
    if (evt.code === "Escape" && basicLightbox.visible()) {
      modalGallery.close();
    }
  }
  modalGallery.show();
}