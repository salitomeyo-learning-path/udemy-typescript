"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || '------');
    };
    var name = fullName('Midoriya', 'Izuku');
    var otherName = fullName('Deku');
    console.log({ name: name });
    console.log({ otherName: otherName });
})();
