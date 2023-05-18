import { AppState } from "../AppState.js";
import { MyPokemon } from "../models/MyPokemon.js";
import { Pokemon } from "../models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";


class SandboxPokemonService{
  async catchPokemon() {
    // @ts-ignore0
    AppState.myPokemon = new MyPokemon(AppState.activePokemon)
    console.log(AppState.myPokemon);
    const res = await sandboxApi.post('/api/pokemon', AppState.activePokemon)
    console.log("results --->", res);
  }

  async getMyPokemon() {
    const res = await sandboxApi.get('api/pokemon')
    console.log('my pokemon', res.data)
    AppState.myPokemon = res.data.map(p => new MyPokemon(p))
  }
}


export const sandboxPokemonService = new SandboxPokemonService()