"use strict";
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // var numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    // var numbers = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    numbers.push(22);
    var villains = ['Green Goblin', 'Sandman', 'Electro'];
    villains.forEach(function (villain) { return console.log(villain.toUpperCase()); });
    // numbers.push(true);
    console.log(numbers);
})();
