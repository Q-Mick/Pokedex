import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { SandboxPokemonController } from "./controllers/SandboxPokemonController.js";

export const router = [
  {
    path: '',
    controller: SandboxPokemonController
  },
  // {
  //   path: '#/about',
  //   controller: AboutController
  // }
]