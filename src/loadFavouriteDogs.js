import { API_KEY, ENDPOINT_FAVOURITES } from './constants.js'
import { createFavoriteDog } from './createFavouriteDog.js'
import { initObserver } from './infinityScroll.js'
import { createLoader } from './loader.js'
import { favouriteContent, sectionFavourite } from './nodos.js'

export async function loadFavouriteDogs({ limit = 10, index = 0 } = {}) {
  const loader = createLoader()
  sectionFavourite.appendChild(loader)

  const res = await fetch(
    `${ENDPOINT_FAVOURITES}?limit=${limit}&page=${index}`,
    {
      headers: {
        'X-API-KEY': API_KEY
      }
    }
  )
  const data = await res.json()

  const fragment = document.createDocumentFragment()
  data.forEach((dog) => {
    const dataImg = {
      srcDog: dog.image.url,
      idDog: dog.id
    }
    fragment.appendChild(createFavoriteDog(dataImg))
  })
  loader.replaceWith(fragment)
  if (!(data.length === 0)) {
    initObserver(
      () => loadFavouriteDogs({ index: index + 1 }),
      favouriteContent
    )
  }
}
