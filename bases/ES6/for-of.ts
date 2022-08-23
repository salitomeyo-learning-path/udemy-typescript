(() => {
    type Avenger = {
        name: string;
        weapon: string;
    }

    const ironman: Avenger = {
        name: 'ironman',
        weapon: 'Armor suit'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const spiderman: Avenger = {
        name: 'Spiderman',
        weapon: 'Web shooters'
    }

    const avengers: Avenger[] = [ironman, thor, spiderman];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})()