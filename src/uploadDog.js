import { API_KEY, BASE_URL } from './constants.js'
import { uploadForm, modal } from './nodos.js'
import { saveFavouriteDog } from './saveFavouriteDog.js'

async function uploadDog() {
  const formData = new FormData(uploadForm)
  console.log('SUBIENDO...')

  const res = await fetch(`${BASE_URL}images/upload`, {
    method: 'POST',
    headers: {
      'X-API-KEY': API_KEY
    },
    body: formData
  })
  await res.json().then(data => {
    saveFavouriteDog(data.id)
  })
}

export function eventUploadPhoto() {
  uploadForm.querySelector('button').addEventListener('click', () => {
    uploadDog()
    modal.classList.toggle('open')
    document.body.classList.toggle('no-scroll')
  })
}
