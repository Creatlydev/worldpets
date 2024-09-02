import { saveIcon } from './icons.js'

export function createRandomDog({ srcDog, idDog }) {
  const gridItem = document.createElement('div')
  gridItem.classList.add('gallery__gridItem')

  const img = document.createElement('img')
  img.classList.add('gallery__gridImg')
  img.src = srcDog
  img.setAttribute('data-id', idDog)

  const btnSave = document.createElement('button')
  btnSave.classList.add('gallery__gridBtn')
  btnSave.id = 'btnSave'
  btnSave.innerHTML = saveIcon

  gridItem.appendChild(img)
  gridItem.appendChild(btnSave)
  return gridItem
}
