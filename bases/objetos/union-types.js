"use strict";
(function () {
    var myCustomVariable = 'Salome';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Hulkify']
    };
    console.log(typeof myCustomVariable);
    console.log(typeof myCustomVariable);
})();
