"use strict";
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return 'El mundo esta salvado'; };
    var myfunction;
    myfunction = 10;
    console.log(myfunction);
    myfunction = addNumber;
    console.log(myfunction(1, 3));
    myfunction = greet;
    console.log(myfunction('Salome'));
    myfunction = saveTheWorld;
    console.log(myfunction());
    var otherFunction;
    otherFunction = addNumber;
});
