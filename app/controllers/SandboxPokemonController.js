import { AppState } from "../AppState.js"
import { sandboxApi } from "../services/AxiosService.js"
import { sandboxPokemonService } from "../services/SandboxPokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"



export class SandboxPokemonController{
  constructor(){
    // console.log("Hello from the Sandbox pokemon controller");


  }

  async catchPokemon(){
    try {
      sandboxPokemonService.catchPokemon()
    } catch (error) {
      Pop.error(error)
    }
    
}
}