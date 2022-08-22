"use strict";
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel']
    };
    var spiderman = {
        name: 'Barry Allen',
        powers: ['Super speed', 'Time travel'],
        getName: function () {
            return this.name;
        }
    };
    console.log({ flash: flash });
    console.log({ spiderman: spiderman });
})();
