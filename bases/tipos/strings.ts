(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Volcan Negro`;

    console.log(`I'm ${ batman }`);

    console.log( batman[10]?.toUpperCase() || 'No esta presente');
})()
