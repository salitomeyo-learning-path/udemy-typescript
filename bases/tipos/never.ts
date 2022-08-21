(() => {
    const error = ( message: string ):(never|number) => {
        if ( message.length > 10) {
            throw new Error(message);
        }
        else {
            return 1;
        }
    }

    error('Ayudaaaa!');
})()