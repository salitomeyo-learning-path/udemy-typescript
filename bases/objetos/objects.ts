(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel']
    }

    // flash = {
    //     group: 'Justice league'
    // }

    flash = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super strenght'],
        // getName() {
        //     return this.name;
        // }
    }

    let spiderman: {name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel']
    }

    spiderman = {
        name: 'Clark kent',
        powers: ['Super strenght'],
        getName() {
            return this.name;
        }
    }

    console.log({ flash });
    console.log({ spiderman });
})()