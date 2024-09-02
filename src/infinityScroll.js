import { sentinel } from './nodos.js'

export function initObserver(callback, toObserve) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const isBlockDisplay = toObserve.style.display === 'block'
        if (entry.isIntersecting && isBlockDisplay) {
          callback()
          observer.unobserve(entry.target)
        }
      })
    },
    {
      rootMargin: '80px'
    }
  )
  observer.observe(sentinel)
}
