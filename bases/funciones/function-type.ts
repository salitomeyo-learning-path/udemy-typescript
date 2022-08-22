(() => {
    const addNumber = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hola ${ name }`;
    const saveTheWorld = () => 'El mundo esta salvado';

    let myfunction;

    myfunction = 10;
    console.log(myfunction);

    myfunction = addNumber;
    console.log( myfunction(1, 3) );

    
    myfunction = greet;
    console.log( myfunction( 'Salome' ) );

    
    myfunction = saveTheWorld;
    console.log( myfunction() );


    let otherFunction: (y:number, x:number) => number;
    otherFunction = addNumber;

})