import { deleteIcon } from './icons.js'

export function createFavoriteDog({ srcDog, idDog }) {
  const gridItem = document.createElement('div')
  gridItem.classList.add('gallery__gridItem')

  const img = document.createElement('img')
  img.classList.add('gallery__gridImg')
  img.src = srcDog
  img.setAttribute('data-id', idDog)

  const btnSave = document.createElement('button')
  btnSave.classList.add('gallery__gridBtn')
  btnSave.id = 'btnDelete'
  btnSave.innerHTML = deleteIcon

  gridItem.appendChild(img)
  gridItem.appendChild(btnSave)
  return gridItem
}
