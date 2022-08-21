(() => {
    // enum audioLevel {
    //     min,
    //     medium,
    //     max
    // }

    enum audioLevel {
        min = 1,
        medium,
        max = 20,
    }

    let currentAudio = audioLevel.medium;
    console.log( currentAudio );
    
    currentAudio = audioLevel.max;
    console.log( currentAudio );

    
    console.log( audioLevel );
})()