// class Lavoratore {
//     reddito:number;
//     codRedd:number;
//     tasseInps:number;
//     tasseIrpef:number;
//     categoria:CategoriaLavoratore;
//     professione
//     constructor(_reddito:number, _categ:CategoriaLavoratore) {
//         this.reddito = _reddito;
//         this.categoria = _categ;
//         switch (_categ) {
//             case CategoriaLavoratore.Professionista:
//                 this.codRedd = 78;
//                 break;
//             case CategoriaLavoratore.Commerciante:
//                 this.codRedd = 40;
//                 break;
//             default:
//                 break;
//         }
//         this.codRedd = 78;
//     }
//     getProfessione() {
//         if(this.categoria != CategoriaLavoratore.Professionista) return
//         return "La professione è "
//     }
// }
// enum CategoriaLavoratore {
//     Professionista,
//     Commerciante,
//     Artigiano
// } 
var Commerciante = /** @class */ (function () {
    function Commerciante(_reddito) {
        this.reddito = _reddito;
        this.codRedd = 40;
        this.tasseInps = 15;
        this.tasseIrpef = 12;
    }
    Commerciante.prototype.getUtileAnnuo = function () {
        var utile = this.reddito * (this.codRedd / 100) + 5;
        return utile;
    };
    Commerciante.prototype.getTasseIrpef = function () {
        return this.getUtileAnnuo() * (this.tasseIrpef / 100);
    };
    Commerciante.prototype.getTasseInps = function () {
        return this.getUtileAnnuo() * (this.tasseInps / 100);
    };
    Commerciante.prototype.getRedditoAnnuoNetto = function () {
        return this.reddito - (this.getTasseIrpef() + this.getTasseInps());
    };
    return Commerciante;
}());
var Professionista = /** @class */ (function () {
    function Professionista(_reddito) {
        this.reddito = _reddito;
        this.codRedd = 78;
        this.tasseInps = 13;
        this.tasseIrpef = 10;
    }
    Professionista.prototype.getUtileAnnuo = function () {
        var utile = this.reddito * (this.codRedd / 100) + 5;
        return utile;
    };
    Professionista.prototype.getTasseIrpef = function () {
        return this.getUtileAnnuo() * (this.tasseIrpef / 100);
    };
    Professionista.prototype.getTasseInps = function () {
        return this.getUtileAnnuo() * (this.tasseInps / 100);
    };
    Professionista.prototype.getRedditoAnnuoNetto = function () {
        return this.reddito - (this.getTasseIrpef() + this.getTasseInps());
    };
    return Professionista;
}());
var Artigiano = /** @class */ (function () {
    function Artigiano(_reddito) {
        this.reddito = _reddito;
        this.codRedd = 34;
        this.tasseInps = 12;
        this.tasseIrpef = 15;
    }
    Artigiano.prototype.getUtileAnnuo = function () {
        var utile = this.reddito * (this.codRedd / 100);
        return utile;
    };
    Artigiano.prototype.getTasseIrpef = function () {
        return this.getUtileAnnuo() * (this.tasseIrpef / 100);
    };
    Artigiano.prototype.getTasseInps = function () {
        return this.getUtileAnnuo() * (this.tasseInps / 100);
    };
    Artigiano.prototype.getRedditoAnnuoNetto = function () {
        return this.reddito - (this.getTasseIrpef() + this.getTasseInps());
    };
    return Artigiano;
}());
////////////////////////////////////////////////////////////////////////
var l1 = new Commerciante(30000); //commerciante
var l2 = new Professionista(25000); //professionista
// function calcolo(a:number, b:number, c:number, d:number, e:number){
//     return a + b * c - d / e
// }
// let x = calcolo(3, 5, 2, 6, 8)
// let y = 13 + 25 * 52 - 36 / 86 
// creaRiga("testo")
// creaRiga("testo1")
// function creaRiga(txt: string) {
//     tr = document.createElement("tr")
//     td = document.createElement("td")
//     td.innerHTML = txt
//     tr.appendChild(td)
//     table.appendChild(tr)
// }
