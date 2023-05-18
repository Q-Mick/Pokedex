import { AppState } from "../AppState.js"

export class MyPokemon{
constructor(data) {
  this.name = data.name || ""
  this.nickName = data.nickName || ""
  this.img = data.img || ""
  this.weight = data.weight || ""
  this.types = data.types || ""
  this.creatorId = data.creatorId || {}
  
}
get myPokemonList(){
  return /*html*/ `
  <p class="px-1" onclick="app.SandboxPokemonController.setActive()">${this.name}</p>
  `
}
}