import { AppState } from "../AppState.js"

export class Pokemon {
  constructor(data) {
      this.name = data.name,
      this.nickName = data.nickName,
      this.img = data.img,
      this.weight = data.weight,
      this.types = data.types,
      this.creatorId = data.creatorId,
      this.creator = data.creator
      this.url = data.url
  }

  get pokemonList(){
    return /*html*/ `
    <p class="px-1" onclick="app.PokeApiController.setActive('${this.url}')">${this.name}</p>
    `
  }
  static activeTemplate(){
    return /*html*/ `
    <div class="col- my-3">
      <div class="card elevation-1">
        <img class="rounded-top" src="${
// @ts-ignore
        AppState.activePokemon.sprites.front_default}" alt="">
        <div class="card-body">
          <p class="fs-4 mb-2 d-flex justify-content-between">
            <span>
            ${
// @ts-ignore
            AppState.activePokemon.name} 
            </span>
            <span>
              
            </span>
          </p>
          <div class="d-flex align-items-center justify-content-between border-top pt-2">
              
              <button onclick="app.SandboxPokemonController.catchPokemon()" class="btn btn-primary">Catch</button>
          
              <div>
                <span class="text-capitalize"></span>
                <img class="rounded seller-picture" src="${
// @ts-ignore
                AppState.activePokemon.sprites.back_default}" alt="">
              </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}
