(() => {
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    } 

    const { poder, vision } = avengers;

    console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvengers = ( { ironman, ...args }: Avengers) => {
        console.log(ironman, args);
    }



    const avengerArr: string[] = ['Hawkeye', 'Black widow', 'Spiderman'];
    const avengerArr2: [ string, boolean, boolean ] = ['Hawkeye', true, false];


    const [ , blackWidow, ] = avengerArr;

    const [ hawkeye , , spiderman ] = avengerArr;

    console.log(blackWidow)


})