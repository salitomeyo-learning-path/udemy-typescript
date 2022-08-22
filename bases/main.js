"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var strenght;
    (function (strenght) {
        strenght[strenght["flash"] = 5] = "flash";
        strenght[strenght["superman"] = 100] = "superman";
        strenght[strenght["batman"] = 1] = "batman";
        strenght[strenght["acuaman"] = 0] = "acuaman";
    })(strenght || (strenght = {}));
    var fuerzaFlash = strenght.flash;
    var fuerzaSuperman = strenght.superman;
    var fuerzaBatman = strenght.batman;
    var fuerzaAcuaman = strenght.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
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
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || '------');
    };
    var name = fullName('Midoriya', 'Izuku');
    var otherName = fullName('Deku');
    console.log({ name: name });
    console.log({ otherName: otherName });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('Midoriya', 'Izuku');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(args.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman: superman });
})();
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
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel']
    };
    flash = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super strenght'],
    };
    var spiderman = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel']
    };
    spiderman = {
        name: 'Clark kent',
        powers: ['Super strenght'],
        getName: function () {
            return this.name;
        }
    };
    console.log({ flash: flash });
    console.log({ spiderman: spiderman });
})();
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
(function () {
    var avenger = 123;
    var exists;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(2));
    avenger = 123.32423;
    console.log(avenger.toFixed(2));
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(22);
    var villains = ['Green Goblin', 'Sandman', 'Electro'];
    villains.forEach(function (villain) { return console.log(villain.toUpperCase()); });
    console.log(numbers);
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log({ isSuperman: isSuperman, isBatman: isBatman });
    isSuperman = true && false;
    console.log({ isSuperman: isSuperman });
    isBatman = (isSuperman) ? true : false;
    console.log({ isBatman: isBatman });
})();
(function () {
    var audioLevel;
    (function (audioLevel) {
        audioLevel[audioLevel["min"] = 1] = "min";
        audioLevel[audioLevel["medium"] = 2] = "medium";
        audioLevel[audioLevel["max"] = 20] = "max";
    })(audioLevel || (audioLevel = {}));
    var currentAudio = audioLevel.medium;
    console.log(currentAudio);
    currentAudio = audioLevel.max;
    console.log(currentAudio);
    console.log(audioLevel);
})();
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
(function () {
    var nada = undefined;
    var isActive = undefined;
    console.log(nada);
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var enemies = 20;
    if (avengers < enemies) {
        console.log('We have a problem');
    }
    else {
        console.log('We are saved');
    }
    avengers = Number('123A');
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = "Linterna Verde";
    var volcanNegro = "Volcan Negro";
    console.log("I'm ".concat(batman));
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
(function () {
    var hero = ['Dr Strange', 100, false];
    hero[1] = 50;
    hero[0] = 'Ironman';
    hero[2] = true;
    console.log(hero);
})();
(function () {
    function callBatman() {
    }
    var callSuperman = function () {
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map