import { API_KEY, ENDPOINT_FAVOURITES } from './constants.js'
import { Toast } from './toast.js'

export async function saveFavouriteDog(idImage) {
  await fetch(ENDPOINT_FAVOURITES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': API_KEY
    },
    body: JSON.stringify({
      image_id: idImage
    })
  }).then(() => {
    Toast.fire({
        icon: 'success',
        title: 'Perro agregado a favoritos'
    })
  })
}
