"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    };
    const { poder, vision } = avengers;
    console.log(poder.toFixed(2), vision.toUpperCase());
    const printAvengers = (_a) => {
        var { ironman } = _a, args = __rest(_a, ["ironman"]);
        console.log(ironman, args);
    };
    const avengerArr = ['Hawkeye', 'Black widow', 'Spiderman'];
    const avengerArr2 = ['Hawkeye', true, false];
    const [, blackWidow,] = avengerArr;
    const [hawkeye, , spiderman] = avengerArr;
    console.log(blackWidow);
});
(() => {
    const ironman = {
        name: 'ironman',
        weapon: 'Armor suit'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const spiderman = {
        name: 'Spiderman',
        weapon: 'Web shooters'
    };
    const avengers = [ironman, thor, spiderman];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    let name = 'Salome';
    const getName = () => {
        console.log('viejo getName');
    };
});
//# sourceMappingURL=main.js.map