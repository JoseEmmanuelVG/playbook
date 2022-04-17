// Example 6: Modificación de clases
// TRIPULANTE : launchx03224@innovaccion.mx --> JEVG

class Logger {
    constructor (name) {
      this.count = 0
      this.name = name
    }
  
    log (message) {
      this.count++
      console.log('[' + this.name + '] ' + message)
    }
  }
  
  module.exports = new Logger('DEFAULT') // Nuevo objeto instanciado
  module.exports.Logger = Logger // Clase