"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('Midoriya', 'Izuku');
    console.log({ name: name });
})();
