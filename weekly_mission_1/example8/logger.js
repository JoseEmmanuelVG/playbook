// Example 8: EcmaScript Export Default
// TRIPULANTE : launchx03224@innovaccion.mx --> JEVG

/*
  export default nos permite exportar esta clase e importara

  import MyLogger from './logger.js'
*/

export default class Logger {
    constructor (name) {
      this.name = name
    }
  
    log (message) {
      console.log(`[${this.name}] ${message}`)
    }
  }