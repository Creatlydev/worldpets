import { ENDPOINT_RANDOM_DOGS } from './constants.js'
import { createRandomDog } from './createRandomDog.js'
import { initObserver } from './infinityScroll.js'
import { createLoader } from './loader.js'
import { forYouContent, sectionForYou } from './nodos.js'

export async function loadRandomDogs({ limit = 20 }= {}) {
  const loader = createLoader()
  sectionForYou.appendChild(loader)

  const res = await fetch(`${ENDPOINT_RANDOM_DOGS}?limit=${limit}`)
  const images = await res.json()

  const fragment = document.createDocumentFragment()
  images.forEach((img) => {
    const dataImg = {
      srcDog: img.url,
      idDog: img.id
    }
    fragment.appendChild(createRandomDog(dataImg))
  })
  loader.replaceWith(fragment)
  initObserver(loadRandomDogs, forYouContent)
}
