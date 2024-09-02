export const API_KEY =
  'live_RdGTEx39vo23sstwGcT4fl82uKQacGuWVuQaA0lvFKMbUqkXOpfMhWLt8HAIiJDx'
export const BASE_URL = 'https://api.thedogapi.com/v1/'
// ENDPOINT RANDOM IMAGES
export const ENDPOINT_RANDOM_DOGS = `${BASE_URL}images/search`
export const ENDPOINT_FAVOURITES = `${BASE_URL}favourites`
export const ENDPOINT_DELETE_FAVOURITE = (imageId) =>
  `${BASE_URL}favourites/${imageId}`
export const ENDPOINT_POST_DOG = ''
