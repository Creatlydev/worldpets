import { loadFavouriteDogs } from './loadFavouriteDogs.js'
import { favouriteContent } from './nodos.js'

const $ = (el) => document.querySelector(el)

// TABS
const $tabsOptions = $('.tabs__options')

export const moveIndicatorTab = (button) => {
  const tabsBox = $tabsOptions.getBoundingClientRect()
  const box = button.getBoundingClientRect()
  $tabsOptions.style.setProperty('--w-indicator', `${box.width}px`)
  $tabsOptions.style.setProperty(
    '--l-indicator',
    `${box.left - tabsBox.left}px`
  )

  const $tabOption = button.closest('.tabs__optionsItem')
  if ($tabOption.classList.contains('active')) return
  document.querySelector('.tabs__optionsItem.active').classList.remove('active')
  $tabOption.classList.add('active')
}

const handleTabs = (event) => {
  const target = event.target.closest('.tabs__optionsButton')
  if (!target) return
  $tabsOptions.style.setProperty('--duration-property', `300ms`)

  changeTab({ id: target.id })
  moveIndicatorTab(target)
}

$tabsOptions.addEventListener('click', handleTabs)

function changeTab({ id }) {
  const button = document.getElementById(id)
  if (button.closest('.tabs__optionsItem.active')) return
  const functions = {
    'favourite-content': loadFavouriteDogs
  }

  const ariaControl = button.getAttribute('aria-controls')
  document
    .querySelectorAll('.gallery')
    .forEach((gallery) => (gallery.style.display = 'none'))
  document.getElementById(ariaControl).style.display = 'block'

  if (favouriteContent.querySelector('.gallery__grid').children.length === 0) {
      functions[ariaControl] && functions[ariaControl]()
  }
}
