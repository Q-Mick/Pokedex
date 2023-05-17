import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { setHTML } from "../utils/Writer.js";
import { pokedexApi } from "./AxiosService.js";

class PokeApiService{
  async setActive(url) {
    const res = await pokedexApi(url)
    console.log(res)
    AppState.activePokemon = res.data
    console.log(AppState.activePokemon);
    setHTML('pokemon-card', Pokemon.activeTemplate())
  }
  async getPokemonFromPokeApi() {
    const res = await pokedexApi.get('/pokemon')
    // console.log("this is the results", res.data.results)
    AppState.pokemon = res.data.results.map(p => new Pokemon(p))
    console.log(AppState.pokemon);

  }

}

export const pokeApiService = new PokeApiService()