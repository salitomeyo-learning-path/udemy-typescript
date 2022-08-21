"use strict";
(function () {
    var error = function (message) {
        if (message.length > 10) {
            throw new Error(message);
        }
        else {
            return 1;
        }
    };
    error('Ayudaaaa!');
})();
