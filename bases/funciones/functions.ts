(() => {
    const hero: string = 'Deku';

    function returnName(): string {
        return hero;
    }

    const activateBatSignal = (): string => {
        return 'Batisignal activated!';
    }

    console.log(typeof activateBatSignal);

    const heroName = returnName();

})()