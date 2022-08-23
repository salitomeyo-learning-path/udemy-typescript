(() => {
    const fullName = ( firstName: string, lastName?: string, upper: boolean = false ): string => {
        return ( upper ) ? `${ firstName } ${ lastName || '------' }` :
                            `${ firstName } ${ lastName || '------' }`.toUpperCase();
    }

    const name = fullName('Midoriya', 'Izuku');
    const otherName = fullName('Deku');

    console.log({ name });
    console.log({ otherName });
})()