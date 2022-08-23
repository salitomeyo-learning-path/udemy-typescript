import { PokemonDec } from "./decorators/pokemon-class";

const charmander = new PokemonDec('Charmander');

// (PokemonDec.prototype as any).customName = 'Pikachu'; //lo bloqueamos con el decorador block

console.log(charmander);

charmander.savePokemonToDB(32);
charmander.savePokemonToDB(3322);

charmander.publicApi = 'Buuuu';

