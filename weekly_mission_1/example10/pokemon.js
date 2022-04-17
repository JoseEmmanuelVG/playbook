// Example 10: Ejercicio
// TRIPULANTE : launchx03224@innovaccion.mx --> JEVG

export default class Pokemon{
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