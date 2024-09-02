import { deleteFavouriteDog } from './deleteFavouriteDog.js'
import { galleryWrapper } from './nodos.js'
import { saveFavouriteDog } from './saveFavouriteDog.js'

export function buttonsEvents() {
  galleryWrapper.addEventListener('click', (event) => {
    const target = event.target.closest('.gallery__gridBtn')
    if (!target) return
    const idButton = target.id
    if (idButton === 'btnSave') {
      saveFavouriteDog()
    } else {
      deleteFavouriteDog()
    }
  })
}
