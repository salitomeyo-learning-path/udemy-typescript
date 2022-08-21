(() => {
    let avenger: any = 123;

    let exists;

    avenger = 'Dr. Strange';
    console.log( (avenger as string).charAt(2) );

    avenger = 123.32423;
    console.log( (<number>avenger).toFixed(2) );


})()