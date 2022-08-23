import { getPokemon } from "./generics/get-pokemon";

console.log( getPokemon(2) );

getPokemon(4).then( pokemon => console.log(pokemon.height) )
            .catch( console.error )
            .finally( () => console.log('Fin de pokemon') )