(() => {
    class Avenger {
        name;
        power;

        constructor( name = 'Anonynm', power = 'Secret') {
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger {
        flying;

        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }
    }

    const hulk = new Avenger('Hulk', 'Smash');
    const falcon = new FlyingAvenger('Falcon', 'Dash');

    console.log(hulk);
    console.log(falcon);
})()