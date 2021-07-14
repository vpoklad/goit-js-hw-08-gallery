const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
  gallery: document.querySelector('ul.js-gallery'),
  link: document.querySelector('.gallery__link'),
  image: document.querySelector('.gallery__image'),
  lightBox: document.querySelector('.js-lightbox'),
  lightBoxImage: document.querySelector('.lightbox__image'),
  lightBoxOverlay: document.querySelector('.lightbox__overlay'),
  closeButtonModal: document.querySelector('button[data-action="close-lightbox"]')
}

const galleryItem = galleryItems.map((element) => {
  return `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${element.preview}">
          <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
          />
        </a>
      </li>`
});

refs.gallery.innerHTML = galleryItem.join('');




refs.gallery.addEventListener('click', onGalleryClick);
refs.closeButtonModal.addEventListener('click', galleryModalClose);
refs.lightBoxOverlay.addEventListener('click', onOverlayClick);


function onGalleryClick(event) {  
  event.preventDefault();
  galleryModalOpen();
// *здесь сделать замыкание

  refs.lightBoxImage.setAttribute('src', event.target.dataset.source)
  // console.log(event.target.dataset.source);

};

function onModalKeyPress(event) {
  console.log(event.code);
  if (event.code === 'Escape') {
    galleryModalClose()
  }
}

function onOverlayClick(event) {
  if (event.currentTarget === event.target) {
    galleryModalClose()
  }
}

function galleryModalOpen() {
  refs.lightBox.classList.add('is-open')
  document.addEventListener('keydown', onModalKeyPress)
}



function galleryModalClose() {
  refs.lightBox.classList.remove('is-open')
  refs.lightBoxImage.setAttribute('src', '')
  document.removeEventListener('keydown', onModalKeyPress)
}