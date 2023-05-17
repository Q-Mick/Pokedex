import { AppState } from "../AppState.js"
import { pokeApiService } from "../services/PokeApiService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawPokemon() {
  let template = ""
  AppState.pokemon.forEach((p) => {
    template += p.pokemonList
  })
  setHTML("pokemon-list", template)
}

export class PokeApiController {
  constructor() {
    console.log("Hello from PokeAPI controller, lets get some Pokemon data")
    this.getPokemonFromPokeApi()
    AppState.on("pokemon", _drawPokemon)
  }

  async getPokemonFromPokeApi() {
    try {
      await pokeApiService.getPokemonFromPokeApi()
    } catch (error) {
      Pop.error(error)
    }
  }
  async setActive(url) {
    try {
      await pokeApiService.setActive(url)
    } catch (error) {
      Pop.error(error)
    }
  }
}
