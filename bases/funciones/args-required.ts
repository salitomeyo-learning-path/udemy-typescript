(() => {
    const fullName = ( firstName: string, lastName: string ): string => {
        return `${ firstName } ${ lastName }`
    }

    const name = fullName('Midoriya', 'Izuku');
    console.log({ name });
})()