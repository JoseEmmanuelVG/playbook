// Example 3: Diferentes formas de exportar funciones
// TRIPULANTE : launchx03224@innovaccion.mx --> JEVG

/*
  Esto también es la declaración de una función

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger("Heeey!")
*/

module.exports = (message) => {
    console.log(`info: ${message}`)
  }