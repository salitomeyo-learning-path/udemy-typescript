"use strict";
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel']
    };
    // flash = {
    //     group: 'Justice league'
    // }
    flash = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super strenght'],
        // getName() {
        //     return this.name;
        // }
    };
    var spiderman = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel']
    };
    spiderman = {
        name: 'Clark kent',
        powers: ['Super strenght'],
        getName: function () {
            return this.name;
        }
    };
    console.log({ flash: flash });
    console.log({ spiderman: spiderman });
})();
