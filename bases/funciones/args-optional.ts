(() => {
    const fullName = ( firstName: string, lastName?: string ): string => {
        return `${ firstName } ${ lastName || '------' }`
    }

    const name = fullName('Midoriya', 'Izuku');
    const otherName = fullName('Deku');

    console.log({ name });
    console.log({ otherName });
})()