import { API_KEY, ENDPOINT_DELETE_FAVOURITE } from './constants.js'
import { Toast } from './toast.js'

export async function deleteFavouriteDog(imageId) {
  await fetch(ENDPOINT_DELETE_FAVOURITE(imageId), {
    method: 'DELETE',
    headers: {
      'X-API-KEY': API_KEY
    }
  }).then(() => {
    Toast.fire({
        icon: 'success',
        title: 'Perro eliminado de favoritos'
    })
  })
}
