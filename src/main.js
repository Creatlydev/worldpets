import { moveIndicatorTab } from "./changeTab.js"
import { buttonsEvents } from "./events.js"
import { loadRandomDogs } from "./loadRandomDogs.js"
import { forYouTab } from "./nodos.js"



// Initialize
moveIndicatorTab(forYouTab) // Inidicador inicia en seccion for You
loadRandomDogs() // Cargar random dogs para la seccion for You
buttonsEvents() // eventos para los botones de guardar y eliminar un favorito