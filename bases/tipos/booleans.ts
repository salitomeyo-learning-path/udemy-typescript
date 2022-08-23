(() => {
    let isSuperman: boolean = true;
    let isBatman: boolean = false;

    console.log({isSuperman, isBatman});

    isSuperman = true && false;
    console.log({ isSuperman })

    isBatman = (isSuperman) ? true : false;
    console.log({ isBatman });
})()