import { deleteFavouriteDog } from './deleteFavouriteDog.js'
import { btnShowModal, galleryWrapper, modal, overlay, sectionFavourite, sectionForYou } from './nodos.js'
import { saveFavouriteDog } from './saveFavouriteDog.js'

export function buttonsEvents() {
  galleryWrapper.addEventListener('click', (event) => {
    const target = event.target.closest('.gallery__gridBtn')
    if (!target) return
    const idButton = target.id
    const galleryGridItem = target.closest('.gallery__gridItem')
    const idImage = galleryGridItem.querySelector('img').dataset.id
    if (idButton === 'btnSave') {
      saveFavouriteDog(idImage)
      sectionForYou.removeChild(galleryGridItem)
    } else {
      deleteFavouriteDog(idImage)
      sectionFavourite.removeChild(galleryGridItem)
    }
  })
}

export function modalEvents() {
  btnShowModal.addEventListener('click', () => {
    modal.classList.toggle('open')
    document.body.classList.toggle('no-scroll')

    overlay.addEventListener('click', () => {
      modal.classList.toggle('open')
      document.body.classList.toggle('no-scroll')
    }, {
      once: true
    })
  })
}