function printToConsole( constructor: Function ) {
    console.log(constructor);
}

const printToConsoleConditional = ( print: boolean = false ): Function => {
    return (print)? printToConsole : () => {};
}

const blockPrototype = function( constructor: Function ) {
    Object.seal( constructor )
    Object.seal( constructor.prototype )
}

function CheckValidPokemonId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ){
        const originalMethod = descriptor.value;
        
        descriptor.value = ( id: number ) => {
            if (id < 1 || id > 800 ) {
                return console.error('El id del pokemon debe estar entre 1 y 800')
            } else {
                return originalMethod(id)
            }
        }
        // descriptor.value = () => {console.log('hola mundo')};
        console.log({ target, propertyKey, descriptor })
    }
}

function readonly( isWrittable: boolean = true ): Function {
    return function( target: any, propertyKey: string ) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return 'Salome';
            },
            set( this, val ) {
                // console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWrittable,
                    enumerable: false
                })
            }
        }

        return descriptor
    }
}

@blockPrototype
@printToConsoleConditional(true)
export class PokemonDec {
    @readonly()
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemonToDB( id: number ) {
        console.log(`${ id } Pokemon saved in database`);
    }
}
