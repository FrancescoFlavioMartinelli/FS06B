var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sim = /** @class */ (function () {
    function Sim(_tariffa, _credito, _nChiamate) {
        if (_credito === void 0) { _credito = 0; }
        if (_nChiamate === void 0) { _nChiamate = 0; }
        this.credito = _credito;
        this.nChiamate = _nChiamate;
        this.tariffa = _tariffa;
    }
    Sim.prototype.ricarica = function (r) {
        this.credito += r;
    };
    Sim.prototype.chiamata = function (m) {
        var spesa = this.tariffa * Math.ceil(m);
        if (spesa > this.credito) {
            throw new Error("Credito isufficiente");
        }
        this.nChiamate++;
        this.credito -= spesa;
        console.log("CHIAMATA EFFETTUATA");
    };
    Sim.prototype.azzeraChiamate = function () {
        this.nChiamate = 0;
    };
    Sim.prototype.getNumeroChiamate = function () {
        return this.nChiamate;
    };
    Sim.prototype.numero404 = function () {
        return Math.round(this.credito * 100) / 100;
    };
    return Sim;
}());
var Sim1 = /** @class */ (function (_super) {
    __extends(Sim1, _super);
    function Sim1(_credito, _nChiamate) {
        if (_credito === void 0) { _credito = 0; }
        if (_nChiamate === void 0) { _nChiamate = 0; }
        return _super.call(this, .2, _credito, _nChiamate) || this;
    }
    return Sim1;
}(Sim));
var Sim2 = /** @class */ (function (_super) {
    __extends(Sim2, _super);
    function Sim2(_credito, _nChiamate) {
        if (_credito === void 0) { _credito = 0; }
        if (_nChiamate === void 0) { _nChiamate = 0; }
        return _super.call(this, .3, _credito, _nChiamate) || this;
    }
    return Sim2;
}(Sim));
var Sim3 = /** @class */ (function (_super) {
    __extends(Sim3, _super);
    function Sim3(_credito, _nChiamate) {
        if (_credito === void 0) { _credito = 0; }
        if (_nChiamate === void 0) { _nChiamate = 0; }
        return _super.call(this, .4, _credito, _nChiamate) || this;
    }
    return Sim3;
}(Sim));
var Sim4 = /** @class */ (function (_super) {
    __extends(Sim4, _super);
    function Sim4(_credito, _nChiamate) {
        if (_credito === void 0) { _credito = 0; }
        if (_nChiamate === void 0) { _nChiamate = 0; }
        return _super.call(this, .5, _credito, _nChiamate) || this;
    }
    return Sim4;
}(Sim));
var Sim5 = /** @class */ (function (_super) {
    __extends(Sim5, _super);
    function Sim5() {
        return _super.call(this, .6) || this;
    }
    return Sim5;
}(Sim));
// let s = new Sim1()
// s.ricarica(10)
// try {
//     s.chiamata(10)
//     console.log("La chiamata è stata effettuata");
// } catch(err) {
//     console.log("ERR", err.message);
// }
document.getElementById("btn").addEventListener("click", function (e) {
    e.preventDefault();
    var i = document.getElementById("input");
    console.log(i.value);
});
