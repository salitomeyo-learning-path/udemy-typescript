(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel']
    }

    let spiderman: Hero = {
        name: 'Barry Allen',
        powers: ['Super speed', 'Time travel'],
        getName() {
            return this.name;
        }
    }

    console.log({ flash });
    console.log({ spiderman });
})()