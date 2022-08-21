"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
