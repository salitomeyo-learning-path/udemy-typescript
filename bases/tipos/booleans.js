"use strict";
(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log({ isSuperman: isSuperman, isBatman: isBatman });
    isSuperman = true && false;
    console.log({ isSuperman: isSuperman });
    isBatman = (isSuperman) ? true : false;
    console.log({ isBatman: isBatman });
})();
