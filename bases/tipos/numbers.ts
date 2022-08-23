(() => {
    let avengers: number = 10;

    console.log(avengers);

    const enemies: number = 20;

    if( avengers < enemies ) {
        console.log('We have a problem');
    } else {
        console.log('We are saved');
    }

    avengers = Number('123A');

    console.log({ avengers });
})()