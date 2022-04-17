// Example 9: Ejercicio
// TRIPULANTE : launchx03224@innovaccion.mx --> JEVG

class Pokemon{
    constructor(name){
      this.name = name
    }
  
    sayHello(){
      console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
  
    sayMessage(msg){
      console.log(`Mi pokemon ${this.name} dice: ${msg}`)
    }
  }
  
  module.exports = Pokemon