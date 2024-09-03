import { deleteFavouriteDog } from './deleteFavouriteDog.js'
import { galleryWrapper, sectionFavourite, sectionForYou } from './nodos.js'
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
