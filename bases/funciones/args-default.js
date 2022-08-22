"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        return (upper) ? "".concat(firstName, " ").concat(lastName || '------') :
            "".concat(firstName, " ").concat(lastName || '------').toUpperCase();
    };
    var name = fullName('Midoriya', 'Izuku');
    var otherName = fullName('Deku');
    console.log({ name: name });
    console.log({ otherName: otherName });
})();
