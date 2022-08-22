"use strict";
(function () {
    var hero = 'Deku';
    function returnName() {
        return hero;
    }
    var activateBatSignal = function () {
        return 'Batisignal activated!';
    };
    console.log(typeof activateBatSignal);
    var heroName = returnName();
})();
